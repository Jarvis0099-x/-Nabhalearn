"use client";

import { useState } from "react";
import { OfflineProvider } from "@/contexts/offline-context";
import { TeacherNav } from "@/components/teacher/teacher-nav";
import { TeacherDashboardOverview } from "@/components/teacher/dashboard-overview";
import { TeacherStudentsView } from "@/components/teacher/students-view";
import { TeacherUploadView } from "@/components/teacher/upload-view";
import { TeacherDigitalLiteracy } from "@/components/teacher/digital-literacy";

// demo user for hackathon
const user = { name: "Demo Teacher", role: "teacher" };
const isLoading = false;

export default function TeacherPage() {
  const [activeTab, setActiveTab] = useState<string>("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <TeacherDashboardOverview />;
      case "students":
        return <TeacherStudentsView />;
      case "upload":
        return <TeacherUploadView />;
      case "digital":
        return <TeacherDigitalLiteracy />;
      case "classes":
        return <div className="p-6">Class-wise overview coming soon...</div>;
      case "analytics":
        return <div className="p-6">Analytics details coming soon...</div>;
      default:
        return <TeacherDashboardOverview />;
    }
  };

  return (
    <OfflineProvider>
      <div className="min-h-screen bg-background flex">
        {/* Sidebar */}
        <div className="w-64 hidden md:block">
          <TeacherNav activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6">{renderContent()}</div>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border">
          <div className="flex justify-around py-2">
            {["dashboard", "students", "upload", "digital"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={p-3 rounded-lg touch-target ${activeTab === tab ? "bg-primary text-primary-foreground" : "text-muted-foreground"}}
              >
                <div className="text-xs capitalize">{tab}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </OfflineProvider>
  );
}
