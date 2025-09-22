
"use client"

import { useState } from "react"
// We will still import useAuth but not enforce it for demo
import { useAuth } from "@/contexts/auth-context"
import { StudentNav } from "@/components/student/student-nav"
import { DashboardOverview } from "@/components/student/dashboard-overview"
import { LessonsView } from "@/components/student/lessons-view"
import { OfflineProvider } from "@/contexts/offline-context"

export default function StudentDashboard() {
  // We still get user but don't use it for redirect
  const { user, isLoading } = useAuth()
  const [activeTab, setActiveTab] = useState("dashboard")

  // 🟢 Temporarily disable redirect for demo
  // useEffect(() => {
  //   if (!isLoading && (!user || user.role !== "student")) {
  //     router.push("/")
  //   }
  // }, [user, isLoading, router])

  // 🟢 Also allow page to render even if no user
  // if (!user || user.role !== "student") {
  //   return null
  // }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />
      case "lessons":
        return <LessonsView />
      case "progress":
        return <div className="p-6">Progress view coming soon...</div>
     case "assignments":
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">📚 Assignments</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Math Homework Card */}
        <div className="bg-primary text-primary-foreground rounded-lg p-4 shadow hover:shadow-lg cursor-pointer transition transform hover:-translate-y-1">
          <div className="flex items-center space-x-3 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
            </svg>
            <h3 className="font-bold text-lg">Math Homework</h3>
          </div>
          <p className="text-sm text-muted-foreground">Due: 25th Sep</p>
        </div>

        {/* Science Project Card */}
        <div className="bg-secondary text-secondary-foreground rounded-lg p-4 shadow hover:shadow-lg cursor-pointer transition transform hover:-translate-y-1">
          <div className="flex items-center space-x-3 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
            </svg>
            <h3 className="font-bold text-lg">Science Project</h3>
          </div>
          <p className="text-sm text-muted-foreground">Due: 28th Sep</p>
        </div>

        {/* History Essay Card */}
        <div className="bg-accent text-accent-foreground rounded-lg p-4 shadow hover:shadow-lg cursor-pointer transition transform hover:-translate-y-1">
          <div className="flex items-center space-x-3 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
            </svg>
            <h3 className="font-bold text-lg">History Essay</h3>
          </div>
          <p className="text-sm text-muted-foreground">Due: 30th Sep</p>
        </div>
      </div>
    </div>
  );
      case "timetable":
        return <div className="p-6">Timetable view coming soon...</div>
      case "digital":
        return <div className="p-6">Digital literacy view coming soon...</div>
      default:
        return <DashboardOverview />
    }
  }

  return (
    <OfflineProvider>
      <div className="min-h-screen bg-background flex">
        {/* Sidebar Navigation */}
        <div className="w-64 hidden md:block">
          <StudentNav activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6">{renderContent()}</div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border">
          <div className="flex justify-around py-2">
            {["dashboard", "lessons", "progress", "assignments"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`p-3 rounded-lg touch-target ${
                  activeTab === tab ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                <div className="text-xs capitalize">{tab}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </OfflineProvider>
  )
}
