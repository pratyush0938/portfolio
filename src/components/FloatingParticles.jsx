import React from "react";
import { motion } from "framer-motion";

const particles = [
  { id: 1, size: 10, left: "8%", top: "18%", delay: 0 },
  { id: 2, size: 14, left: "20%", top: "65%", delay: 0.8 },
  { id: 3, size: 8, left: "38%", top: "22%", delay: 0.3 },
  { id: 4, size: 16, left: "55%", top: "78%", delay: 0.6 },
  { id: 5, size: 12, left: "68%", top: "28%", delay: 1.1 },
  { id: 6, size: 9, left: "82%", top: "58%", delay: 0.5 },
  { id: 7, size: 13, left: "90%", top: "20%", delay: 0.9 },
  { id: 8, size: 11, left: "12%", top: "82%", delay: 0.2 },
];

function FloatingParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-300/20 border border-cyan-300/20 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, 12, -8, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 4 + particle.id * 0.45,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      <motion.div
        className="absolute left-[15%] top-[30%] w-72 h-72 rounded-full bg-cyan-400/10 blur-[100px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[10%] bottom-[10%] w-80 h-80 rounded-full bg-violet-500/10 blur-[110px]"
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default FloatingParticles;