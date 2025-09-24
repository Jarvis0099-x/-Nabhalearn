"use client"

import React, { useState } from "react"
import { TeacherNav } from "@/components/teacher-nav"

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <div className="p-6">Teacher Dashboard Overview here...</div>
      case "students":
        return <div className="p-6">All students data here...</div>
      case "assignments":
        return <div className="p-6">Upload assignments here...</div>
      case "progress":
        return <div className="p-6">Track student progress here...</div>
      case "digital":
        return <div className="p-6">Teacher Digital Literacy section here...</div>
      default:
        return <div className="p-6">Teacher Dashboard Overview</div>
    }
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 hidden md:block">
        <TeacherNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  )
}
