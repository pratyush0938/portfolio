import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

function CountUpNumber({ end, duration = 1800, decimals = 0, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = progress * end;
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return (
    <span ref={ref} className="text-cyan-300 font-bold">
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function Education() {
  const educationData = [
    {
      title: "MCA – Master in Computer Application",
      place: "Currently Pursuing",
      year: "2024 - 2026",
      value: 7.2,
      label: "CGPA",
      decimals: 2,
      suffix: "/10",
      progress: "72%",
      icon: <FaGraduationCap />,
    },
    {
      title: "BSc – Bachelor of Science",
      place: "Graduation",
      year: "2021 - 2024",
      value: 6.5,
      label: "CGPA",
      decimals: 1,
      suffix: "/10",
      progress: "65%",
      icon: <FaGraduationCap />,
    },
    {
      title: "12th (Non-Medical), CBSE",
      place: "Oasis Sainik School, Rajasthan",
      year: "2021 - 2022",
      value: 72,
      label: "Percentage",
      decimals: 0,
      suffix: "%",
      progress: "72%",
      icon: <FaSchool />,
    },
    {
      title: "10th, CBSE",
      place: "Nirmal Ashram Deepmala Public School, Uttarakhand",
      year: "2019 - 2020",
      value: 83,
      label: "Percentage",
      decimals: 0,
      suffix: "%",
      progress: "83%",
      icon: <FaSchool />,
    },
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-16 relative">
      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center gradient-text mb-12 section-title"
      >
        Education Matrix
      </motion.h2>

      <div className="max-w-5xl mx-auto relative">
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400/40 via-violet-500/30 to-cyan-300/20"></div>

        <div className="space-y-10">
          {educationData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                viewport={{ once: true }}
                className={`relative flex ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-8 z-10">
                  <div className="w-6 h-6 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.7)] border-4 border-[#0b0f19]"></div>
                </div>

                <div
                  className={`ml-16 md:ml-0 w-full md:w-[46%] glass neon-border rounded-[26px] p-6 md:p-7 robot-card-hover ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl glass neon-border flex items-center justify-center text-cyan-300 text-xl shrink-0">
                      {item.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-xl md:text-2xl font-semibold text-white">
                          {item.title}
                        </h3>

                        <span className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-300/20 text-cyan-300 text-sm">
                          {item.year}
                        </span>
                      </div>

                      <p className="text-slate-300 mt-3">{item.place}</p>

                      <div className="mt-5 flex items-center justify-between">
                        <p className="text-slate-400 text-sm uppercase tracking-[0.18em]">
                          {item.label}
                        </p>

                        <p className="text-lg">
                          <CountUpNumber
                            end={item.value}
                            decimals={item.decimals}
                            suffix={item.suffix}
                          />
                        </p>
                      </div>

                      <div className="mt-3">
                        <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-cyan-300/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: item.progress }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: index * 0.15 }}
                            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 rounded-full shadow-[0_0_18px_rgba(34,211,238,0.35)]"
                          ></motion.div>
                        </div>
                      </div>

                      <div className="mt-5 pt-4 border-t border-cyan-300/10 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-slate-400">
                        <span>Academic Record</span>
                        <span>Verified Node</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;