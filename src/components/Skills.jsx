import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

function Skills() {
  const skillGroups = [
    { title: "Frontend Matrix", items: skills.frontend },
    { title: "Backend Engine", items: skills.backend },
    { title: "Database Core", items: skills.database },
    { title: "Developer Tools", items: skills.tools },
    { title: "Languages", items: skills.languages },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center gradient-text mb-12 section-title"
      >
        Skill Matrix
      </motion.h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass neon-border rounded-[24px] p-6 robot-card-hover"
          >
            <h3 className="text-2xl font-semibold mb-5 text-white">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.items.map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-300/20 text-sm text-cyan-200 hover:bg-cyan-400/20 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.2 }}
        viewport={{ once: true }}
        className="glass neon-border rounded-[28px] p-8 mt-12 text-center"
      >
        <h3 className="text-2xl font-semibold mb-3 gradient-text">
          Continuous Upgrade Mode
        </h3>
        <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
          I continuously improve my development skills by working on real-world
          full stack projects, modern interfaces, secure authentication systems,
          dashboards, APIs, and futuristic digital experiences.
        </p>
      </motion.div>
    </section>
  );
}

export default Skills;