"use client";
import React, { createContext, useContext, useState } from "react";

const SidebarCtx = createContext();

export function SidebarProvider({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <SidebarCtx.Provider value={{ open, setOpen }}>{children}</SidebarCtx.Provider>
  );
}

export function Sidebar({ className = "", children }) {
  return (
    <aside className={`w-72 shrink-0 ${className}`}>{children}</aside>
  );
}

export function SidebarHeader({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

export function SidebarFooter({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

export function SidebarContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

export function SidebarGroup({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

export function SidebarGroupLabel({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

export function SidebarGroupContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

export function SidebarMenu({ className = "", children }) {
  return <ul className={className}>{children}</ul>;
}

export function SidebarMenuItem({ className = "", children }) {
  return <li className={className}>{children}</li>;
}

export function SidebarMenuButton({ className = "", asChild = false, children }) {
  const Comp = asChild ? React.Fragment : "button";
  if (asChild) {
    return <span className={className}>{children}</span>;
  }
  return <button className={className}>{children}</button>;
}

export function SidebarTrigger({ className = "", ...props }) {
  const { open, setOpen } = useContext(SidebarCtx);
  return (
    <button
      type="button"
      className={className}
      onClick={() => setOpen(!open)}
      {...props}
    >
      ☰
    </button>
  );
}


