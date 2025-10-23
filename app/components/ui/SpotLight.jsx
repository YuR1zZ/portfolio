import React from "react";
import { cn } from "@/lib/utils";
const SpotLight = ({ className }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {/* Blue light (left) */}
      <div className="absolute left-[-30%] top-[-30%] h-[80%] w-[50%] rounded-full bg-blue-400/40 blur-[120px]" />

      {/* Purple light (right) */}
      <div className="absolute right-[-20%] bottom-[-30%] h-[80%] w-[50%] rounded-full bg-gray-700/40 blur-[120px]" />
    </div>
  );
};
export default SpotLight;