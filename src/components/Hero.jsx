import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa"
import { HiArrowDown as HiDownload } from "react-icons/hi"
import { HiArrowDown } from "react-icons/hi"
import GradientText from "./shared/GradientText"
import { personal } from "../constants/data"
import { fadeUp, staggerContainer } from "../constants/animations"

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((i) => (i + 1) % personal.taglines.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-purple opacity-20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-pink opacity-15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-brand-orange opacity-10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium glass text-gray-300 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight"
        >
          Hi, I'm{" "}
          <GradientText className="block sm:inline">
            {personal.name}
          </GradientText>
        </motion.h1>

        {/* Animated tagline */}
        <motion.div
          variants={fadeUp}
          className="h-12 flex items-center justify-center mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={taglineIndex}
              className="text-2xl sm:text-3xl text-gray-400 font-medium"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              {personal.taglines[taglineIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Summary */}
        <motion.p
          variants={fadeUp}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Full Stack Developer — React.js frontend to Node.js backend, cloud deployments, and AI integrations. Based in {personal.location}.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full font-semibold bg-brand-gradient text-white hover:opacity-90 transition-opacity shadow-glow-purple min-h-[44px] flex items-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-semibold glass border border-white/10 text-white hover:border-white/30 transition-colors min-h-[44px] flex items-center gap-2"
          >
            Contact Me
          </a>
          <a
            href="/Resume/resume.pdf"
            download="Hamza_Ansari_Resume.pdf"
            className="px-8 py-3 rounded-full font-semibold glass border border-white/10 text-white hover:border-brand-purple/50 transition-colors min-h-[44px] flex items-center gap-2"
          >
            <FaDownload size={14} />
            Download CV
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={fadeUp}
          className="flex gap-4 justify-center mb-16"
        >
          {[
            { icon: <FaGithub size={20} />, href: personal.github, label: "GitHub" },
            { icon: <FaLinkedin size={20} />, href: personal.linkedin, label: "LinkedIn" },
          ].map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-gray-500 text-xs hover:text-gray-300 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span>Scroll down</span>
          <HiArrowDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  )
}
