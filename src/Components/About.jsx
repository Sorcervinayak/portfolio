import React from "react";
import { motion } from "framer-motion";
import { FiZap, FiPenTool, FiCode, FiDownload, FiArrowRight } from "react-icons/fi";

const cardData = [
  {
    icon: <FiZap />,
    title: "Innovative",
    description: "I bring creative ideas to every project, exploring modern solutions and unique approaches.",
    color: "from-orange-500/20 to-orange-600/20",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-400",
    glowColor: "hover:shadow-orange-500/30",
  },
  {
    icon: <FiPenTool />,
    title: "Design-Oriented",
    description: "Passionate about building visually appealing, intuitive, and user-friendly interfaces.",
    color: "from-purple-500/20 to-purple-600/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
    glowColor: "hover:shadow-purple-500/30",
  },
  {
    icon: <FiCode />,
    title: "Clean Code",
    description: "I write maintainable, readable, and scalable code following modern best practices.",
    color: "from-cyan-500/20 to-cyan-600/20",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    glowColor: "hover:shadow-cyan-500/30",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
  hover: {
    y: -12,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      delay: 0.2,
    },
  },
  hover: {
    rotate: 360,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const textLinesVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5 + index * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8,
      type: "spring",
      stiffness: 200,
    },
  },
  hover: {
    scale: 1.1,
    boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)",
    transition: {
      type: "spring",
      stiffness: 400,
    },
  },
  tap: { scale: 0.95 },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-br from-slate-950 to-slate-800 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/20 to-slate-950" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          {/* Heading with gradient animation */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring" }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
            >
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                About{" "}
              </span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-slate-400"
              >
                Me
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Subtitle with fade-in */}
          <motion.div variants={itemVariants}>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Learn more about my journey, experience, and what drives my passion for technology.
            </motion.p>
          </motion.div>

          {/* About Content - Animated Text with staggered lines */}
          <motion.div variants={containerVariants} className="space-y-6 max-w-4xl mx-auto text-left md:text-center mb-16">
            {[
              "I'm a result-driven Information Technology student with a strong passion for MERN stack development.",
              "I specialize in building responsive, user-centric web applications and integrating RESTful APIs.",
              "Focused on writing clean, scalable code while exploring modern technologies to deliver impactful solutions.",
            ].map((text, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={textLinesVariants}
                className="relative"
              >
                {/* Animated bullet point */}
               
                <motion.p
                  className="text-lg md:text-xl text-gray-300 leading-relaxed inline"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {text}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* Resume Button with floating animation */}
          <motion.div variants={itemVariants} className="mt-12 mb-20">
            <motion.a
              href="vinayak's resume.pdf"
              download
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true }}
              className="relative group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-600 to-blue-700 text-white font-semibold tracking-wide shadow-xl overflow-hidden"
            >
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              
              <FiDownload className="text-xl group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative">Download Resume</span>
              <FiArrowRight className="text-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              
              {/* Floating particles */}
              <motion.div
                className="absolute -inset-1 bg-orange-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.a>
          </motion.div>

          {/* Skills Cards with enhanced animations */}
          <motion.div
            variants={containerVariants}
            className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                className={`relative bg-gradient-to-br ${card.color} backdrop-blur-md border ${card.borderColor} rounded-2xl p-8 text-left overflow-hidden group`}
              >
                {/* Card background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full -translate-y-16 translate-x-16" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white to-transparent rounded-full translate-y-16 -translate-x-16" />
                </div>

                {/* Animated icon */}
                <motion.div
                  variants={iconVariants}
                  className={`relative z-10 ${card.iconColor} mb-6`}
                  whileHover="hover"
                >
                  <div className="text-4xl">{card.icon}</div>
                  <div className={`absolute -inset-4 bg-gradient-to-br ${card.color.replace('/20', '/10')} rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </motion.div>

                {/* Title with typing effect */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-white mb-4 relative z-10"
                >
                  {card.title}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "40px" }}
                    transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="h-0.5 bg-gradient-to-r from-current to-transparent mt-2"
                  />
                </motion.h3>

                {/* Description with fade-in */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-gray-400 leading-relaxed relative z-10"
                >
                  {card.description}
                </motion.p>

                {/* Hover indicator arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <FiArrowRight className="text-xl" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;