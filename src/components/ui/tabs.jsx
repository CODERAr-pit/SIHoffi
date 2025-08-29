"use client";
import React, { createContext, useContext, useMemo } from "react";

const TabsContext = createContext({ value: undefined, onValueChange: undefined });

export function Tabs({ value, onValueChange, children }) {
  const ctx = useMemo(() => ({ value, onValueChange }), [value, onValueChange]);
  return (
    <TabsContext.Provider value={ctx}>
      <div data-tabs-value={value}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className = "", children }) {
  return <div className={`inline-grid rounded-lg p-1 ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, className = "", children }) {
  const { value: active, onValueChange } = useContext(TabsContext);
  const isActive = active === value;
  return (
    <button
      className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
        isActive ? "bg-white text-blue-700 shadow" : "hover:bg-white/60"
      } ${className}`}
      data-value={value}
      type="button"
      onClick={() => onValueChange?.(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className = "", children }) {
  const { value: active } = useContext(TabsContext);
  if (active !== value) return null;
  return (
    <div className={className} data-content-value={value}>
      {children}
    </div>
  );
}

