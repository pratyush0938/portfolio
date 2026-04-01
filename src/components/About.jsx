import React from "react";
import { motion } from "framer-motion";
import { FaMicrochip, FaRobot } from "react-icons/fa";
import { BsCpuFill } from "react-icons/bs";

function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 relative">
      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center gradient-text mb-12 section-title"
      >
        About Interface
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="glass neon-border rounded-[28px] p-8 robot-card-hover"
        >
          <div className="flex items-center gap-3 mb-5">
            <FaMicrochip className="text-cyan-300 text-xl" />
            <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm">
              Developer Profile
            </p>
          </div>

          <h3 className="text-3xl font-bold mb-5">
            Hi, I'm <span className="gradient-text">Pratush Rawat</span>
          </h3>

          <p className="text-slate-300 leading-relaxed">
            I am a passionate MERN Stack Developer from Uttarakhand, currently
            pursuing MCA and focused on creating futuristic, responsive, and
            scalable web applications with modern UI experiences.
          </p>

          <p className="text-slate-300 leading-relaxed mt-4">
            I have built multiple project systems including
            <span className="text-cyan-300"> Smart E-Voting</span>,
            <span className="text-cyan-300"> Talent Loop</span>,
            <span className="text-cyan-300"> Virtual Assistant AI</span>, and
            <span className="text-cyan-300"> Website Builder</span>.
          </p>

          <p className="text-slate-300 leading-relaxed mt-4">
            My goal is to merge design, logic, and intelligence into full stack
            products that feel advanced, useful, and visually powerful.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="glass rounded-2xl p-5 text-center">
              <h4 className="text-cyan-300 text-2xl font-bold">4+</h4>
              <p className="text-slate-400 text-sm mt-1">Live Projects</p>
            </div>
            <div className="glass rounded-2xl p-5 text-center">
              <h4 className="text-cyan-300 text-2xl font-bold">MCA</h4>
              <p className="text-slate-400 text-sm mt-1">Current Mission</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="glass neon-border rounded-[28px] p-8 robot-card-hover"
        >
          <div className="w-28 h-28 mx-auto rounded-full glass neon-border flex items-center justify-center text-cyan-300 text-4xl">
            <FaRobot />
          </div>

          <h3 className="text-2xl font-bold text-center mt-6">
            System Core Overview
          </h3>

          <div className="mt-8 space-y-4">
            <div className="glass rounded-2xl p-4 flex items-center gap-4">
              <BsCpuFill className="text-cyan-300 text-2xl" />
              <div>
                <p className="text-sm text-slate-400">Primary Stack</p>
                <p className="text-white font-semibold">MERN + REST API</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-4 flex items-center gap-4">
              <FaMicrochip className="text-cyan-300 text-2xl" />
              <div>
                <p className="text-sm text-slate-400">Development Focus</p>
                <p className="text-white font-semibold">
                  Modern Full Stack Solutions
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-4 flex items-center gap-4">
              <FaRobot className="text-cyan-300 text-2xl" />
              <div>
                <p className="text-sm text-slate-400">Interface Style</p>
                <p className="text-white font-semibold">
                  Futuristic • Premium • Interactive
                </p>
              </div>
            </div>
          </div>

          {/* TODO: If you want your image instead of robot icon, replace top icon block */}
        </motion.div>
      </div>
    </section>
  );
}

export default About;