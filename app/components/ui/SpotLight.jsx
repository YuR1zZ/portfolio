import React from "react";
import { cn } from "@/lib/utils";

const SpotLight = ({
  className,
  showBlue = true,
  showGrey = true,
  greyPosition = "bottom", // can be "top" or "bottom"
}) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {/* Blue light (left) */}
      {showBlue && (
        <div className="absolute left-[-30%] top-[-30%] h-[80%] w-[50%] rounded-full bg-blue-400/40 blur-[120px]" />
      )}

      {/* Grey light (configurable position) */}
      {showGrey && (
        <div
          className={cn(
            "absolute right-[-20%] h-[80%] w-[50%] rounded-full bg-gray-700/40 blur-[120px]",
            greyPosition === "top" ? "top-[-30%]" : "bottom-[-30%]"
          )}
        />
      )}
    </div>
  );
};

export default SpotLight;
