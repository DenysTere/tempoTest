import React from "react";
import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  labels?: string[];
  showLabels?: boolean;
}

const ProgressIndicator = ({
  currentStep = 0,
  totalSteps = 10,
  labels = [],
  showLabels = false,
}: ProgressIndicatorProps) => {
  const progress = (currentStep / (totalSteps - 1)) * 100;

  return (
    <div className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm">
      {/* Main progress bar */}
      <div className="relative h-1.5 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Step indicators */}
      <div className="relative w-full flex justify-between mt-2">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const isCompleted = index <= currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                className={`w-2 h-2 rounded-full ${isCurrent ? "bg-pink-500 ring-2 ring-pink-200" : isCompleted ? "bg-pink-400" : "bg-gray-200"}`}
                initial={{ scale: 1 }}
                animate={isCurrent ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                transition={{
                  duration: 0.5,
                  repeat: isCurrent ? Infinity : 0,
                  repeatDelay: 1.5,
                }}
              />
              {showLabels && labels[index] && (
                <span className="text-xs text-gray-500 mt-1 hidden sm:block">
                  {labels[index]}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Text indicator */}
      <div className="flex justify-between mt-2 text-xs text-gray-500 font-light">
        <span className="font-medium text-pink-700">
          Step {currentStep + 1} of {totalSteps}
        </span>
        <span className="text-gray-400">{Math.round(progress)}% complete</span>
      </div>
    </div>
  );
};

export default ProgressIndicator;
