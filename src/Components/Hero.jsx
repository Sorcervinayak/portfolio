import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const changeItems = [
    "Full Stack Developer",
    "Software Engineer",
    "MERN Stack Developer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % changeItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-to-br from-slate-950 to-slate-800 overflow-hidden"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <h1 className="text-6xl text-white font-bold mb-4">
            Hi, I'm <span className="text-cyan-400">Vinayak Shrivas</span>
          </h1>

          <motion.h2
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl mt-2 font-medium text-slate-400"
          >
            {changeItems[currentIndex]}
          </motion.h2>

          <p className="max-w-xl text-lg text-slate-500 leading-relaxed mt-6">
            Information Technology undergraduate passionate about creating
            scalable, user-focused web applications using modern web
            technologies.
          </p>

          <div className="flex space-x-4 mt-6">
            <a
              href="#projects"
              className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-4 py-2 border border-cyan-500 text-cyan-500 rounded hover:bg-cyan-500 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative w-80 h-80 md:w-[520px] md:h-[520px]">
            {/* Profile Image */}
            <img
              src="/portfolioimage.jpeg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full overflow-hidden relative animate-pulse-slow z-10"
               style={{ objectPosition: "50% 18%" }}
            />

            {/* Inner Glow Ring */}
            <motion.div
              className="absolute inset-2 rounded-full border-2 border-slate-400 opacity-60 blur-sm"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
            />

            {/* Main Segmented Ring */}
            <motion.div
              className="absolute inset-[-10px] rounded-full border-[3px] border-dashed border-slate-400"
              style={{
                boxShadow: "0 0 25px rgba(34,197,94,0.6)",
              }}
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            />

            {/* Outer Faint Ring */}
            <motion.div
              className="absolute inset-[-24px] rounded-full border border-slate-400 opacity-30"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 22,
                ease: "linear",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
