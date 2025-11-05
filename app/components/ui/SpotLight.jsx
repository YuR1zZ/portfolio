import React from "react";
import { cn } from "@/lib/utils";

/**
 * SpotLight component
 * Supports multiple colored light spots positioned anywhere.
 *
 * @example
 * <SpotLight
 *   lights={[
 *     { color: "blue", position: "top-left" },
 *     { color: "gray", position: "bottom-right" },
 *     { color: "gray", position: "top-right" },
 *   ]}
 * />
 */
const SpotLight = ({ className, lights = [] }) => {
  // A simple map of position → Tailwind classes
  const positionClasses = {
    "top-left": "top-[-30%] left-[-30%]",
    "top-right": "top-[-30%] right-[-30%]",
    "bottom-left": "bottom-[-30%] left-[-30%]",
    "bottom-right": "bottom-[-30%] right-[-30%]",
    "top-center": "top-[-50%] left-[25%]",
    "bottom-center": "bottom-[-70%] left-[25%]",
  };

  // Color map (adjust opacity & blur if desired)
  const colorClasses = {
    blue: "bg-blue-400/25",
    gray: "bg-gray-700/40",
    red: "bg-red-400/30",
    green: "bg-green-400/30",
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {lights.map((light, i) => (
        <div
          key={i}
          className={cn(
            "absolute h-[80%] w-[50%] rounded-full blur-[120px]",
            colorClasses[light.color] || "bg-gray-700/30",
            positionClasses[light.position] || "bottom-[-50%] right-[-20%]"
          )}
        />
      ))}
    </div>
  );
};

export default SpotLight;
