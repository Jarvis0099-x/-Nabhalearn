"use client";
import React from "react";

interface StudentRow { id: number; name: string; cls: string; avg: number; submitted: boolean; }

const fakeStudents: StudentRow[] = [
  { id: 1, name: "Aman Kumar", cls: "6A", avg: 88, submitted: true },
  { id: 2, name: "Sita Devi", cls: "6A", avg: 76, submitted: true },
  { id: 3, name: "Ravi Singh", cls: "6B", avg: 52, submitted: false },
  { id: 4, name: "Neha Sharma", cls: "6B", avg: 93, submitted: true },
  { id: 5, name: "Arjun Patel", cls: "6A", avg: 45, submitted: false },
];

export function TeacherStudentsView(): JSX.Element {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All Students</h2>
      <div className="overflow-auto border rounded">
        <table className="min-w-full divide-y">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold">Name</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Class</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Avg Score</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Assignments</th>
            </tr>
          </thead>
          <tbody className="bg-background divide-y">
            {fakeStudents.map((s) => (
              <tr key={s.id} className="hover:bg-card transition">
                <td className="px-4 py-3">{s.name}</td>
                <td className="px-4 py-3">{s.cls}</td>
                <td className="px-4 py-3">{s.avg}%</td>
                <td className="px-4 py-3">
                  <span className={px-2 py-1 rounded text-sm ${s.submitted ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}}>
                    {s.submitted ? "Submitted" : "Missing"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
