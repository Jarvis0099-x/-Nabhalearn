"use client";
import React, { useState } from "react";

const fakeVideos = [
  { id: 1, title: "How to Upload Assignments" },
  { id: 2, title: "Using the Teacher Dashboard" },
  { id: 3, title: "Teaching Safely Online" },
  { id: 4, title: "Preloading Content for Offline Schools" },
  { id: 5, title: "Using Analytics to Improve Classes" },
];

export function TeacherDigitalLiteracy(): JSX.Element {
  const [preview, setPreview] = useState<number | null>(null);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Digital Literacy (Teachers)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {fakeVideos.map((v) => (
          <div key={v.id} className="bg-gray-100 rounded-lg overflow-hidden shadow relative">
            <div className="aspect-video bg-black/5 flex items-center justify-center text-5xl">▶️</div>
            <div className="p-3">
              <div className="font-semibold">{v.title}</div>
              <div className="text-sm text-muted-foreground mt-1">Approx. 5 mins • Example video</div>
              <div className="mt-3">
                <button onClick={() => setPreview(v.id)} className="px-3 py-1 bg-primary text-primary-foreground rounded">Preview</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {preview && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <h3 className="font-bold mb-4">Preview Video</h3>
            <div className="aspect-video bg-black/5 flex items-center justify-center text-3xl">Fake video player for video #{preview}</div>
            <div className="mt-4 text-right">
              <button className="px-3 py-1 bg-muted rounded mr-2" onClick={() => setPreview(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
