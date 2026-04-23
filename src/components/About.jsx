import { motion } from "framer-motion"
import { FaCode, FaServer, FaBrain, FaRocket } from "react-icons/fa"
import SectionWrapper from "./shared/SectionWrapper"
import GlassCard from "./shared/GlassCard"
import GradientText from "./shared/GradientText"
import { personal } from "../constants/data"
import { fadeLeft, fadeRight, staggerContainer, scaleIn } from "../constants/animations"

const highlights = [
  { icon: <FaCode size={20} />, label: "Frontend", desc: "React.js, Next.js, Tailwind, Redux" },
  { icon: <FaServer size={20} />, label: "Backend", desc: "Node.js, Express.js, REST APIs" },
  { icon: <FaBrain size={20} />, label: "AI & ML", desc: "TensorFlow, PyTorch, NLP, OpenCV" },
  { icon: <FaRocket size={20} />, label: "Cloud & DevOps", desc: "AWS, Docker, Kubernetes, CI/CD" },
]

export default function About() {
  return (
    <SectionWrapper id="about">
      {/* Heading */}
      <motion.div
        className="text-center mb-14"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-widest text-brand-purple mb-2 font-medium">Who I Am</p>
        <h2 className="text-4xl font-bold">
          About <GradientText>Me</GradientText>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {personal.summary}
          </p>
          <div className="flex flex-wrap gap-3">
            {[personal.location, personal.email, personal.phone].map((item) => (
              <span key={item} className="px-3 py-1.5 text-sm glass rounded-full text-gray-300 border border-white/8">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Highlights grid */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map(({ icon, label, desc }) => (
            <motion.div key={label} variants={scaleIn}>
              <GlassCard className="flex flex-col gap-3 min-h-[120px]">
                <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center text-white flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{label}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
