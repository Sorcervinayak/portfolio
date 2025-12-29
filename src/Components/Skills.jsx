import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaJava
} from "react-icons/fa";
import {  VscVscode } from "react-icons/vsc";
import { SiMongodb, SiExpress, SiPostman, SiTailwindcss, SiMysql, SiGithub } from "react-icons/si";

const skillsData = {
  "Programming Languages": [
    {
      name: "Java",
      icon: <FaJava />,
      color: "text-red-400",
      bgColor: "from-red-900/20 via-red-800/10 to-red-700/5",
      borderColor: "border-red-500/30",
      level: 85,
      description: "Object-oriented programming, DSA, Spring Framework",
      gradient: "bg-gradient-to-r from-red-500 to-orange-500"
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare />,
      color: "text-yellow-400",
      bgColor: "from-yellow-900/20 via-yellow-800/10 to-amber-700/5",
      borderColor: "border-yellow-500/30",
      level: 90,
      description: "ES6+, Async/Await, DOM Manipulation, Modern JS",
      gradient: "bg-gradient-to-r from-yellow-500 to-amber-500"
    },
  ],

  "Frontend Development": [
    {
      name: "React.js",
      icon: <FaReact />,
      color: "text-cyan-400",
      bgColor: "from-cyan-900/20 via-blue-800/10 to-cyan-700/5",
      borderColor: "border-cyan-500/30",
      level: 88,
      description: "Hooks, Context API, React Router, Component Lifecycle",
      gradient: "bg-gradient-to-r from-cyan-400 to-blue-500"
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      color: "text-orange-500",
      bgColor: "from-orange-900/20 via-orange-800/10 to-red-700/5",
      borderColor: "border-orange-500/30",
      level: 95,
      description: "Semantic HTML, Accessibility, Web Standards",
      gradient: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "text-blue-500",
      bgColor: "from-blue-900/20 via-blue-800/10 to-indigo-700/5",
      borderColor: "border-blue-500/30",
      level: 92,
      description: "Flexbox, Grid, Animations, Responsive Design",
      gradient: "bg-gradient-to-r from-blue-500 to-indigo-500"
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "text-teal-400",
      bgColor: "from-teal-900/20 via-cyan-800/10 to-emerald-700/5",
      borderColor: "border-teal-500/30",
      level: 90,
      description: "Utility-first CSS, Responsive Utilities, Customization",
      gradient: "bg-gradient-to-r from-teal-400 to-cyan-500"
    },
  ],

  "Backend Development": [
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "text-green-500",
      bgColor: "from-green-900/20 via-emerald-800/10 to-green-700/5",
      borderColor: "border-green-500/30",
      level: 85,
      description: "Event Loop, NPM Ecosystem, File System Operations",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      color: "text-gray-300",
      bgColor: "from-gray-900/20 via-gray-800/10 to-gray-700/5",
      borderColor: "border-gray-500/30",
      level: 88,
      description: "Middleware, Routing, REST APIs, Error Handling",
      gradient: "bg-gradient-to-r from-gray-400 to-gray-600"
    },
  ],

  "Database & Storage": [
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "text-green-600",
      bgColor: "from-emerald-900/20 via-green-800/10 to-lime-700/5",
      borderColor: "border-emerald-500/30",
      level: 85,
      description: "NoSQL, Aggregation, Indexing, Mongoose ODM",
      gradient: "bg-gradient-to-r from-green-600 to-emerald-600"
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "text-blue-400",
      bgColor: "from-blue-900/20 via-indigo-800/10 to-blue-700/5",
      borderColor: "border-blue-400/30",
      level: 82,
      description: "Relational DB, SQL Queries, Joins, Optimization",
      gradient: "bg-gradient-to-r from-blue-400 to-indigo-500"
    },
  ],

  "Development Tools": [
    {
      name: "VS Code",
      icon: <VscVscode />,
      color: "text-blue-500",
      bgColor: "from-blue-900/20 via-cyan-800/10 to-blue-700/5",
      borderColor: "border-blue-500/30",
      level: 90,
      description: "Primary development environment & extensions",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      name: " GitHub",
      icon: <SiGithub />,
      color: "text-gray-300",
      bgColor: "from-gray-900/20 via-gray-800/10 to-gray-700/5",
      borderColor: "border-gray-400/30",
      level: 90,
      description: "Version Control, Collaboration, CI/CD, Workflows",
      gradient: "bg-gradient-to-r from-gray-400 to-gray-700"
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      color: "text-orange-400",
      bgColor: "from-orange-900/20 via-orange-800/10 to-amber-700/5",
      borderColor: "border-orange-400/30",
      level: 88,
      description: "API Testing, Documentation, Automation, Mock Servers",
      gradient: "bg-gradient-to-r from-orange-400 to-amber-500"
    },
  ],
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = ["All", ...Object.keys(skillsData)];

  const filteredSkills = activeCategory === "All" 
    ? Object.values(skillsData).flat()
    : skillsData[activeCategory] || [];

  const totalSkills = Object.values(skillsData).flat().length;
  const avgProficiency = Math.round(
    Object.values(skillsData).flat().reduce((sum, skill) => sum + skill.level, 0) / totalSkills
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: {
      y: -12,
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        delay: 0.5,
        duration: 1.5,
        ease: "easeOut",
      },
    }),
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-28 bg-gradient-to-br from-slate-950 to-slate-800 overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={{
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with enhanced animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block relative mb-8">
           <motion.h2
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 100, damping: 15 }}
  viewport={{ once: true }}
  className="text-5xl md:text-7xl font-bold mb-4"
>
  <span className="bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent">
    Technical
  </span>
  <span className="text-slate-400 ml-4">Skills</span>
</motion.h2>
            </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12"
          >
            My expertise spans across modern web technologies, from frontend interfaces to backend systems
          </motion.p>

         

          {/* Category Filter - Enhanced */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-3 rounded-full font-medium transition-all overflow-hidden group ${
                    activeCategory === category
                      ? "text-white shadow-xl"
                      : "text-gray-400 hover:text-white bg-slate-800/50"
                  }`}
                >
                  {activeCategory === category && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"
                      transition={{ type: "spring", bounce: 0.2 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Grid - Enhanced */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${activeCategory}-${skill.name}`}
                custom={index}
                variants={skillCardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                viewport={{ once: true, amount: 0.2 }}
                className="relative group"
              >
                <div className={`relative bg-gradient-to-br ${skill.bgColor} backdrop-blur-xl rounded-2xl p-6 border ${skill.borderColor} overflow-hidden h-full`}>
                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute -inset-1 ${skill.gradient} blur-xl opacity-20`} />
                  </div>

                  {/* Icon with enhanced animation */}
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className={`relative z-10 ${skill.color} mb-6 flex justify-center`}
                  >
                    <div className="text-5xl">{skill.icon}</div>
                  </motion.div>

                  {/* Skill name */}
                  <h3 className="text-xl font-bold text-white mb-3 text-center relative z-10">
                    {skill.name}
                  </h3>

                  {/* Progress bar with enhanced design */}
                  <div className="relative z-10 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Proficiency</span>
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold text-white bg-slate-800/50 px-3 py-1 rounded-full"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-2.5 bg-slate-800/80 rounded-full overflow-hidden">
                      <motion.div
                        custom={skill.level}
                        variants={progressVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${skill.gradient}`}
                      />
                    </div>
                  </div>

                  {/* Description - always visible but enhanced on hover */}
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0.8, height: "auto" }}
                      animate={{ opacity: hoveredSkill?.name === skill.name ? 1 : 0.8 }}
                      className="relative z-10"
                    >
                      <p className="text-sm text-gray-300 text-center leading-relaxed">
                        {skill.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;