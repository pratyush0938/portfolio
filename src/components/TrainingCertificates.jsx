import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaLaptopCode } from "react-icons/fa";

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
      setCount(progress * end);

      if (progress < 1) requestAnimationFrame(animate);
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

function TrainingCertificates() {
  const training = [
    {
      title: "Frontend Development Training",
      org: "CGC-Jhanjeri",
      time: "06/2025 – 07/2025",
      desc: "Gained hands-on experience in creating responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and React.",
      levelLabel: "Completion",
      levelValue: 100,
      levelSuffix: "%",
      progress: "100%",
      icon: <FaLaptopCode />,
    },
  ];

  const certificates = [
    {
      title: "HTML, CSS, JavaScript Certificate",
      org: "Udemy",
      time: "July, 2024",
      levelLabel: "Verified",
      levelValue: 100,
      levelSuffix: "%",
      progress: "100%",
      icon: <FaCertificate />,
    },
    {
      title: "React JS Certificate",
      org: "YouTube Course",
      time: "July, 2025",
      levelLabel: "Verified",
      levelValue: 100,
      levelSuffix: "%",
      progress: "100%",
      icon: <FaCertificate />,
    },
  ];

  return (
    <section id="training-certificates" className="py-24 px-6 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center gradient-text mb-12 section-title"
      >
        Training & Certifications
      </motion.h2>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass neon-border rounded-[28px] p-7 robot-card-hover"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaLaptopCode className="text-cyan-300" />
            <h3 className="text-2xl font-semibold text-white">
              Training Module
            </h3>
          </div>

          <div className="space-y-5">
            {training.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-5 border border-cyan-300/10"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>
                  <span className="text-cyan-300 text-sm">{item.time}</span>
                </div>

                <p className="text-slate-300 mt-2">{item.org}</p>
                <p className="text-slate-400 mt-3 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-slate-400 text-sm uppercase tracking-[0.18em]">
                    {item.levelLabel}
                  </p>
                  <p className="text-lg">
                    <CountUpNumber
                      end={item.levelValue}
                      suffix={item.levelSuffix}
                    />
                  </p>
                </div>

                <div className="mt-3">
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-cyan-300/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: item.progress }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1 }}
                      className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass neon-border rounded-[28px] p-7 robot-card-hover"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaCertificate className="text-cyan-300" />
            <h3 className="text-2xl font-semibold text-white">
              Certificate Archive
            </h3>
          </div>

          <div className="space-y-5">
            {certificates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-5 border border-cyan-300/10"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>
                  <span className="text-cyan-300 text-sm">{item.time}</span>
                </div>

                <p className="text-slate-300 mt-2">{item.org}</p>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-slate-400 text-sm uppercase tracking-[0.18em]">
                    {item.levelLabel}
                  </p>
                  <p className="text-lg">
                    <CountUpNumber
                      end={item.levelValue}
                      suffix={item.levelSuffix}
                    />
                  </p>
                </div>

                <div className="mt-3">
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-cyan-300/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: item.progress }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1 }}
                      className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 rounded-full"
                    ></motion.div>
                  </div>
                </div>

                {/* TODO: certificate link ya image baad me add kar sakte ho */}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TrainingCertificates;