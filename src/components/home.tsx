import React, { useState } from "react";
import { motion } from "framer-motion";
import QuizCard from "./QuizCard";
import ProgressIndicator from "./ProgressIndicator";
import QuizNavigation from "./QuizNavigation";

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | null>>({
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    11: null,
    12: null,
    13: null,
    14: null,
    15: null,
    16: null,
    17: null,
    18: null,
    19: null,
    20: null,
    21: null,
    22: null,
    23: null,
  });

  const totalSteps = 24; // 0-23

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null,
      12: null,
      13: null,
      14: null,
      15: null,
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
      21: null,
      22: null,
      23: null,
    });
  };

  const handleSelectAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentStep]: answer });
  };

  // Quiz content for each step
  const quizContent = [
    // Screen 0 - Age profiling
    {
      type: "question",
      title: "How to dress stylish according to your age",
      subtitle: "Master the Art of Dressing for Your Body & Budget!",
      backgroundImage:
        "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80",
      options: [
        { id: "18-25", label: "18–25" },
        { id: "26-36", label: "26–36" },
        { id: "37-49", label: "37–49" },
        { id: "50+", label: "50+" },
      ],
    },
    // Screen 1 - Value proposition
    {
      type: "break",
      title: "",
      content: (
        <div className="text-center">
          <h3 className="text-xl font-medium mb-4 text-pink-900">
            DRESSX is a perfect place if you want to:
          </h3>
          <ul className="text-left space-y-3 mb-6 mx-auto max-w-xs text-gray-700">
            <li className="flex items-center">
              <span className="text-pink-500 mr-2">•</span> Be stylish
            </li>
            <li className="flex items-center">
              <span className="text-pink-500 mr-2">•</span> Learn how to create
              beautiful outfits for yourself
            </li>
            <li className="flex items-center">
              <span className="text-pink-500 mr-2">•</span> Understand what
              suits you best
            </li>
            <li className="flex items-center">
              <span className="text-pink-500 mr-2">•</span> Find the right
              clothes in stores
            </li>
          </ul>
          <div className="flex flex-wrap justify-center gap-6 mt-8 bg-pink-50/90 py-6 px-4 rounded-xl shadow-md border border-pink-100">
            <div className="flex items-center">
              <svg
                width="40"
                height="24"
                viewBox="0 0 40 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-80"
              >
                <path d="M0 0.5H40V23.5H0V0.5Z" fill="#FDF2F8" />
                <path
                  d="M3.5 12C3.5 7.5 7 4 11.5 4C16 4 19.5 7.5 19.5 12C19.5 16.5 16 20 11.5 20C7 20 3.5 16.5 3.5 12ZM11.5 18.5C15.1 18.5 18 15.6 18 12C18 8.4 15.1 5.5 11.5 5.5C7.9 5.5 5 8.4 5 12C5 15.6 7.9 18.5 11.5 18.5Z"
                  fill="#D4A1C8"
                />
                <path d="M20.5 4.5H22V19.5H20.5V4.5Z" fill="#D4A1C8" />
                <path
                  d="M24 4.5H32.5C35.5 4.5 37.5 6.5 37.5 9.5C37.5 12.5 35.5 14.5 32.5 14.5H25.5V19.5H24V4.5ZM25.5 13H32.5C34.7 13 36 11.7 36 9.5C36 7.3 34.7 6 32.5 6H25.5V13Z"
                  fill="#D4A1C8"
                />
              </svg>
              <span className="text-pink-800 text-xs ml-1 font-medium">
                Vogue
              </span>
            </div>
            <div className="flex items-center">
              <svg
                width="40"
                height="24"
                viewBox="0 0 40 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-80"
              >
                <path d="M5 5H35V19H5V5Z" fill="#FDF2F8" />
                <path d="M7 7H33V9H7V7Z" fill="#D4A1C8" />
                <path d="M7 11H33V12H7V11Z" fill="#D4A1C8" />
                <path d="M7 14H33V15H7V14Z" fill="#D4A1C8" />
                <path d="M7 17H20V18H7V17Z" fill="#D4A1C8" />
              </svg>
              <span className="text-pink-800 text-xs ml-1 font-medium">
                NY Times
              </span>
            </div>
            <div className="flex items-center">
              <svg
                width="40"
                height="24"
                viewBox="0 0 40 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-80"
              >
                <path d="M5 5H35V19H5V5Z" fill="#FDF2F8" />
                <path d="M10 8.5H14.5V15.5H10V8.5Z" fill="#D4A1C8" />
                <path d="M16 8.5H20.5V15.5H16V8.5Z" fill="#D4A1C8" />
                <path d="M22 8.5H26.5V15.5H22V8.5Z" fill="#D4A1C8" />
                <path d="M28 8.5H30V15.5H28V8.5Z" fill="#D4A1C8" />
              </svg>
              <span className="text-pink-800 text-xs ml-1 font-medium">
                CNN
              </span>
            </div>
            <div className="flex items-center">
              <svg
                width="40"
                height="24"
                viewBox="0 0 40 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-80"
              >
                <path d="M5 5H35V19H5V5Z" fill="#FDF2F8" />
                <path d="M8 8H15V9.5H8V8Z" fill="#D4A1C8" />
                <path d="M8 11H32V12.5H8V11Z" fill="#D4A1C8" />
                <path d="M8 14H32V15.5H8V14Z" fill="#D4A1C8" />
                <path d="M25 8H32V9.5H25V8Z" fill="#D4A1C8" />
              </svg>
              <span className="text-pink-800 text-xs ml-1 font-medium">
                Le Figaro
              </span>
            </div>
          </div>
        </div>
      ),
      backgroundImage:
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80",
    },
    // Screen 2 - Department
    {
      type: "question",
      title: "What department do you usually shop in?",
      backgroundImage:
        "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80",
      options: [
        { id: "regular", label: "Regular" },
        { id: "plus-size", label: "Plus size" },
        { id: "petite", label: "Petite" },
        { id: "tall", label: "Tall" },
        { id: "athletic", label: "Athletic" },
        { id: "no-preference", label: "Don't have a preference" },
      ],
    },
    // Screen 3 - Body shape
    {
      type: "question",
      title: "What's your body shaped like?",
      backgroundImage:
        "https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=800&q=80",
      options: [
        { id: "rectangle", label: "Rectangle" },
        { id: "hourglass", label: "Hourglass" },
        { id: "triangle", label: "Triangle" },
        { id: "inverted-triangle", label: "Inverted triangle" },
      ],
    },
    // Screen 4 - Stores
    {
      type: "question",
      title: "What stores do you prefer to shop in?",
      backgroundImage:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
      options: [
        { id: "everyday", label: "Everyday fashion (Ross, TJMaxx)" },
        { id: "high-street", label: "High-Street Brands (Zara, H&M, Gap)" },
        { id: "modern-luxe", label: "Modern Luxe (Aritzia, COS, Lululemon)" },
        {
          id: "premium",
          label: "Premium brands (Gucci, Louis Vuitton, Balenciaga)",
        },
        { id: "mix", label: "A mix of all" },
      ],
    },
    // Screen 5 - Social proof
    {
      type: "break",
      title: "900,000+ women have improved their style thanks to DRESSX",
      content: (
        <div className="flex flex-col items-center space-y-4 mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <img
                src="https://storage.googleapis.com/dressxme_content/IMG_6413.JPG"
                alt="Before"
                className="rounded-lg shadow-md"
              />
              <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-xs font-medium text-pink-800">
                Before
              </div>
            </div>
            <div className="relative">
              <img
                src="https://storage.googleapis.com/dressxme_content/3a5b2499-66d6-4b13-b495-7f9e05fc94a4.jpeg"
                alt="After"
                className="rounded-lg shadow-md"
              />
              <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-xs font-medium text-pink-800">
                After
              </div>
            </div>
          </div>
          <p className="text-sm text-center mt-2 text-gray-600 italic">
            Real transformations from our clients
          </p>
        </div>
      ),
      backgroundImage:
        "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=800&q=80",
    },
    // Screen 6 - Color and style type
    {
      type: "break",
      title: "Let's figure out your Color and Style type",
      content: (
        <div className="text-center">
          <p className="text-sm mb-6 text-gray-700 leading-relaxed">
            Knowing your color type is key to dressing in colors that truly
            flatter you. Understanding your personal color palette takes the
            guesswork out of shopping and helps you build a wardrobe that always
            makes you look your best.
          </p>
        </div>
      ),
      backgroundImage:
        "https://images.unsplash.com/photo-1613461920867-9ea115fee900?w=800&q=80",
    },
    // Screen 7 - Skin tone
    {
      type: "question",
      title: "What's your skin tone?",
      backgroundImage:
        "https://images.unsplash.com/photo-1542833807-ad5af0977050?w=800&q=80",
      options: [
        { id: "pale", label: "Pale" },
        { id: "fair", label: "Fair" },
        { id: "tan", label: "Tan" },
        { id: "brown", label: "Brown" },
        { id: "dark", label: "Dark" },
      ],
    },
    // Screen 8 - Hair color
    {
      type: "question",
      title: "What's your hair color?",
      backgroundImage:
        "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=800&q=80",
      options: [
        { id: "blonde", label: "Blonde", color: "#E6BE8A" },
        { id: "brown", label: "Brown", color: "#8C5A2E" },
        { id: "black", label: "Black", color: "#1C1C1C" },
        { id: "red", label: "Red", color: "#A52A2A" },
        { id: "gray", label: "Gray", color: "#A9A9A9" },
        { id: "other", label: "Other", color: "#DDD" },
      ],
      optionType: "color",
    },
    // Screen 9 - Eye color
    {
      type: "question",
      title: "What's your eye color?",
      backgroundImage:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80",
      options: [
        { id: "blue", label: "Blue", color: "#6CA0DC" },
        { id: "green", label: "Green", color: "#4E9E81" },
        { id: "brown", label: "Brown", color: "#634E34" },
        { id: "hazel", label: "Hazel", color: "#9E6B53" },
        { id: "gray", label: "Gray", color: "#A0A0A0" },
        { id: "other", label: "Other", color: "#DDD" },
      ],
      optionType: "color",
    },
    // Screen 10 - Wardrobe colors
    {
      type: "question",
      title: "What's the color you see most in your current wardrobe?",
      backgroundImage:
        "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=800&q=80",
      options: [
        { id: "neutral", label: "Neutral tones" },
        { id: "dark", label: "Darker colors" },
        { id: "bright", label: "Bright colors" },
        { id: "mixed", label: "A little bit of everything" },
      ],
    },
    // Screen 11 - Clothing style preference
    {
      type: "question",
      title: "Which clothing style do you prefer the most?",
      backgroundImage:
        "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&q=80",
      options: [
        { id: "classy", label: "Classy" },
        { id: "casual", label: "Casual" },
        { id: "ladylike", label: "Ladylike" },
        { id: "boho", label: "Boho" },
        { id: "creative", label: "Creative" },
        { id: "old-money", label: "Old money" },
      ],
    },
    // Screen 12 - Color type result
    {
      type: "break",
      title: "You are a summer",
      content: (
        <div className="text-center">
          <p className="text-sm mb-6 text-gray-700 leading-relaxed">
            Summers have a cool, delicate, and sophisticated palette. Your best
            colors are soft, muted tones with blue undertones. Think lavender,
            powder blue, and rose pink. Your natural coloring is enhanced by
            these gentle hues, creating a harmonious and elegant look.
          </p>
          <div className="flex justify-center gap-2 my-4">
            {["#E6E6FA", "#B0C4DE", "#F08080", "#20B2AA", "#D8BFD8"].map(
              (color) => (
                <div
                  key={color}
                  className="w-10 h-10 rounded-full border border-gray-200 shadow-inner"
                  style={{ backgroundColor: color }}
                />
              ),
            )}
          </div>
          <p className="text-sm mt-4 text-gray-600 italic">
            Your ideal color palette
          </p>
        </div>
      ),
      backgroundImage:
        "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?w=800&q=80",
    },
    // Screen 13 - Style goals
    {
      type: "question",
      title: "What are your main goals when it comes to choosing your style?",
      backgroundImage:
        "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=800&q=80",
      options: [
        { id: "flatter-body", label: "Dress to flatter my body shape" },
        {
          id: "comfy-effortless",
          label: "Create comfy and effortless outfits",
        },
        { id: "express-personality", label: "Express personality" },
        { id: "look-fresh", label: "Look fresh, youthful, put-together" },
      ],
    },
    // Screen 14 - Dressing stress
    {
      type: "question",
      title: "What do you find stressful about getting dressed?",
      backgroundImage:
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800&q=80",
      options: [
        { id: "fit-struggle", label: "I struggle to find pieces that fit" },
        { id: "time-waste", label: "I waste too much time searching" },
        { id: "overwhelmed", label: "I get overwhelmed by choices" },
        { id: "budget", label: "I worry about staying on budget" },
      ],
    },
    // Screen 15 - Outfit feelings
    {
      type: "question",
      title: "How do you want to feel in your outfits?",
      backgroundImage:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      options: [
        { id: "confident", label: "Confident and empowered" },
        { id: "sophisticated", label: "Sophisticated and elegant" },
        { id: "comfortable", label: "Comfortable and at ease" },
        { id: "stylish", label: "Stylish and on-trend" },
      ],
    },
    // Screen 16 - Outfit needs
    {
      type: "question",
      title: "What do you need outfits for?",
      subtitle: "Select all that fit your lifestyle",
      backgroundImage:
        "https://images.unsplash.com/photo-1572251328767-e59f06f13ba1?w=800&q=80",
      options: [
        { id: "office", label: "Office" },
        { id: "errands", label: "Daily errands" },
        { id: "wfh", label: "Working from home" },
        { id: "date-night", label: "Romantic nights out" },
      ],
    },
    // Screen 17 - Body areas
    {
      type: "question",
      title: "Any areas you'd prefer to keep subtle?",
      subtitle: "Select all that apply",
      backgroundImage:
        "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=800&q=80",
      options: [
        { id: "legs", label: "Legs" },
        { id: "hips", label: "Hips & booty" },
        { id: "midsection", label: "Midsection" },
        { id: "bust", label: "Bust/cleavage" },
        { id: "arms", label: "Arms" },
      ],
    },
    // Screen 18 - Current wardrobe
    {
      type: "question",
      title: "How do you feel about your current wardrobe?",
      backgroundImage:
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
      options: [
        { id: "nothing", label: "I have nothing to wear" },
        { id: "needs-improvement", label: "It needs improvement" },
        { id: "okay", label: "It's rather okay" },
        { id: "perfect", label: "It's perfection" },
      ],
    },
    // Screen 19 - Value proposition
    {
      type: "break",
      title: "Learn how to highlight your strengths and dress with purpose",
      content: (
        <div className="text-center">
          <p className="text-sm mb-6 text-gray-700 leading-relaxed">
            Discover how to create a wardrobe that works for your unique body
            shape, coloring, and lifestyle. Our personalized guidance will help
            you make confident style choices every day.
          </p>
          <div className="flex justify-center gap-4 my-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pink-500"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <span className="text-xs text-gray-600">Self-confidence</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pink-500"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v4l3 3"></path>
                </svg>
              </div>
              <span className="text-xs text-gray-600">Time-saving</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pink-500"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <span className="text-xs text-gray-600">Versatility</span>
            </div>
          </div>
        </div>
      ),
      backgroundImage:
        "https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=800&q=80",
    },
    // Screen 20 - Personalization animation
    {
      type: "loading",
      title: "Creating your personalized style profile",
      content: null,
      backgroundImage:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
    },
    // Screen 21 - Email capture
    {
      type: "email-capture",
      title: "You'll receive your personalized color profile by email",
      backgroundImage:
        "https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=800&q=80",
    },
    // Screen 22 - Gain
    {
      type: "break",
      title: "Unlock your full profile and styling plan",
      content: (
        <div className="text-center">
          <p className="text-sm mb-6 text-gray-700 leading-relaxed">
            You're just one step away from discovering your complete style
            profile and personalized wardrobe recommendations tailored to your
            unique preferences.
          </p>
          <div className="bg-pink-50 p-4 rounded-lg mb-6">
            <h4 className="font-medium text-pink-800 mb-2">
              Your full profile includes:
            </h4>
            <ul className="text-left space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">✓</span> Complete color
                palette guide
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">✓</span> Body shape styling
                recommendations
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">✓</span> Personalized
                capsule wardrobe plan
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">✓</span> Shopping guide
                with specific pieces
              </li>
            </ul>
          </div>
        </div>
      ),
      backgroundImage:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    },
    // Screen 23 - Paywall
    {
      type: "paywall",
      title: "Choose your style transformation plan",
      backgroundImage:
        "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&q=80",
    },
  ];

  const currentContent = quizContent[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-serif font-semibold text-pink-800">
            DRESSX
          </h1>
          <p className="text-sm text-gray-600 italic">
            Your Personal Style Guide
          </p>
        </header>

        <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full mt-4"
        >
          <QuizCard
            type={currentContent.type}
            title={currentContent.title}
            subtitle={
              currentContent.type === "question" && currentStep === 0
                ? currentContent.subtitle
                : undefined
            }
            content={currentContent.content}
            backgroundImage={currentContent.backgroundImage}
            options={currentContent.options || []}
            optionType={currentContent.optionType || "text"}
            selectedAnswer={answers[currentStep]}
            onSelectAnswer={handleSelectAnswer}
            onContinue={handleNext}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
