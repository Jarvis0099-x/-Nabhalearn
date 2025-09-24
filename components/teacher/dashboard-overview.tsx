"use client";
import React from "react";

export function TeacherDashboardOverview(): JSX.Element {
  const stats = {
    totalStudents: 120,
    avgScore: 78,
    assignmentsSubmitted: 95,
    topPerformers: 20,
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Teacher Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg p-4 shadow">
          <div className="text-sm text-muted-foreground">Total Students</div>
          <div className="text-2xl font-bold">{stats.totalStudents}</div>
        </div>

        <div className="bg-card rounded-lg p-4 shadow">
          <div className="text-sm text-muted-foreground">Avg Score</div>
          <div className="text-2xl font-bold">{stats.avgScore}%</div>
        </div>

        <div className="bg-card rounded-lg p-4 shadow">
          <div className="text-sm text-muted-foreground">Assignments Submitted</div>
          <div className="text-2xl font-bold">{stats.assignmentsSubmitted}%</div>
        </div>

        <div className="bg-card rounded-lg p-4 shadow">
          <div className="text-sm text-muted-foreground">Top Performers</div>
          <div className="text-2xl font-bold">{stats.topPerformers}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-card rounded-lg p-4 shadow">
          <h3 className="font-semibold mb-2">Assignments Submission Rate</h3>
          <div className="w-full bg-muted rounded-full h-4 mb-3">
            <div className="bg-primary h-4 rounded-full" style={{ width: ${stats.assignmentsSubmitted}% }} />
          </div>
          <p className="text-sm text-muted-foreground">{stats.assignmentsSubmitted}% of students submitted the recent assignment</p>
        </div>

        <div className="bg-card rounded-lg p-4 shadow">
          <h3 className="font-semibold mb-2">Performance Distribution</h3>
          <div className="space-y-2">
            <div><div className="text-sm">Excellent (85-100)</div>
              <div className="w-full bg-muted h-3 rounded"><div className="bg-secondary h-3 rounded" style={{ width: "25%" }} /></div>
            </div>
            <div><div className="text-sm">Good (70-84)</div>
              <div className="w-full bg-muted h-3 rounded"><div className="bg-primary h-3 rounded" style={{ width: "40%" }} /></div>
            </div>
            <div><div className="text-sm">Average (50-69)</div>
              <div className="w-full bg-muted h-3 rounded"><div className="bg-accent h-3 rounded" style={{ width: "25%" }} /></div>
            </div>
            <div><div className="text-sm">Needs Help (&lt;50)</div>
              <div className="w-full bg-muted h-3 rounded"><div className="bg-destructive h-3 rounded" style={{ width: "10%" }} /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg p-4 shadow">
        <h3 className="font-semibold mb-2">Quick Actions</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          <button className="px-3 py-2 bg-primary text-primary-foreground rounded">Review Pending Assignments</button>
          <button className="px-3 py-2 bg-secondary text-secondary-foreground rounded">Message Class</button>
          <button className="px-3 py-2 bg-accent text-accent-foreground rounded">Export Grades</button>
          <button className="px-3 py-2 bg-muted text-muted-foreground rounded">Schedule Parent Meeting</button>
        </div>
      </div>
    </div>
  )
}
