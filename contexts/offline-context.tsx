"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface OfflineContextType {
  isOnline: boolean
  downloadedPacks: string[]
  downloadPack: (packId: string) => Promise<void>
  removePack: (packId: string) => void
  syncData: () => Promise<void>
  lastSyncTime: string | null
  isSyncing: boolean
}

const OfflineContext = createContext<OfflineContextType | undefined>(undefined)

export function OfflineProvider({ children }: { children: React.ReactNode }) {
  const [isOnline, setIsOnline] = useState(true)
  const [downloadedPacks, setDownloadedPacks] = useState<string[]>([])
  const [lastSyncTime, setLastSyncTime] = useState<string | null>(null)
  const [isSyncing, setIsSyncing] = useState(false)

  useEffect(() => {
    // Load downloaded packs from localStorage
    const saved = localStorage.getItem("nabhalearn-downloaded-packs")
    if (saved) {
      setDownloadedPacks(JSON.parse(saved))
    }

    const savedSyncTime = localStorage.getItem("nabhalearn-last-sync")
    if (savedSyncTime) {
      setLastSyncTime(savedSyncTime)
    }

    // Monitor online status
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    setIsOnline(navigator.onLine)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  const downloadPack = async (packId: string): Promise<void> => {
    // Simulate download process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const newDownloaded = [...downloadedPacks, packId]
    setDownloadedPacks(newDownloaded)
    localStorage.setItem("nabhalearn-downloaded-packs", JSON.stringify(newDownloaded))
  }

  const removePack = (packId: string) => {
    const newDownloaded = downloadedPacks.filter((id) => id !== packId)
    setDownloadedPacks(newDownloaded)
    localStorage.setItem("nabhalearn-downloaded-packs", JSON.stringify(newDownloaded))
  }

  const syncData = async (): Promise<void> => {
    setIsSyncing(true)
    // Simulate sync process
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const now = new Date().toISOString()
    setLastSyncTime(now)
    localStorage.setItem("nabhalearn-last-sync", now)
    setIsSyncing(false)
  }

  return (
    <OfflineContext.Provider
      value={{
        isOnline,
        downloadedPacks,
        downloadPack,
        removePack,
        syncData,
        lastSyncTime,
        isSyncing,
      }}
    >
      {children}
    </OfflineContext.Provider>
  )
}

export function useOffline() {
  const context = useContext(OfflineContext)
  if (context === undefined) {
    throw new Error("useOffline must be used within an OfflineProvider")
  }
  return context
}
