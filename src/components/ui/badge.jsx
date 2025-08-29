"use client";
import React from "react";

export function Badge({ className = "", children, ...props }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;


