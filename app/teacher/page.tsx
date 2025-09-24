"use client"

import { useState } from "react"
import { OfflineProvider } from "@/contexts/offline-context"

// 🟢 Fake teacher user for now (until auth is hooked)
const user = { name: "Demo Teacher", role: "teacher" }
const isLoading = false

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  // This decides what content to show per tab
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="p-6 space-y-4">
            <h1 className="text-2xl font-bold">Welcome {user.name}</h1>
            <p>Here’s a quick overview of your classes and students.</p>
            <ul className="list-disc pl-6">
              <li>Number of Classes: 5</li>
              <li>Total Students: 120</li>
              <li>Pending Assignments to Review: 8</li>
            </ul>
          </div>
        )

      case "students":
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">All Students Data</h2>
            <p>Show a table with all students, their scores, and progress here.</p>
          </div>
        )

      case "uploads":
        return (
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold">Upload Section</h2>
            <p>Upload new videos or assignments for your classes.</p>
            <input
              type="file"
              className="border rounded p-2"
              multiple
            />
            <button className="bg-primary text-white px-4 py-2 rounded">Upload</button>
          </div>
        )

      case "progress":
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold">Students’ Progress</h2>
            <p>Visualize how many students did assignments, top scores, etc.</p>
          </div>
        )

      case "digital":
        return (
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold">Digital Literacy for Teachers</h2>
            <p>Watch training videos, tips, and guides for digital tools.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5].map((vid) => (
                <div
                  key={vid}
                  className="bg-gray-100 border rounded-lg aspect-video flex items-center justify-center"
                >
                  <span className="text-gray-500">Video {vid}</span>
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <OfflineProvider>
      <div className="min-h-screen bg-background flex">
        {/* Sidebar */}
        <div className="w-64 hidden md:block bg-secondary">
          <div className="p-4 font-bold text-xl">Teacher Panel</div>
          <nav className="space-y-2">
            {["dashboard", "students", "uploads", "progress", "digital"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`block w-full text-left px-4 py-2 rounded ${
                  activeTab === tab ? "bg-primary text-white" : "hover:bg-muted"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
            <button
              onClick={() => window.location.href = "/"} // logout to main
              className="block w-full text-left px-4 py-2 rounded text-red-500 hover:bg-muted"
            >
              Logout
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {renderContent()}
        </div>
      </div>
    </OfflineProvider>
  )
}
