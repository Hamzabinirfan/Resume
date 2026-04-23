import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi"
import GradientText from "./shared/GradientText"

const links = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Education",  href: "#education" },
  { label: "Contact",    href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark/80 backdrop-blur-md border-b border-white/5 shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold" onClick={closeMenu}>
          <GradientText>H.A.</GradientText>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient-r transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-medium bg-brand-gradient text-white hover:opacity-90 transition-opacity"
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-dark-100/95 backdrop-blur-md border-b border-white/5"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <ul className="flex flex-col px-6 py-4 gap-4 list-none m-0 p-0">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-2 text-gray-300 hover:text-white transition-colors text-base"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium bg-brand-gradient text-white"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
