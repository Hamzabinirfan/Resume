import { motion } from "framer-motion"
import { HiBriefcase, HiLocationMarker, HiCalendar } from "react-icons/hi"
import SectionWrapper from "./shared/SectionWrapper"
import GlassCard from "./shared/GlassCard"
import GradientText from "./shared/GradientText"
import { experience } from "../constants/data"
import { fadeLeft, staggerContainer } from "../constants/animations"

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <motion.div
        className="text-center mb-14"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-widest text-brand-orange mb-2 font-medium">My Journey</p>
        <h2 className="text-4xl font-bold">
          Work <GradientText>Experience</GradientText>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Vertical timeline line */}
        <motion.div
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, #a855f7, #ec4899, #fb923c)" }}
          initial={{ scaleY: 0, transformOrigin: "top" }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        <motion.div
          className="flex flex-col gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              className={`relative pl-16 md:pl-0 md:w-1/2 ${
                idx % 2 === 0
                  ? "md:pr-12 md:ml-0 md:text-right"
                  : "md:pl-12 md:ml-auto md:text-left"
              }`}
              variants={idx % 2 === 0 ? fadeLeft : {
                hidden: { opacity: 0, x: 40 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-6 w-4 h-4 rounded-full bg-brand-gradient border-2 border-dark
                  left-4 md:left-auto
                  ${idx % 2 === 0 ? "md:-right-2" : "md:-left-2"}`}
              />

              <GlassCard className="text-left">
                {/* Role + Company */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-gradient flex items-center justify-center flex-shrink-0">
                    <HiBriefcase size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg leading-tight">{exp.role}</h3>
                    <p className="text-brand-purple font-semibold text-sm">{exp.company}</p>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <HiCalendar size={13} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiLocationMarker size={13} />
                    {exp.location}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-2 text-sm text-gray-300 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gradient flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
