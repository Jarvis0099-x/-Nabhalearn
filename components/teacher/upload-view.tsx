"use client";
import React, { useState } from "react";

export function TeacherUploadView(): JSX.Element {
  const [uploaded, setUploaded] = useState<{ name: string; when: string }[]>([]);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const list = Array.from(files).map((f) => ({ name: f.name, when: new Date().toLocaleString() }));
    setUploaded((s) => [...list, ...s]);
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Upload Content</h2>

      <div className="bg-card rounded-lg p-4 shadow">
        <p className="text-sm text-muted-foreground mb-2">Upload videos, assignments, PDF materials for your classes.</p>
        <input type="file" multiple onChange={handleFiles} />
        <div className="mt-4">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded">Upload Now</button>
        </div>
      </div>

      <div className="bg-card rounded-lg p-4 shadow">
        <h3 className="font-semibold mb-2">Recently uploaded</h3>
        {uploaded.length === 0 ? (
          <p className="text-sm text-muted-foreground">No uploads yet</p>
        ) : (
          <ul className="space-y-2">
            {uploaded.map((u, i) => (
              <li key={i} className="flex justify-between bg-muted/30 p-2 rounded">
                <div>{u.name}</div>
                <div className="text-xs text-muted-foreground">{u.when}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
