import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"
import SectionWrapper from "./shared/SectionWrapper"
import GlassCard from "./shared/GlassCard"
import GradientText from "./shared/GradientText"
import { personal } from "../constants/data"
import { fadeUp, staggerContainer, scaleIn } from "../constants/animations"

const socials = [
  {
    icon: <FaGithub size={22} />,
    label: "GitHub",
    href: personal.github,
  },
  {
    icon: <FaLinkedin size={22} />,
    label: "LinkedIn",
    href: personal.linkedin,
  },
  {
    icon: <FaEnvelope size={22} />,
    label: "Email",
    href: `mailto:${personal.email}`,
  },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <motion.div
        className="text-center mb-14"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-widest text-brand-orange mb-2 font-medium">Get In Touch</p>
        <h2 className="text-4xl font-bold">
          Contact <GradientText>Me</GradientText>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
          I'm currently open to new opportunities. Whether you have a project idea, a job offer, or just want to say hello — my inbox is always open!
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <GlassCard className="flex flex-col items-center text-center gap-8">
          {/* Contact details */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              variants={scaleIn}
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-purple/50 transition-colors group flex-1 justify-center"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-gradient flex items-center justify-center flex-shrink-0">
                <FaEnvelope size={15} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 font-medium">Email</p>
                <p className="text-sm text-gray-200 group-hover:text-white transition-colors break-all">
                  {personal.email}
                </p>
              </div>
            </motion.a>

            <motion.a
              variants={scaleIn}
              href={`tel:${personal.phone}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-pink/50 transition-colors group flex-1 justify-center"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-gradient flex items-center justify-center flex-shrink-0">
                <FaPhone size={15} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 font-medium">Phone</p>
                <p className="text-sm text-gray-200 group-hover:text-white transition-colors">
                  {personal.phone}
                </p>
              </div>
            </motion.a>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-white/5" />

          {/* Social icons */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-5 font-medium">Find me on</p>
            <motion.div
              className="flex gap-4 justify-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {socials.map(({ icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  variants={scaleIn}
                  className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.a
            href={`mailto:${personal.email}`}
            className="px-10 py-3.5 rounded-full font-semibold bg-brand-gradient text-white hover:opacity-90 transition-opacity shadow-glow-purple"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Say Hello 👋
          </motion.a>
        </GlassCard>
      </div>
    </SectionWrapper>
  )
}
