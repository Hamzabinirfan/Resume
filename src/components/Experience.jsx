import { motion } from "framer-motion"
import { HiBriefcase, HiLocationMarker, HiCalendar, HiClock } from "react-icons/hi"
import SectionWrapper from "./shared/SectionWrapper"
import GlassCard from "./shared/GlassCard"
import GradientText from "./shared/GradientText"
import { experience } from "../constants/data"
import { fadeLeft, staggerContainer, scaleIn } from "../constants/animations"

const MONTHS = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
  january: 0, february: 1, march: 2, april: 3, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
}

function parseDate(str) {
  if (!str || str.toLowerCase().trim() === "present") return new Date()
  const parts = str.trim().split(/\s+/)
  const month = MONTHS[parts[0].toLowerCase().slice(0, 3)]
  const year = parseInt(parts[1])
  return new Date(year, month, 1)
}

function calcDuration(period) {
  const [startStr, endStr] = period.split(/–|-/).map(s => s.trim())
  const start = parseDate(startStr)
  const end   = parseDate(endStr)
  let months  = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  if (months < 1) months = 1
  const years = Math.floor(months / 12)
  const rem   = months % 12
  if (years === 0) return `${rem} mo${rem > 1 ? "s" : ""}`
  if (rem  === 0) return `${years} yr${years > 1 ? "s" : ""}`
  return `${years} yr${years > 1 ? "s" : ""} ${rem} mo${rem > 1 ? "s" : ""}`
}

function calcTotalMonths(expList) {
  return expList.reduce((acc, exp) => {
    const [startStr, endStr] = exp.period.split(/–|-/).map(s => s.trim())
    const start = parseDate(startStr)
    const end   = parseDate(endStr)
    const m = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
    return acc + Math.max(m, 1)
  }, 0)
}

export default function Experience() {
  const totalMonths = calcTotalMonths(experience)
  const totalYears  = Math.floor(totalMonths / 12)
  const totalRem    = totalMonths % 12
  const totalLabel  = totalRem > 0
    ? `${totalYears} yr${totalYears > 1 ? "s" : ""} ${totalRem} mo${totalRem > 1 ? "s" : ""}`
    : `${totalYears} yr${totalYears > 1 ? "s" : ""}`

  return (
    <SectionWrapper id="experience">
      <motion.div
        className="text-center mb-10"
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

      {/* Total experience badge */}
      <motion.div
        className="flex justify-center mb-14"
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass border border-white/10">
          <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center flex-shrink-0">
            <HiClock size={18} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Total Experience</p>
            <p className="font-bold text-white text-lg leading-tight">
              <GradientText>{totalLabel}</GradientText> of Professional Experience
            </p>
          </div>
        </div>
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
          {experience.map((exp, idx) => {
            const duration = calcDuration(exp.period)
            return (
              <motion.div
                key={idx}
                className={`relative pl-16 md:pl-0 md:w-1/2 ${
                  idx % 2 === 0
                    ? "md:pr-12 md:ml-0 md:text-right"
                    : "md:pl-12 md:ml-auto md:text-left"
                }`}
                variants={idx % 2 === 0 ? fadeLeft : {
                  hidden:  { opacity: 0, x: 40 },
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
                  <div className="flex flex-wrap gap-3 mb-2 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <HiCalendar size={13} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <HiLocationMarker size={13} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Duration badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-gradient text-white">
                      <HiClock size={11} />
                      {duration}
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
            )
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
