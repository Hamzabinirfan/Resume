import { motion } from "framer-motion"
import SectionWrapper from "./shared/SectionWrapper"
import GradientText from "./shared/GradientText"
import { skills } from "../constants/data"
import { fadeLeft, scaleIn, staggerFast } from "../constants/animations"

const categoryColors = {
  Languages:        "from-purple-500/20 to-purple-500/5  border-purple-500/30  text-purple-300",
  Frontend:         "from-pink-500/20   to-pink-500/5    border-pink-500/30    text-pink-300",
  Backend:          "from-orange-500/20 to-orange-500/5  border-orange-500/30  text-orange-300",
  Databases:        "from-blue-500/20   to-blue-500/5    border-blue-500/30    text-blue-300",
  "Cloud & DevOps": "from-cyan-500/20   to-cyan-500/5    border-cyan-500/30    text-cyan-300",
  "AI & ML":        "from-green-500/20  to-green-500/5   border-green-500/30   text-green-300",
  Tools:            "from-yellow-500/20 to-yellow-500/5  border-yellow-500/30  text-yellow-300",
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <motion.div
        className="text-center mb-14"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-widest text-brand-pink mb-2 font-medium">What I Know</p>
        <h2 className="text-4xl font-bold">
          Technical <GradientText>Skills</GradientText>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-8">
        {Object.entries(skills).map(([category, items], catIdx) => (
          <motion.div
            key={category}
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: catIdx * 0.05 }}
          >
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-semibold">
              {category}
            </p>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {items.map((skill) => (
                <motion.span
                  key={skill}
                  variants={scaleIn}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full border bg-gradient-to-br ${categoryColors[category] ?? "from-gray-500/20 to-gray-500/5 border-gray-500/30 text-gray-300"} cursor-default`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
