import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot } from "react-icons/fa";

function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#030712]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.08),transparent_30%)]"></div>

          <div className="text-center relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.95, 1.08, 1],
                opacity: 1,
                rotate: [0, 6, -6, 0],
              }}
              transition={{ duration: 1.4 }}
              className="w-24 h-24 mx-auto rounded-full glass neon-border flex items-center justify-center text-cyan-300 text-4xl"
            >
              <FaRobot />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-6 text-3xl md:text-4xl font-bold gradient-text"
            >
              Initializing Portfolio
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-slate-400 mt-3 tracking-[0.25em] uppercase text-xs md:text-sm"
            >
              AI System Booting...
            </motion.p>

            <div className="w-64 h-2 mx-auto mt-8 rounded-full bg-white/5 overflow-hidden border border-cyan-300/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.7, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;