import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "Multi-Language Code Editor",
    description:
      "Feature-rich online code editor with real-time syntax highlighting and multi-language execution.",
    tech: ["React", "Monaco", "Piston API"],
    image: "Multilanguage-Code-editor.png",
    link: "https://github.com/Sorcervinayak/Multi-Language-CodeEditor",
  },
  {
    title: "Smart AI Bot",
    description:
      "AI-powered chatbot supporting image analysis, visual generation, and intelligent conversations.",
    tech: ["React", "Gemeni API"],
    image: "SmartAiBot.png",
    link: "https://github.com/Sorcervinayak/Smart-AI-Bot",
  },
  {
    title: "DishFlix",
    description:
      "Reel-style food video sharing platform with real-time playback and authentication.",
    tech: ["React", "Node", "Express", "MongoDB"],
    image: "DishFlix.png",
    link: "https://github.com/Sorcervinayak/DishFlix",
  },
  {
    title: "Twube",
    description:
      "Backend platform combining YouTube management with Twitter-like features.",
    tech: ["Node", "Express", "MongoDB"],
    image: "Twube.png",
    link: "https://github.com/Sorcervinayak/Twube-YouTube-Tweeter",
  },
  {
    title: "Math Wizard",
    description:
      "AI-powered step-by-step math solver that explains solutions clearly and interactively.",
    tech: ["HTML", "CSS", "JavaScript", "AI API"],
    image: "MathWizard.png",
    link: "https://github.com/Sorcervinayak/Math-Wizard",
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.querySelector(".project-card").offsetWidth + 24; // width + gap
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.querySelector(".project-card").offsetWidth + 24;
    const newIndex = Math.round(container.scrollLeft / cardWidth);
    setCurrentIndex(Math.max(0, Math.min(newIndex, projects.length - 1)));
  };

  const nextSlide = () => {
    if (currentIndex < projects.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  return (
    <section
      id="projects"
      className="relative py-28 bg-gradient-to-br from-slate-950 to-slate-800 overflow-hidden"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent">
            Featured
          </span>
          <span className="text-slate-400 ml-4">Projects</span>
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Interactive showcase of my work - scroll horizontally to explore
        </p>
      </motion.div>

      {/* Navigation Arrows */}
      <div className="max-w-7xl mx-auto px-6 relative">
        <button
          onClick={prevSlide}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-slate-700 text-white hover:bg-slate-700/80 transition-all ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
          disabled={currentIndex === 0}
        >
          <FaArrowLeft className="text-xl" />
        </button>

        <button
          onClick={nextSlide}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-slate-700 text-white hover:bg-slate-700/80 transition-all ${
            currentIndex === projects.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100"
          }`}
          disabled={currentIndex === projects.length - 1}
        >
          <FaArrowRight className="text-xl" />
        </button>

        {/* Scroll Indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-cyan-500 w-8"
                  : "bg-slate-700 hover:bg-slate-600"
              }`}
            />
          ))}
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
          onScroll={handleScroll}
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
          }}
        >
          

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              whileHover={{ scale: 1.02 }}
              className="project-card flex-shrink-0 w-[90vw] md:w-[500px] snap-center bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl shadow-black/20"
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 overflow-hidden group">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 rounded-lg bg-slate-800/50 text-slate-300 text-sm font-medium border border-slate-700/50"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-medium hover:from-cyan-600 hover:to-cyan-700 transition-all group"
                  >
                    <FaGithub className="text-lg group-hover:rotate-12 transition-transform" />
                    View Code
                  </a>

                  <span className="text-slate-400 text-sm">
                    Project {index + 1} of {projects.length}
                  </span>
                </div>
              </div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-transparent via-slate-700/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}

          {/* Empty space for better scrolling at the end */}
          <div className="flex-shrink-0 w-6 md:w-12" />
        </div>

        {/* Touch Instructions */}
        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
            <span className="hidden md:inline">
              Click and drag or use arrows to scroll
            </span>
            <span className="md:hidden">Swipe left/right to navigate</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
