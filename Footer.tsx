import React from 'react';

export default function BrandLogo({ 
  className = "w-12 h-12", 
  theme = "light" 
}: { 
  className?: string;
  theme?: "light" | "dark";
}) {
  const leftCircleColor = theme === "light" ? "white" : "#1E293B";
  const rightCircleColor = theme === "light" ? "#A7D7C5" : "#5A8F7B";
  const dotColor = "#D4AF37";

  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left Circle Outline */}
      <circle cx="48" cy="60" r="28" stroke={leftCircleColor} strokeWidth="2.5" />
      {/* Right Circle Outline */}
      <circle cx="72" cy="60" r="28" stroke={rightCircleColor} strokeWidth="2.5" />
      {/* Center Gold Dot */}
      <circle cx="60" cy="60" r="3.5" fill={dotColor} />
    </svg>
  );
}
