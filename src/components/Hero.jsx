import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaRobot } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden tech-grid scan-lines"
    >
      {/* Background glow orbs */}
      <div className="orb-cyan top-16 left-[-60px]"></div>
      <div className="orb-purple bottom-10 right-[-40px]"></div>
      <div className="orb-green top-[50%] left-[45%]"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-24">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border text-sm text-cyan-300 mb-6">
            <FaRobot />
            AI Inspired Developer Portfolio
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="gradient-text">Pratush Rawat</span>
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-xl md:text-2xl text-cyan-300 font-semibold tracking-wide"
          >
            MERN Stack Developer | Building Futuristic Web Experiences
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-6 text-slate-300 text-lg leading-relaxed max-w-2xl"
          >
            I create modern, scalable, and intelligent web applications with
            premium UI, full stack logic, and futuristic design experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full neon-button text-white font-semibold flex items-center gap-2 hover:scale-105 transition"
            >
              Explore Projects
              <HiOutlineArrowNarrowRight size={20} />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full glass neon-border text-cyan-300 font-semibold hover:scale-105 transition"
            >
              Contact Me
            </a>

            {/* TODO: Resume button add karna ho to yaha add kar sakte ho */}
            {/* 
            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-full glass neon-border text-cyan-300 font-semibold hover:scale-105 transition"
            >
              Download Resume
            </a> 
            */}
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="https://github.com/pratyush0938"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full glass neon-border flex items-center justify-center text-cyan-300 hover:scale-110 transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/pratyush-rawat-7a7960255"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full glass neon-border flex items-center justify-center text-cyan-300 hover:scale-110 transition"
            >
              <FaLinkedin size={20} />
            </a>

            {/* TODO: in dono links ko real GitHub aur LinkedIn se replace karna */}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 grid grid-cols-3 gap-4 max-w-xl"
          >
            <div className="glass rounded-2xl p-4 text-center">
              <h4 className="text-cyan-300 text-2xl font-bold">4+</h4>
              <p className="text-xs text-slate-400 mt-1">Projects Built</p>
            </div>

            <div className="glass rounded-2xl p-4 text-center">
              <h4 className="text-cyan-300 text-2xl font-bold">MERN</h4>
              <p className="text-xs text-slate-400 mt-1">Core Stack</p>
            </div>

            <div className="glass rounded-2xl p-4 text-center">
              <h4 className="text-cyan-300 text-2xl font-bold">2026</h4>
              <p className="text-xs text-slate-400 mt-1">Active Journey</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass neon-border rounded-[28px] p-8 robot-card-hover">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-cyan-300 text-sm tracking-[0.25em] uppercase">
                  System Identity
                </p>
                <h3 className="text-2xl font-bold mt-2">PR-01 / Developer Core</h3>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-300/30 flex items-center justify-center text-cyan-300">
                <FaRobot size={24} />
              </div>
            </div>

            <div className="space-y-4 text-slate-300">
              <div className="glass rounded-xl p-4 border border-cyan-400/10">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-1">
                  Specialization
                </p>
                <p className="text-lg font-semibold text-white">
                  MERN Stack Development
                </p>
              </div>

              <div className="glass rounded-xl p-4 border border-cyan-400/10">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-1">
                  Focus Area
                </p>
                <p className="text-lg font-semibold text-white">
                  Full Stack + Premium UI
                </p>
              </div>

              <div className="glass rounded-xl p-4 border border-cyan-400/10">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-1">
                  Mission
                </p>
                <p className="text-lg font-semibold text-white">
                  Build • Learn • Innovate
                </p>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="mt-8 space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2 text-slate-300">
                  <span>Frontend Systems</span>
                  <span>90%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2 text-slate-300">
                  <span>Backend Logic</span>
                  <span>85%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2 text-slate-300">
                  <span>Database Handling</span>
                  <span>80%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[80%] bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* TODO: agar tum apni image ya robot image lagana chaho to is card me upar ya neeche add kar sakte ho */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;