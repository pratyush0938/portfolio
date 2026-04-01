import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaRobot,
  FaPaperPlane,
  FaCheckCircle,
  FaCopy,
} from "react-icons/fa";

function Contact() {
  const formRef = useRef(null);

  const [isSending, setIsSending] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("pratyushrawat938@gmail.com");
      toast.success("Email copied.");
    } catch {
      toast.error("Could not copy email.");
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSending) return;

    const lastSentTime = localStorage.getItem("portfolio_last_sent_time");
    const now = Date.now();
    const cooldown = 60 * 1000;

    if (lastSentTime && now - Number(lastSentTime) < cooldown) {
      const secondsLeft = Math.ceil(
        (cooldown - (now - Number(lastSentTime))) / 1000
      );
      toast.error(`Please wait ${secondsLeft}s before sending again.`);
      return;
    }

    const formData = new FormData(formRef.current);
    const userName = formData.get("user_name")?.toString().trim();
    const userEmail = formData.get("user_email")?.toString().trim();
    const subject = formData.get("subject")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!userName || !userEmail || !subject || !message) {
      toast.error("Please fill all fields.");
      return;
    }

    if (message.length < 10) {
      toast.error("Message is too short.");
      return;
    }

    setIsSending(true);
    const loadingToast = toast.loading("Transmitting message...");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      localStorage.setItem("portfolio_last_sent_time", String(Date.now()));

      toast.dismiss(loadingToast);
      toast.success("Message sent successfully.");

      setShowSuccessPopup(true);
      formRef.current.reset();

      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 2500);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.dismiss(loadingToast);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-24 px-6 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center gradient-text mb-12 section-title"
        >
          Contact Node
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="glass neon-border rounded-[30px] max-w-6xl mx-auto p-8 md:p-10 grid lg:grid-cols-2 gap-8 robot-card-hover"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <FaRobot className="text-cyan-300" />
              <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm">
                Communication Portal
              </p>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Let’s Build Something
              <span className="gradient-text"> Futuristic</span>
            </h3>

            <p className="text-slate-300 leading-relaxed mb-8 max-w-xl">
              I’m open to internships, collaborations, and full stack development
              opportunities. Send a message through this interface and it will
              arrive directly in my inbox.
            </p>

            <div className="space-y-4">
              <div className="glass rounded-2xl p-4 flex items-center gap-4 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)] transition">
                <div className="w-11 h-11 rounded-xl glass neon-border flex items-center justify-center text-cyan-300">
                  <FaEnvelope />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-400">Email Channel</p>
                  <p className="text-white font-medium break-all">
                    pratyushrawat938@gmail.com
                  </p>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="w-10 h-10 rounded-xl glass neon-border flex items-center justify-center text-cyan-300 hover:scale-105 transition"
                  title="Copy Email"
                >
                  <FaCopy />
                </button>
              </div>

              <div className="glass rounded-2xl p-4 flex items-center gap-4 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)] transition">
                <div className="w-11 h-11 rounded-xl glass neon-border flex items-center justify-center text-cyan-300">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone Link</p>
                  <p className="text-white font-medium">+91-7302908378</p>
                </div>
              </div>

              <div className="glass rounded-2xl p-4 flex items-center gap-4 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)] transition">
                <div className="w-11 h-11 rounded-xl glass neon-border flex items-center justify-center text-cyan-300">
                  <FaGithub />
                </div>
                <div>
                  <p className="text-sm text-slate-400">GitHub</p>
                  <a
                    href="https://github.com/pratyush0938"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white font-medium hover:text-cyan-300 transition"
                  >
                    github.com/pratyush0938
                  </a>
                </div>
              </div>

              <div className="glass rounded-2xl p-4 flex items-center gap-4 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)] transition">
                <div className="w-11 h-11 rounded-xl glass neon-border flex items-center justify-center text-cyan-300">
                  <FaLinkedin />
                </div>
                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/pratyush-rawat-7a7960255"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white font-medium hover:text-cyan-300 transition break-all"
                  >
                    linkedin.com/in/pratyush-rawat-7a7960255
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-[26px] p-6 md:p-7 border border-cyan-300/10">
            <div className="mb-6">
              <p className="text-cyan-300 uppercase tracking-[0.22em] text-xs mb-2">
                Message Transmission
              </p>
              <h4 className="text-2xl font-semibold text-white">
                Send Direct Signal
              </h4>
            </div>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-cyan-300/15 outline-none text-white placeholder:text-slate-500 focus:border-cyan-300/50 focus:shadow-[0_0_20px_rgba(34,211,238,0.10)] transition"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-cyan-300/15 outline-none text-white placeholder:text-slate-500 focus:border-cyan-300/50 focus:shadow-[0_0_20px_rgba(34,211,238,0.10)] transition"
              />

              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                required
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-cyan-300/15 outline-none text-white placeholder:text-slate-500 focus:border-cyan-300/50 focus:shadow-[0_0_20px_rgba(34,211,238,0.10)] transition"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Transmit your message"
                required
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-cyan-300/15 outline-none text-white placeholder:text-slate-500 resize-none focus:border-cyan-300/50 focus:shadow-[0_0_20px_rgba(34,211,238,0.10)] transition"
              ></textarea>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3 rounded-2xl neon-button text-white font-semibold hover:scale-[1.02] transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                {isSending ? "Sending..." : "Send Transmission"}
              </button>
            </form>

            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
              Anti-spam cooldown is enabled. Please avoid repeated submissions.
            </p>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          >
            <div className="glass neon-border rounded-[28px] p-8 max-w-md w-full text-center">
              <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-3xl mb-5">
                <FaCheckCircle />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Transmission Successful
              </h3>

              <p className="text-slate-300 leading-relaxed">
                Your message has been delivered to my inbox successfully.
              </p>

              <button
                onClick={() => setShowSuccessPopup(false)}
                className="mt-6 px-6 py-3 rounded-full neon-button text-white font-semibold hover:scale-105 transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Contact;