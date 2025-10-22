import React from "react";
import { cn } from "@/lib/utils";

const GridBg = ({ className }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-[#0b0b15]",
        className
      )}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Blue spotlight (left) */}
      <div className="absolute left-[-10%] top-[-10%] h-[80%] w-[60%] rounded-full bg-blue-800/40 blur-[140px]" />

      {/* Purple spotlight (right) */}
      <div className="absolute right-[-10%] top-[-20%] h-[80%] w-[60%] rounded-full bg-fuchsia-700/40 blur-[140px]" />

      {/* Soft fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b0b15]" />
    </div>
  );
};

export default GridBg