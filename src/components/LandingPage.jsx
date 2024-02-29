import React from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";

const LandingPage = () => {
  const gradientTextStyles = {
    backgroundImage:
      "linear-gradient(rgb(241, 165, 105), rgb(247, 137, 63), rgb(254, 105, 14))",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "6rem",
    fontFamily: "Luckiest Guy",
    WebkitTextStroke: "#282375 0.3rem",
    letterSpacing: "-0.12rem",
  };

  // Create motion values
  const scrollYProgress = useMotionValue(0);

  React.useEffect(() => {
    const updateScrollValue = () => {
      const { scrollY, innerHeight } = window;
      scrollYProgress.set(scrollY / (document.body.scrollHeight - innerHeight));
    };

    updateScrollValue();
    window.addEventListener("scroll", updateScrollValue);

    return () => window.removeEventListener("scroll", updateScrollValue);
  }, [scrollYProgress]);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <>
      <motion.div style={{ scale }}>
        <div>
          <h1 style={gradientTextStyles}>WYSKID</h1>
        </div>
      </motion.div>
      <div>
        <p className="text-black font-mono mb-5">
          Join and play to get a wider knowledge insight
        </p>
        <button className="group relative h-12 w-48 overflow-hidden outline outline-white rounded-2xl bg-[#FF6606] text-lg font-bold text-white font-mono">
          Play Now
          <div className="absolute inset-0 h-full w-full scale-0  rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </div>
    </>
  );
};

export default LandingPage;
