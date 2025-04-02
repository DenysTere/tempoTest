import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnswerOptionProps {
  id: string;
  label: string;
  imageUrl?: string;
  colorSwatch?: string;
  isSelected?: boolean;
  onClick: (id: string) => void;
  type?: "text" | "image" | "color";
}

const AnswerOption = ({
  id = "",
  label = "Answer option",
  imageUrl,
  colorSwatch,
  isSelected = false,
  onClick,
  type = "text",
}: AnswerOptionProps) => {
  const handleClick = () => {
    onClick(id);
  };

  // Hair color swatches
  const hairColors = {
    Blonde: "#E6BE8A",
    Brown: "#8C5A2E",
    Black: "#1C1C1C",
    Red: "#A52A2A",
    Gray: "#A9A9A9",
    Other:
      "linear-gradient(to right, #E6BE8A, #8C5A2E, #1C1C1C, #A52A2A, #A9A9A9)",
  };

  // Eye color swatches
  const eyeColors = {
    Blue: "#6CA0DC",
    Green: "#4E9E81",
    Brown: "#634E34",
    Hazel: "#9E6B53",
    Gray: "#A0A0A0",
    Other:
      "linear-gradient(to right, #6CA0DC, #4E9E81, #634E34, #9E6B53, #A0A0A0)",
  };

  // Determine color swatch based on label if it's a color type
  const getColorSwatch = () => {
    if (type === "color") {
      if (label in hairColors)
        return hairColors[label as keyof typeof hairColors];
      if (label in eyeColors) return eyeColors[label as keyof typeof eyeColors];
      return colorSwatch || "#e5e5e5";
    }
    return colorSwatch || "#e5e5e5";
  };

  return (
    <motion.div
      className={cn(
        "w-full max-w-[335px] mx-auto mb-3 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 bg-white shadow-sm",
        isSelected
          ? "ring-2 ring-pink-400 shadow-md"
          : "border border-gray-200 hover:border-pink-300",
        type === "color" ? "h-16" : "min-h-[80px]",
      )}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {type === "text" && (
        <div className="flex items-center p-4 h-full">
          <div className="w-5 h-5 mr-3 flex-shrink-0"></div>
          <span className="text-sm font-medium text-gray-800">{label}</span>
        </div>
      )}

      {type === "image" && (
        <div className="flex flex-col h-full">
          {imageUrl && (
            <div className="h-40 overflow-hidden">
              <img
                src={
                  imageUrl ||
                  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80"
                }
                alt={label}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-3 flex items-center">
            <div className="w-5 h-5 mr-3 flex-shrink-0"></div>
            <span className="text-sm font-medium text-gray-800">{label}</span>
          </div>
        </div>
      )}

      {type === "color" && (
        <div className="flex items-center p-4 h-full">
          <div
            className="w-8 h-8 rounded-full mr-3 flex-shrink-0 border border-gray-200 shadow-inner"
            style={{ background: getColorSwatch() }}
          />
          <span className="text-sm font-medium text-gray-800">{label}</span>
          <div className="ml-auto">
            <div className="w-5 h-5 flex-shrink-0"></div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default AnswerOption;
