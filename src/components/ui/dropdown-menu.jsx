// "use client";
// import React, { useState, useRef, useEffect } from "react";

// export function DropdownMenu({ children }) {
//   return <div className="relative inline-block text-left">{children}</div>;
// }

// export function DropdownMenuTrigger({ asChild = false, children }) {
//   return asChild ? children : <button type="button">{children}</button>;
// }

// export function DropdownMenuContent({ className = "", children }) {
//   return (
//     <div className={`absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none ${className}`}>
//       <div className="py-1">{children}</div>
//     </div>
//   );
// }

// export function DropdownMenuItem({ onSelect, children }) {
//   return (
//     <button
//       type="button"
//       onClick={(e) => {
//         e.preventDefault();
//         onSelect?.();
//       }}
//       className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
//     >
//       {children}
//     </button>
//   );
// }

// export default DropdownMenu;

"use client";
import React, { useState, useRef, useEffect } from "react";

export function DropdownMenu({ children }) {
  return <div className="relative inline-block text-left">{children}</div>;
}

export function DropdownMenuTrigger({ asChild = false, children, onClick }) {
  return asChild ? (
    React.cloneElement(children, { onClick })
  ) : (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export function DropdownMenuContent({ className = "", open, children }) {
  if (!open) return null;

  return (
    <div
      className={`absolute right-0 mt-2 w-48 origin-top-right rounded-xl bg-white shadow-lg border border-gray-200 z-50 ${className}`}
    >
      <div className="py-1">{children}</div>
    </div>
  );
}

export function DropdownMenuItem({ onSelect, children }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        onSelect?.();
      }}
      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
    >
      {children}
    </button>
  );
}


export default DropdownMenu;

