import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuizNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
  onRestart: () => void;
  canProgress?: boolean;
}

const QuizNavigation = ({
  currentStep = 0,
  totalSteps = 10,
  onNext = () => {},
  onBack = () => {},
  onRestart = () => {},
  canProgress = false,
}: QuizNavigationProps) => {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <motion.div
      className="flex items-center justify-between w-full px-4 py-3 bg-background border-t border-muted"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={onBack}
        disabled={isFirstStep}
        className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        Back
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={onRestart}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <RotateCcw className="h-4 w-4" />
      </Button>

      <Button
        variant="default"
        size="sm"
        onClick={onNext}
        disabled={!canProgress}
        className="flex items-center gap-1 bg-pink-100 text-pink-800 hover:bg-pink-200 transition-colors"
      >
        {isLastStep ? "Finish" : "Next"}
        <ChevronRight className="h-4 w-4" />
      </Button>
    </motion.div>
  );
};

export default QuizNavigation;
