"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { useOffline } from "@/contexts/offline-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { sampleLearningPacks } from "@/lib/sample-data"
import { Download, Play, Search, Wifi, WifiOff, HardDrive } from "lucide-react"

export function LessonsView() {
  const { t } = useLanguage()
  const { isOnline, downloadedPacks, downloadPack } = useOffline()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [downloading, setDownloading] = useState<string | null>(null)

  const subjects = ["all", ...new Set(sampleLearningPacks.map((pack) => pack.subject))]

  const filteredPacks = sampleLearningPacks.filter((pack) => {
    const matchesSearch =
      pack.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pack.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = selectedSubject === "all" || pack.subject === selectedSubject
    return matchesSearch && matchesSubject
  })

  const handleDownload = async (packId: string) => {
    setDownloading(packId)
    try {
      await downloadPack(packId)
    } finally {
      setDownloading(null)
    }
  }

  const getPackStatus = (pack: any) => {
    const isDownloaded = downloadedPacks.includes(pack.id)
    if (pack.progress === 100) return { status: "completed", color: "bg-green-100 text-green-800" }
    if (pack.progress > 0) return { status: "in-progress", color: "bg-blue-100 text-blue-800" }
    if (isDownloaded) return { status: "downloaded", color: "bg-purple-100 text-purple-800" }
    return { status: "available", color: "bg-gray-100 text-gray-800" }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-balance mb-2">{t("myLessons")}</h2>
        <p className="text-muted-foreground text-pretty">Download lessons for offline learning</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search lessons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 touch-target"
          />
        </div>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="px-3 py-2 border border-border rounded-md bg-background touch-target"
        >
          <option value="all">All Subjects</option>
          {subjects.slice(1).map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      {/* Connection Status */}
      <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
        {isOnline ? (
          <>
            <Wifi className="w-4 h-4 text-green-600" />
            <span className="text-sm">Connected - You can download new lessons</span>
          </>
        ) : (
          <>
            <WifiOff className="w-4 h-4 text-red-600" />
            <span className="text-sm">Offline - Only downloaded lessons available</span>
          </>
        )}
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPacks.map((pack) => {
          const isDownloaded = downloadedPacks.includes(pack.id)
          const status = getPackStatus(pack)
          const isDownloading = downloading === pack.id

          return (
            <Card key={pack.id} className={`${!isOnline && !isDownloaded ? "opacity-50" : ""}`}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-balance">{pack.title}</CardTitle>
                    <CardDescription className="text-pretty">{pack.description}</CardDescription>
                  </div>
                  <Badge className={status.color}>{status.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Progress */}
                {pack.progress > 0 && (
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{pack.progress}%</span>
                    </div>
                    <Progress value={pack.progress} className="h-2" />
                  </div>
                )}

                {/* Pack Info */}
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{pack.subject}</span>
                  <span>{pack.size}</span>
                </div>

                {/* Content Types */}
                <div className="flex gap-2">
                  {pack.content.text && (
                    <Badge variant="outline" className="text-xs">
                      Text
                    </Badge>
                  )}
                  {pack.content.audioUrl && (
                    <Badge variant="outline" className="text-xs">
                      Audio
                    </Badge>
                  )}
                  {pack.content.videoUrl && (
                    <Badge variant="outline" className="text-xs">
                      Video
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  {isDownloaded ? (
                    <Button className="flex-1 touch-target" size="sm">
                      <Play className="w-4 h-4 mr-2" />
                      Open
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleDownload(pack.id)}
                      disabled={!isOnline || isDownloading}
                      className="flex-1 touch-target"
                      size="sm"
                      variant="outline"
                    >
                      {isDownloading ? (
                        <>
                          <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                          Downloading...
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </>
                      )}
                    </Button>
                  )}

                  {isDownloaded && (
                    <Button size="sm" variant="ghost" className="touch-target">
                      <HardDrive className="w-4 h-4" />
                    </Button>
                  )}
                </div>

                {/* Download on WiFi Notice */}
                {!isOnline && !isDownloaded && (
                  <p className="text-xs text-muted-foreground text-center">Connect to WiFi to download</p>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filteredPacks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No lessons found matching your search.</p>
        </div>
      )}
    </div>
  )
}
