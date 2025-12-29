import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    const click = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", click);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", click);
    };
  }, []);

  return (
    <>
      {/* INNER DOT */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mouse.x - 4,
          y: mouse.y - 4,
          scale: clicked ? 2 : 1,
          boxShadow: clicked
            ? "0 0 12px rgba(34,211,238,0.9)"
            : "0 0 0px rgba(34,211,238,0)",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        style={{
          backgroundColor: "#22d3ee",
        }}
      />

      {/* OUTER RING */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-400/50 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mouse.x - 16,
          y: mouse.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
      />
    </>
  );
};

export default Cursor;
