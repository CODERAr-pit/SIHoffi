"use client";
import React from "react";

export const Button = React.forwardRef(function Button(
  { className = "", variant = "default", asChild = false, ...props },
  ref
) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
    outline:
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus:ring-blue-400",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-900",
  };
  const Comp = asChild ? React.Fragment : "button";
  const classes = `${base} ${variants[variant] || variants.default} ${className}`;
  if (asChild) {
    return <span className={classes} ref={ref} {...props} />;
  }
  return <button className={classes} ref={ref} {...props} />;
});

export default Button;


