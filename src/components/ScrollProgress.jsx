import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const scaleX = useSpring(progress, { stiffness: 200, damping: 30 })

  useEffect(() => {
    const onScroll = () => {
      const scrolled   = window.scrollY
      const total      = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? scrolled / total : 0)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] h-[3px]"
      style={{
        scaleX,
        transformOrigin: "0%",
        background: "linear-gradient(to right, #a855f7, #ec4899, #fb923c)",
      }}
    />
  )
}
