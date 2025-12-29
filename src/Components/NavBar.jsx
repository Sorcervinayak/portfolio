import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-slate-900/70 backdrop-blur-md border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
          className="text-xl font-semibold text-white tracking-wide"
        >
          Vinayak<span className="text-cyan-400">.</span>
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3">
          {menuItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="
                px-4 py-2 rounded-lg
                bg-slate-800/70 backdrop-blur-md
                border border-slate-700
                text-sm text-slate-300
                cursor-none hover:text-cyan-400
                transition
              "
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 text-xl"
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden
              px-6 pb-4
              flex flex-col gap-3 text-center
              bg-slate-900/80 backdrop-blur-md
              border-t border-slate-800
            "
          >
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.02 }}
                onClick={() => setOpen(false)}
                className="
                  px-4 py-3 rounded-lg
                  bg-slate-800/70
                  border border-slate-700
                  text-sm text-slate-300
                  hover:text-orange-400
                  transition 
                "
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
