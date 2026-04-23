import { motion } from "framer-motion"

export default function GlassCard({ children, className = "", hover = true }) {
  const base = `glass p-6 ${className}`

  if (hover) {
    return (
      <motion.div
        className={base}
        whileHover={{ y: -6, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    )
  }

  return <div className={base}>{children}</div>
}
