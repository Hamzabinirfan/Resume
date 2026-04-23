import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { HiCode, HiTrendingUp, HiCheckCircle, HiLightningBolt } from "react-icons/hi"
import { FaServer } from "react-icons/fa"
import SectionWrapper from "./shared/SectionWrapper"
import GradientText from "./shared/GradientText"
import { staggerContainer, scaleIn } from "../constants/animations"

const stats = [
  { icon: <HiCode size={26} />,        value: 6,  suffix: "+", label: "Websites Deployed",       desc: "Scalable e-commerce & web apps" },
  { icon: <HiTrendingUp size={26} />,  value: 30, suffix: "%", label: "Engagement Boost",        desc: "Avg. user engagement increase"  },
  { icon: <HiCheckCircle size={26} />,  value: 50, suffix: "+", label: "Bugs Resolved",           desc: "Across QA & production cycles"  },
  { icon: <HiLightningBolt size={26} />,value: 40, suffix: "%",label: "Faster Page Load",        desc: "Frontend performance optimized" },
  { icon: <FaServer size={22} />,      value: 99, suffix: ".9%",label: "Server Uptime",          desc: "Maintained at JPC Equestrian"   },
  { icon: <HiCode size={26} />,        value: 3,  suffix: "+", label: "Years Experience",        desc: "Professional software development" },
]

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const steps    = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <SectionWrapper id="stats">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-widest text-brand-pink mb-2 font-medium">Impact by Numbers</p>
        <h2 className="text-4xl font-bold">
          Achievements & <GradientText>Stats</GradientText>
        </h2>
      </motion.div>

      <motion.div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-3 gap-5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map(({ icon, value, suffix, label, desc }, idx) => (
          <motion.div key={idx} variants={scaleIn}>
            <div className="glass p-6 rounded-2xl h-full flex flex-col gap-3 hover:border-white/20 border border-white/8 transition-colors group">
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center text-white flex-shrink-0">
                {icon}
              </div>

              {/* Number */}
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text leading-none">
                <AnimatedCounter target={value} suffix={suffix} inView={inView} />
              </div>

              {/* Label */}
              <div>
                <p className="font-semibold text-white text-sm">{label}</p>
                <p className="text-gray-500 text-xs mt-0.5 leading-snug">{desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
