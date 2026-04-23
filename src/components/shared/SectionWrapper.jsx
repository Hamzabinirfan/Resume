import { motion } from "framer-motion"
import { fadeUp } from "../../constants/animations"

export default function SectionWrapper({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`py-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.section>
  )
}
