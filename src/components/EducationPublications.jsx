import { motion } from "framer-motion"
import { HiAcademicCap, HiDocumentText, HiLocationMarker, HiCalendar } from "react-icons/hi"
import SectionWrapper from "./shared/SectionWrapper"
import GlassCard from "./shared/GlassCard"
import GradientText from "./shared/GradientText"
import { education, publications } from "../constants/data"
import { fadeLeft, fadeRight, staggerContainer, scaleIn } from "../constants/animations"

export default function EducationPublications() {
  return (
    <SectionWrapper id="education">
      <motion.div
        className="text-center mb-14"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-widest text-brand-pink mb-2 font-medium">Learning & Research</p>
        <h2 className="text-4xl font-bold">
          Education & <GradientText>Publications</GradientText>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Education */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center">
              <HiAcademicCap size={20} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Education</h3>
          </div>

          <div className="flex flex-col gap-4">
            {education.map((edu, idx) => (
              <GlassCard key={idx}>
                <h4 className="font-bold text-white text-base leading-snug mb-1">{edu.degree}</h4>
                <p className="gradient-text font-semibold text-sm mb-3">{edu.institution}</p>

                <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <HiLocationMarker size={12} />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiCalendar size={12} />
                    {edu.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-brand-gradient text-white font-semibold">
                    CGPA: {edu.cgpa}
                  </span>
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">Relevant Courses</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((c) => (
                      <span key={c} className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* Publications */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center">
              <HiDocumentText size={20} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Publications</h3>
          </div>

          <motion.div
            className="flex flex-col gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {publications.map((pub, idx) => (
              <motion.div key={idx} variants={scaleIn}>
                <GlassCard>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                      <HiDocumentText size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium leading-relaxed mb-3">
                        {pub.title}
                      </p>
                      {pub.link && pub.link !== "#" ? (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs gradient-text font-semibold hover:opacity-80 transition-opacity"
                        >
                          View Publication →
                        </a>
                      ) : (
                        <span className="text-xs text-gray-500">Published Research</span>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
