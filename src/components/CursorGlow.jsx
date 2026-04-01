import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[60] hidden md:block"
        animate={{
          x: position.x - 120,
          y: position.y - 120,
        }}
        transition={{
          type: "spring",
          stiffness: 140,
          damping: 18,
          mass: 0.2,
        }}
      >
        <div className="w-60 h-60 rounded-full bg-cyan-400/10 blur-3xl" />
      </motion.div>

      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[61] hidden md:block"
        animate={{
          x: position.x - 30,
          y: position.y - 30,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          mass: 0.15,
        }}
      >
        <div className="w-14 h-14 rounded-full border border-cyan-300/30 bg-cyan-300/5 blur-md" />
      </motion.div>
    </>
  );
}

export default CursorGlow;