"use client";
import React from "react";

export function Progress({ value = 0, className = "" }) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full bg-blue-600 transition-all"
        style={{ width: `${clamped}%`, height: "100%" }}
      />
    </div>
  );
}

export default Progress;


