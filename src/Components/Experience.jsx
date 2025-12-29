import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experience = [
    {
      title: "Frontend Developer Intern",
      company: "Edunet Foundation",
      duration: "August 2025 – October 2025",
      description: [
        "Contributed to React-based e-service portals for rural governance initiatives.",
        "Built reusable UI components to maintain clean and scalable code.",
        "Optimized assets and component structure to improve page load performance.",
        "Worked with backend teams to integrate RESTful APIs and ensure smooth data flow.",
      ],
    },
  ];

  return (
    <motion.div
      id="experience"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative py-28 bg-gradient-to-br from-slate-950 to-slate-800 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-center md:text-6xl font-bold bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent">
          Work <span className="text-slate-400 ml-4">Experience</span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-slate-400 max-w-2xl mx-auto text-lg"
        >
          My journey so far
        </motion.p>

        <div className="max-w-3xl mx-auto mt-16">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-10 border-l-2 border-slate-700 mb-12"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[9px] top-2 w-4 h-4 bg-cyan-300 rounded-full"></span>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-100">
                    {exp.title}
                  </h3>
                  <p className="text-slate-400 mt-1">{exp.company}</p>
                </div>

                <span className="text-sm text-slate-800 bg-cyan-400 px-3 py-1 rounded-4xl whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-slate-300 list-disc list-inside">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
