"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Play,
  Film,
  Scissors,
  Camera,
  Youtube,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Star,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Zap,
  Heart,
  Sparkles,
  TrendingUp,
} from "lucide-react"

export default function HarshEditsPortfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 200])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const testimonials = [
    {
      name: "Subahsh Gupta",
      role: "Content Creator",
      content:
        "Harsh transformed my raw footage into pure magic! My Instagram engagement went through the roof. The editing style is exactly what Gen-Z loves!",
      rating: 5,
    },
    {
      name: "Priyal Sharma",
      role: "Wedding Filmmaker",
      content:
        "The short film we created together got 50K+ views in just 2 days! Harsh knows how to tell stories that connect with people emotionally.",
      rating: 5,
    },
    {
      name: "Aditya Kumar",
      role: "Brand Manager",
      content:
        "Our brand's Instagram reels started trending after Harsh took over the editing. Professional quality with that viral touch!",
      rating: 5,
    },
  ]

  const portfolioItems = [
    {
      title: "Viral Love Story Reel",
      category: "Instagram Reels",
      views: "15K+",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Cinematic Film",
      category: "Short Films",
      views: "1K+",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Brand Campaign Series",
      category: "Long Format",
      views: "5K+",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Travel Vlog Edit",
      category: "YouTube",
      views: "1.5K+",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    
    {
      title: "Documentary Feature",
      category: "Long Format",
      views: "8K+",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
  ]

  const services = [
    {
      icon: Instagram,
      title: "Instagram Reels",
      description: "Viral-ready reels that get millions of views",
      features: ["Trending transitions", "Perfect timing", "Viral hooks"],
    },
    {
      icon: Film,
      title: "Short Films",
      description: "Cinematic storytelling that moves hearts",
      features: ["Emotional narratives", "Color grading", "Sound design"],
    },
    {
      icon: Camera,
      title: "Long Format Videos",
      description: "YouTube & brand content that keeps viewers hooked",
      features: ["Retention editing", "Pacing mastery", "Thumbnail design"],
    },
    {
      icon: TrendingUp,
      title: "Social Media Management",
      description: "Complete Instagram page handling & growth",
      features: ["Content strategy", "Posting schedule", "Engagement boost"],
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "portfolio", "services", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-1 h-1 bg-cyan-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Harsh
            </span>
            <span className="text-white">Edits</span>
            <motion.span
              className="inline-block ml-1"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              ✨
            </motion.span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["hero", "about", "portfolio", "services", "testimonials", "contact"].map((section, index) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 relative ${
                  activeSection === section ? "text-purple-400" : "text-white hover:text-purple-400"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                {section === "hero" ? "Home" : section}
                {activeSection === section && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400"
                    layoutId="activeSection"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} whileTap={{ scale: 0.95 }}>
            <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isMenuOpen ? <X /> : <Menu />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {["hero", "about", "portfolio", "services", "testimonials", "contact"].map((section, index) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left capitalize py-3 text-white hover:text-purple-400 transition-colors border-b border-gray-800 last:border-b-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {section === "hero" ? "Home" : section}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Social Media Sidebar */}
      <motion.div
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        {[
          { icon: Youtube, href: "#", color: "hover:text-red-500", bg: "hover:bg-red-500/20" },
          { icon: Instagram, href: "#", color: "hover:text-pink-500", bg: "hover:bg-pink-500/20" },
          { icon: Linkedin, href: "#", color: "hover:text-blue-500", bg: "hover:bg-blue-500/20" },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            className={`block p-3 bg-white/10 backdrop-blur-md rounded-full text-white ${social.color} ${social.bg} transition-all duration-300 border border-white/20`}
            whileHover={{ scale: 1.2, x: -8 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 + index * 0.1 }}
          >
            <social.icon size={20} />
          </motion.a>
        ))}
      </motion.div>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Floating Elements */}
        <motion.div className="absolute inset-0 z-10">
          <motion.div
            className="absolute top-1/4 left-1/4 text-purple-400"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Film size={32} />
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-1/4 text-cyan-400"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <Scissors size={28} />
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 left-1/3 text-pink-400"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <Heart size={24} />
          </motion.div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative z-20 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-5xl md:text-8xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <motion.span
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              HarshEdits
            </motion.span>
            <motion.span
              className="inline-block ml-4"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              ✨
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Creating viral content that breaks the internet 🚀
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                <Play className="mr-2" size={20} />
                View Work
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg rounded-full transition-all duration-300"
              >
                <Zap className="mr-2" size={20} />
                Let's Talk
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: y2 }}>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 to-cyan-900/10" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Hey, I'm Harsh!
                </span>
                <motion.span
                  className="inline-block ml-2"
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  👋
                </motion.span>
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                The guy who makes your videos go viral and your Instagram blow up! 🚀
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <img
                    src="/placeholder.svg?height=500&width=400"
                    alt="Harsh - Video Editor"
                    className="relative rounded-2xl w-full h-96 object-cover border border-purple-500/20"
                  />
                  <motion.div
                    className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-full p-2"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="text-yellow-400" size={20} />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-purple-400">Your Creative Partner 🎨</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm not just a video editor - I'm your creative partner who understands what makes content go viral
                    in today's digital world. With <span className="text-cyan-400 font-semibold">3+ years</span> of
                    experience and
                    <span className="text-purple-400 font-semibold"> 100k+ views</span> generated for my clients, I know
                    exactly what works!
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Whether it's a heartwarming short film, a trendy Instagram reel, or a long-format YouTube video, I
                    bring that <span className="text-pink-400 font-semibold">special sauce</span> that makes viewers
                    stop scrolling and start engaging.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Adobe Premiere Pro", level: "Expert", color: "from-purple-500 to-purple-600" },
                    { label: "After Effects", level: "Advanced", color: "from-cyan-500 to-cyan-600" },
                    { label: "DaVinci Resolve", level: "Expert", color: "from-pink-500 to-pink-600" },
                    { label: "CapCut Tools", level: "Ninja", color: "from-yellow-500 to-orange-500" },
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.label}
                      className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-lg p-4 hover:border-purple-500/40 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-sm font-semibold text-white mb-1">{skill.label}</div>
                      <div className="text-xs text-gray-400 mb-2">{skill.level}</div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "90%" }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  {["🎬 Storytelling", "🔥 Viral Content", "💎 Premium Quality", ].map(
                    (tag, index) => (
                      <motion.span
                        key={tag}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full text-sm backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tag}
                      </motion.span>
                    ),
                  )}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Viral Hits
              </span>
              <motion.span
                className="inline-block ml-2"
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                🔥
              </motion.span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Check out some of my recent work that's been breaking the internet!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer bg-gradient-to-br from-gray-900 to-black border border-purple-500/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Play Button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                      <Play className="text-white" size={32} />
                    </div>
                  </motion.div>

                  {/* Views Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white border border-white/20">
                    👁️ {item.views}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white">
                    {item.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400 text-sm">{item.category}</p>
                    <motion.div
                      className="text-cyan-400"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      →
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg shadow-purple-500/25"
            >
              <Sparkles className="mr-2" size={20} />
              Create Your Viral Hit
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-cyan-900/10" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                What I Do Best
              </span>
              <motion.span
                className="inline-block ml-2"
                animate={{
                  rotate: [0, 20, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                💫
              </motion.span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From viral reels to cinematic masterpieces - I've got you covered!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-gray-900 to-black border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 h-full group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <motion.div
                        className="p-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl border border-purple-500/30"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <service.icon
                          className="text-purple-400 group-hover:text-cyan-400 transition-colors duration-300"
                          size={32}
                        />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-lg">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full" />
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className="mt-6 pt-6 border-t border-gray-700 group-hover:border-purple-500/30 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center text-purple-400 group-hover:text-cyan-400 transition-colors duration-300">
                        <span className="text-sm font-semibold">Let's create magic together</span>
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          →
                        </motion.div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Happy Clients
              </span>
              <motion.span
                className="inline-block ml-2"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                😍
              </motion.span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take my word for it - here's what my clients say!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Card className="bg-gradient-to-br from-gray-900 to-black border-purple-500/20 p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-cyan-400" />
                  <CardContent className="relative z-10">
                    <motion.div
                      className="flex justify-center mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <Star className="text-yellow-400 fill-current mx-1" size={24} />
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.p
                      className="text-xl text-gray-300 mb-8 italic leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      "{testimonials[currentTestimonial].content}"
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h4 className="text-lg font-bold text-purple-400 mb-1">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 space-x-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  onClick={prevTestimonial}
                  variant="outline"
                  size="icon"
                  className="border-purple-500/50 hover:bg-purple-500/20 bg-transparent text-white hover:text-purple-400 rounded-full"
                >
                  <ChevronLeft />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  onClick={nextTestimonial}
                  variant="outline"
                  size="icon"
                  className="border-purple-500/50 hover:bg-purple-500/20 bg-transparent text-white hover:text-purple-400 rounded-full"
                >
                  <ChevronRight />
                </Button>
              </motion.div>
            </div>

            <div className="flex justify-center mt-6 space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-gradient-to-r from-purple-400 to-cyan-400 scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Go Viral!
              </span>
              <motion.span
                className="inline-block ml-2"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                🚀
              </motion.span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to create content that breaks the internet? Let's chat and make some magic happen!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-6 text-purple-400">Get In Touch 📱</h3>
                <p className="text-gray-300 text-lg mb-8">
                  I'm always excited to work on new projects! Whether you need a viral reel, a cinematic short film, or
                  want to grow your Instagram - I'm your guy!
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, text: "harsh@harshedits.com", label: "Email me" },
                  { icon: Phone, text: "+91 98765 43210", label: "Call/WhatsApp" },
                  { icon: Instagram, text: "@harshedits", label: "DM on Instagram" },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 group cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="p-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl border border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <contact.icon
                        className="text-purple-400 group-hover:text-cyan-400 transition-colors duration-300"
                        size={24}
                      />
                    </motion.div>
                    <div>
                      <div className="text-gray-400 text-sm">{contact.label}</div>
                      <div className="text-white font-semibold group-hover:text-purple-400 transition-colors duration-300">
                        {contact.text}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="bg-gradient-to-r from-purple-600/10 to-cyan-600/10 border border-purple-500/20 rounded-2xl p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-purple-400 mb-3">Quick Response Time ⚡</h4>
                <p className="text-gray-300">
                  I usually respond within 2-4 hours during business hours. For urgent projects, WhatsApp is the fastest
                  way to reach me!
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-gray-900 to-black border-purple-500/20 overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Send Me Your Project Details 📝</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Input
                          placeholder="Your Name"
                          className="bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white placeholder:text-gray-400 rounded-xl"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <Input
                          type="email"
                          placeholder="Your Email"
                          className="bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white placeholder:text-gray-400 rounded-xl"
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Input
                        placeholder="Project Type (Reel, Short Film, YouTube, etc.)"
                        className="bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white placeholder:text-gray-400 rounded-xl"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Textarea
                        placeholder="Tell me about your vision! What's the vibe you're going for? Any reference videos? Let's make it epic! 🎬"
                        rows={5}
                        className="bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white placeholder:text-gray-400 resize-none rounded-xl"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl transition-all duration-300 text-lg font-semibold shadow-lg shadow-purple-500/25"
                      >
                        <Sparkles className="mr-2" size={20} />
                        Let's Create Magic Together!
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-500/20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 to-cyan-900/5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div className="text-3xl font-bold mb-4" whileHover={{ scale: 1.05 }}>
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Harsh
              </span>
              <span className="text-white">Edits</span>
              <motion.span
                className="inline-block ml-2"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                ✨
              </motion.span>
            </motion.div>
            <p className="text-gray-400 mb-6 text-lg">Making your content go viral, one edit at a time! 🚀</p>
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { icon: Youtube, href: "#", color: "hover:text-red-500" },
                { icon: Instagram, href: "#", color: "hover:text-pink-500" },
                { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-all duration-300 p-2 rounded-full hover:bg-white/10`}
                  whileHover={{ scale: 1.3, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
            <motion.p
              className="text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} HarshEdits. Made with 💜 for creators who dream big!
            </motion.p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
