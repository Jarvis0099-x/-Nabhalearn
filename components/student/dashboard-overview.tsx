"use client"

import { useLanguage } from "@/contexts/language-context"
import { useAuth } from "@/contexts/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { sampleLearningPacks, sampleBadges, sampleAssignments } from "@/lib/sample-data"
import { BookOpen, Trophy, FileText, Clock, Star } from "lucide-react"

export function DashboardOverview() {
  const { t } = useLanguage()
  const { user } = useAuth()

  const completedLessons = sampleLearningPacks.filter((pack) => pack.progress === 100).length
  const totalLessons = sampleLearningPacks.length
  const earnedBadges = sampleBadges.filter((badge) => badge.earned).length
  const pendingAssignments = sampleAssignments.filter((a) => a.status === "pending").length
  const averageScore =
    sampleAssignments.filter((a) => a.score).reduce((acc, a) => acc + (a.score || 0), 0) /
    sampleAssignments.filter((a) => a.score).length

  const stats = [
    {
      title: "Lessons Completed",
      value: `${completedLessons}/${totalLessons}`,
      icon: BookOpen,
      color: "text-blue-600",
      progress: (completedLessons / totalLessons) * 100,
    },
    {
      title: "Badges Earned",
      value: earnedBadges.toString(),
      icon: Trophy,
      color: "text-yellow-600",
    },
    {
      title: "Pending Assignments",
      value: pendingAssignments.toString(),
      icon: FileText,
      color: "text-orange-600",
    },
    {
      title: "Average Score",
      value: `${Math.round(averageScore)}%`,
      icon: Star,
      color: "text-green-600",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-balance mb-2">Welcome back, {user?.username}!</h2>
        <p className="text-muted-foreground text-pretty">Continue your learning journey. You're doing great!</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                {stat.progress !== undefined && (
                  <div className="mt-4">
                    <Progress value={stat.progress} className="h-2" />
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Lessons */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Recent Lessons
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {sampleLearningPacks.slice(0, 3).map((pack) => (
              <div key={pack.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{pack.title}</h4>
                  <p className="text-xs text-muted-foreground">{pack.subject}</p>
                  <Progress value={pack.progress} className="h-1 mt-2" />
                </div>
                <Badge variant={pack.progress === 100 ? "default" : "secondary"}>{pack.progress}%</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Earned Badges */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Recent Badges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {sampleBadges
                .filter((badge) => badge.earned)
                .map((badge) => (
                  <div key={badge.id} className="text-center p-3 bg-muted rounded-lg">
                    <div className="text-2xl mb-1">{badge.icon}</div>
                    <h4 className="font-medium text-sm">{badge.name}</h4>
                    <p className="text-xs text-muted-foreground">{badge.description}</p>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Jump back into your learning</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-primary/5 hover:bg-primary/10 rounded-lg text-left transition-colors touch-target">
              <Clock className="w-6 h-6 text-primary mb-2" />
              <h4 className="font-medium">Continue Last Lesson</h4>
              <p className="text-sm text-muted-foreground">Pick up where you left off</p>
            </button>
            <button className="p-4 bg-secondary/5 hover:bg-secondary/10 rounded-lg text-left transition-colors touch-target">
              <FileText className="w-6 h-6 text-secondary mb-2" />
              <h4 className="font-medium">View Assignments</h4>
              <p className="text-sm text-muted-foreground">{pendingAssignments} pending</p>
            </button>
            <button className="p-4 bg-accent/5 hover:bg-accent/10 rounded-lg text-left transition-colors touch-target">
              <Trophy className="w-6 h-6 text-accent mb-2" />
              <h4 className="font-medium">Take a Quiz</h4>
              <p className="text-sm text-muted-foreground">Test your knowledge</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
