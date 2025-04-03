import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface QuizCardProps {
  title: string;
  subtitle?: string;
  content?: React.ReactNode;
  backgroundImage?: string;
  options?: {
    id: string;
    label: string;
    image?: string;
    color?: string;
  }[];
  optionType?: "text" | "image" | "color";
  type?:
    | "question"
    | "value-proposition"
    | "social-proof"
    | "break"
    | "email-capture"
    | "paywall"
    | "loading";
  onSelectAnswer?: (optionId: string) => void;
  selectedAnswer?: string | null;
  onContinue?: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({
  title,
  subtitle,
  content,
  backgroundImage = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
  options = [],
  optionType = "text",
  type = "question",
  onSelectAnswer = () => {},
  selectedAnswer = null,
  onContinue = () => {},
}) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    if (type === "loading") {
      setLoadingProgress(0);
      setLoadingComplete(false);

      const duration = 4000; // 4 seconds
      const interval = 50; // Update every 50ms
      const steps = duration / interval;
      const increment = 100 / steps;

      const timer = setInterval(() => {
        setLoadingProgress((prev) => {
          const newProgress = Math.min(prev + increment, 100);
          if (newProgress >= 100) {
            clearInterval(timer);
            setLoadingComplete(true);
          }
          return newProgress;
        });
      }, interval);

      return () => clearInterval(timer);
    }
  }, [type]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const optionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.3 },
    }),
  };

  return (
    <motion.div
      className="w-full max-w-md mx-auto h-full bg-background"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <Card className="h-full border-none shadow-none overflow-hidden flex flex-col bg-white/80 backdrop-blur-sm">
        {backgroundImage && (
          <div
            className="w-full h-56 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/95"></div>
          </div>
        )}

        <CardHeader
          className={`${backgroundImage ? "-mt-16 relative z-10" : ""} pb-2`}
        >
          <CardTitle className="text-2xl md:text-3xl font-serif text-center text-pink-900 leading-tight">
            {title}
          </CardTitle>
          {subtitle && (
            <CardDescription className="text-center mt-2 text-gray-600">
              {subtitle}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="flex-grow px-5">
          {type === "loading" ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-gradient-to-r from-pink-400 to-purple-500 transition-all duration-300 ease-linear"
                  style={{ width: `${Math.round(loadingProgress)}%` }}
                ></div>
              </div>
              <div className="text-center mb-6">
                <p className="text-xl font-medium text-pink-800">
                  {Math.round(loadingProgress)}%
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Analyzing your preferences...
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {loadingProgress < 100
                    ? "Please wait..."
                    : "Analysis complete!"}
                </p>
              </div>
              {loadingComplete && (
                <button
                  onClick={onContinue}
                  className="px-8 py-3 rounded-full text-base font-medium shadow-md bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-none transition-all duration-300"
                >
                  Continue
                </button>
              )}
            </div>
          ) : type === "break" ? (
            <div className="prose prose-sm max-w-none text-center">
              {content}
            </div>
          ) : type === "email-capture" ? (
            <div className="space-y-4 mt-2">
              <p className="text-sm text-center text-gray-600 mb-4">
                Enter your email to receive your personalized style guide
              </p>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                />
                <button
                  onClick={onContinue}
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium shadow-md hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get My Style Guide
                </button>
              </div>
              <p className="text-xs text-center text-gray-500 mt-4">
                We respect your privacy and will never share your information.
              </p>
            </div>
          ) : type === "paywall" ? (
            <div className="w-full">{content}</div>
          ) : (
            <div className="space-y-3 mt-2">
              {options.map((option, index) => (
                <motion.div
                  key={option.id}
                  custom={index}
                  variants={optionVariants}
                  className={`
                    p-4 rounded-xl border cursor-pointer transition-all shadow-sm
                    ${selectedAnswer === option.id ? "border-pink-400 bg-pink-50 shadow-md" : "border-gray-200 hover:border-pink-300"}
                  `}
                  onClick={() => {
                    onSelectAnswer(option.id);
                    setTimeout(() => onContinue && onContinue(), 300);
                  }}
                >
                  <div className="flex items-center gap-3">
                    {option.image && optionType === "image" && (
                      <div
                        className="w-12 h-12 rounded-full bg-cover bg-center border border-gray-100"
                        style={{ backgroundImage: `url(${option.image})` }}
                      />
                    )}
                    {option.color && optionType === "color" && (
                      <div
                        className="w-8 h-8 rounded-full border border-gray-200 shadow-inner"
                        style={{ backgroundColor: option.color }}
                      />
                    )}
                    <span className="flex-grow font-medium text-gray-800">
                      {option.label}
                    </span>
                    <div className="w-5 h-5 flex-shrink-0"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </CardContent>

        {type !== "question" &&
          type !== "email-capture" &&
          type !== "paywall" &&
          type !== "loading" && (
            <CardFooter className="flex justify-center pb-6">
              <Button
                onClick={onContinue}
                className="px-8 py-6 rounded-full text-base font-medium shadow-md bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-none"
                variant="default"
              >
                Continue
              </Button>
            </CardFooter>
          )}
      </Card>
    </motion.div>
  );
};

export default QuizCard;
