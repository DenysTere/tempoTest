import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import QuizCard from "./QuizCard";
import ProgressIndicator from "./ProgressIndicator";
import QuizNavigation from "./QuizNavigation";

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState<string>("4-week");
  const [timer, setTimer] = useState({ minutes: 10, seconds: 0 });
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

  // Countdown timer effect
  useEffect(() => {
    // Only start the timer when on the paywall step (step 23)
    if (currentStep !== 23) return;

    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        const newSeconds = prevTimer.seconds - 1;
        const newMinutes = prevTimer.minutes;

        if (newSeconds >= 0) {
          return { minutes: newMinutes, seconds: newSeconds };
        } else if (newMinutes > 0) {
          return { minutes: newMinutes - 1, seconds: 59 };
        } else {
          clearInterval(countdown);
          return { minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [currentStep]);

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
      title: "",
      content: (
        <div className="space-y-6 mt-2">
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">
                  {timer.minutes.toString().padStart(2, "0")}
                </span>
                <span className="text-sm text-gray-500 mx-1">:</span>
                <span className="text-3xl font-bold">
                  {timer.seconds.toString().padStart(2, "0")}
                </span>
              </div>
              <div className="flex text-xs text-gray-500">
                <span className="mr-4">minutes</span>
                <span>seconds</span>
              </div>
            </div>
            <a
              href="#subscription-plans"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 font-medium rounded-lg shadow-md transition-all duration-300"
            >
              GET MY PLAN
            </a>
          </div>

          <div className="grid grid-cols-2 gap-1">
            <div className="bg-gray-100 p-4">
              <div className="relative h-48 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
                  alt="Before"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute bottom-4 left-0 right-0 text-center text-white font-medium">
                  NOW
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-20">
                  <h3 className="font-medium text-lg">Your look</h3>
                  <p className="text-gray-600">Age-appropriate</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg">Wardrobe satisfaction</h3>
                  <div className="w-full bg-gray-200 h-2 mt-2">
                    <div className="bg-gradient-to-r from-pink-400 to-purple-400 h-2 w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-4">
              <div className="relative h-48 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80"
                  alt="After"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-0 right-0 text-center text-white font-medium">
                  WITH DRESSX
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-20">
                  <h3 className="font-medium text-lg">Your look</h3>
                  <p className="text-gray-600">Stylish, hot and timeless</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg">Wardrobe satisfaction</h3>
                  <div className="w-full bg-gray-200 h-2 mt-2">
                    <div className="bg-gradient-to-r from-pink-400 to-purple-400 h-2 w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 pb-4">
            <h2 className="text-3xl font-serif font-medium">
              Your Stylist-Curated Outfits
              <br />
              Are Just <span className="italic">One Click Away</span>
            </h2>
          </div>

          <div id="subscription-plans" className="space-y-4">
            <div
              className={`border ${selectedPlan === "4-week" ? "border-pink-400" : "border-gray-300"} p-6 relative cursor-pointer hover:border-pink-300 transition-colors duration-300`}
              onClick={() => setSelectedPlan("4-week")}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-xl">4-WEEK PLAN</h3>
                  <p className="text-gray-500">$44.99</p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 ${selectedPlan === "4-week" ? "border-pink-500" : "border-gray-300"} flex items-center justify-center`}
                >
                  {selectedPlan === "4-week" && (
                    <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  )}
                </div>
              </div>
            </div>

            <div
              className={`border ${selectedPlan === "12-week" ? "border-pink-400" : "border-gray-300"} p-6 relative cursor-pointer hover:border-pink-300 transition-colors duration-300`}
              onClick={() => setSelectedPlan("12-week")}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-xl">12-WEEK PLAN</h3>
                  <p className="text-gray-500">$79.99</p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 ${selectedPlan === "12-week" ? "border-pink-500" : "border-gray-300"} flex items-center justify-center`}
                >
                  {selectedPlan === "12-week" && (
                    <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  )}
                </div>
              </div>
            </div>

            <div
              className={`border ${selectedPlan === "52-week" ? "border-pink-400" : "border-gray-300"} p-6 relative cursor-pointer hover:border-pink-300 transition-colors duration-300`}
              onClick={() => setSelectedPlan("52-week")}
            >
              <div className="absolute -top-3 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs px-3 py-1 rounded">
                BEST OFFER
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-xl">52-WEEK PLAN</h3>
                  <p className="text-gray-500">$199.99</p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 ${selectedPlan === "52-week" ? "border-pink-500" : "border-gray-300"} flex items-center justify-center`}
                >
                  {selectedPlan === "52-week" && (
                    <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 py-4">
            30-DAY MONEY-BACK GUARANTEE
          </div>

          <a
            href="#subscription-plans"
            className="block w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-4 font-medium text-center rounded-lg shadow-md transition-all duration-300"
          >
            GET MY PLAN
          </a>

          <div className="text-xs text-gray-500 space-y-2 pt-2">
            <p>
              By continuing you agree to be billed{" "}
              <strong>USD 44.99 for the first 28 days</strong>. If you don't
              cancel at least 24 hours prior to <strong>1 May 2025</strong>, you
              will automatically be charged{" "}
              <strong>the full price of USD 44.99 on a 4-week basis</strong>{" "}
              until you cancel in your account settings.
            </p>
            <p>
              Learn more about cancellation and refund policy in{" "}
              <span className="text-gray-400">Subscription Terms</span>,{" "}
              <span className="text-gray-400">Money-back Policy</span>,{" "}
              <span className="text-gray-400">Terms & Conditions</span>. The
              charge will appear on your bill as lumi.beautybox.fyi
            </p>
          </div>
        </div>
      ),
      backgroundImage: "",
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

        <div>
          <ProgressIndicator
            currentStep={currentStep}
            totalSteps={totalSteps}
            hideStepText={true}
          />
        </div>

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
