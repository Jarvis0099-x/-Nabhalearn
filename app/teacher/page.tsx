"use client"
import { useState } from "react"
import { TeacherNav } from "@/components/teacher/TeacherNav"

export default function TeacherPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="flex h-screen">
      <TeacherNav activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 p-6 bg-background overflow-y-auto">
        {activeTab === "dashboard" && <div>Dashboard with overview of all students</div>}
        {activeTab === "classes" && <div>List of all classes</div>}
        {activeTab === "students" && <div>Student progress data here</div>}
        {activeTab === "assignments" && <div>Upload assignments/videos section</div>}
        {activeTab === "digital" && <div>Digital literacy videos / content here</div>}
      </div>
    </div>
  )
}
