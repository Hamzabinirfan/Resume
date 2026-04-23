import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { HiExternalLink } from "react-icons/hi"
import SectionWrapper from "./shared/SectionWrapper"
import GlassCard from "./shared/GlassCard"
import GradientText from "./shared/GradientText"
import { projects } from "../constants/data"
import { fadeLeft, scaleIn, staggerContainer } from "../constants/animations"

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <motion.div
        className="text-center mb-14"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-widest text-brand-purple mb-2 font-medium">What I've Built</p>
        <h2 className="text-4xl font-bold">
          Featured <GradientText>Projects</GradientText>
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, idx) => (
          <motion.div key={idx} variants={scaleIn} className="flex">
            <GlassCard className="flex flex-col w-full">
              {/* Top accent bar */}
              <div className="h-1 -mx-6 -mt-6 mb-5 rounded-t-2xl bg-brand-gradient" />

              {/* Title */}
              <h3 className="font-bold text-white text-xl mb-3">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm glass border border-white/10 text-gray-300 hover:text-white transition-colors min-h-[40px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={15} />
                    Code
                  </motion.a>
                )}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-brand-gradient text-white hover:opacity-90 transition-opacity min-h-[40px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HiExternalLink size={15} />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
