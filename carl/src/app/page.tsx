'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Featured projects data
const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory and AI-powered recommendations",
    image: "https://placehold.co/1200x675/EEE/31316A?text=E-Commerce+Platform",
    tech: ["Next.js", "Node.js", "MongoDB"],
    link: "/projects/ecommerce"
  },
  {
    id: 2,
    title: "Health & Fitness App",
    description: "Mobile-first fitness tracking application with personalized workout plans",
    image: "https://placehold.co/1200x675/EEE/31316A?text=Fitness+App",
    tech: ["React Native", "Firebase", "TensorFlow"],
    link: "/projects/fitness"
  },
  {
    id: 3,
    title: "Smart Home Dashboard",
    description: "IoT dashboard for monitoring and controlling smart home devices",
    image: "https://placehold.co/1200x675/EEE/31316A?text=Smart+Home",
    tech: ["React", "Python", "MQTT"],
    link: "/projects/smarthome"
  }
]

// Tech stack data
const techStack = [
  { name: "React", icon: "💻", level: 90 },
  { name: "Node.js", icon: "🚀", level: 85 },
  { name: "Python", icon: "🐍", level: 80 },
  { name: "TypeScript", icon: "📘", level: 88 },
  { name: "MongoDB", icon: "🍃", level: 82 },
  { name: "AWS", icon: "☁️", level: 75 }
]

export default function Home() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % featuredProjects.length)
    }, 5000)

    const handleScroll = () => {
      const scrolled = window.scrollY
      if (scrolled > 300) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      clearInterval(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="pt-20 pb-24 lg:pt-32 lg:pb-36">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span className="block">Hi, I'm Carl</span>
                <span className="block text-blue-600 mt-2">Full Stack Developer</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 max-w-lg mx-auto text-xl text-gray-500 sm:max-w-3xl"
              >
                Crafting exceptional digital experiences through clean code and innovative solutions. 
                Specialized in modern web development and scalable applications.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 flex justify-center gap-4"
              >
                <Link 
                  href="/projects"
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                >
                  View Projects
                </Link>
                <Link 
                  href="/contact"
                  className="px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Carousel */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Some of my recent work that I'm proud of
            </p>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <motion.div 
              key={currentProject}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-w-16 aspect-h-9 relative"
            >
              <Image
                src={featuredProjects[currentProject].image}
                alt={featuredProjects[currentProject].title}
                width={1200}
                height={675}
                className="w-full h-full object-cover rounded-t-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{featuredProjects[currentProject].title}</h3>
                  <p className="text-gray-200 mb-4">{featuredProjects[currentProject].description}</p>
                  <div className="flex gap-2">
                    {featuredProjects[currentProject].tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentProject === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Services & Expertise
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Comprehensive solutions for your digital needs
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Web Development */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative p-6 bg-white rounded-xl shadow-md transition-shadow duration-300"
            >
              <div className="absolute -top-4 left-6">
                <div className="rounded-full bg-blue-100 p-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
              <h3 className="mt-8 text-xl font-medium text-gray-900">Web Development</h3>
              <p className="mt-4 text-gray-500">
                Modern, responsive websites and web applications using the latest technologies and best practices.
              </p>
            </motion.div>

            {/* Mobile Development */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative p-6 bg-white rounded-xl shadow-md transition-shadow duration-300"
            >
              <div className="absolute -top-4 left-6">
                <div className="rounded-full bg-blue-100 p-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="mt-8 text-xl font-medium text-gray-900">Mobile Development</h3>
              <p className="mt-4 text-gray-500">
                Cross-platform mobile applications that provide seamless user experiences across all devices.
              </p>
            </motion.div>

            {/* Cloud Solutions */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative p-6 bg-white rounded-xl shadow-md transition-shadow duration-300"
            >
              <div className="absolute -top-4 left-6">
                <div className="rounded-full bg-blue-100 p-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
              </div>
              <h3 className="mt-8 text-xl font-medium text-gray-900">Cloud Solutions</h3>
              <p className="mt-4 text-gray-500">
                Scalable cloud infrastructure and deployment solutions for optimal performance.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Tech Stack
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Technologies I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{tech.icon}</span>
                  <h3 className="text-xl font-medium text-gray-900">{tech.name}</h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${tech.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl font-extrabold text-white">50+</div>
              <div className="mt-2 text-lg text-blue-100">Projects Completed</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl font-extrabold text-white">5+</div>
              <div className="mt-2 text-lg text-blue-100">Years Experience</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl font-extrabold text-white">30+</div>
              <div className="mt-2 text-lg text-blue-100">Happy Clients</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl font-extrabold text-white">100%</div>
              <div className="mt-2 text-lg text-blue-100">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Clients Say
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Feedback from people I've worked with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md border border-blue-100"
            >
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-2xl">🌟</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Sarah Johnson</h4>
                  <p className="text-blue-600">CEO, TechStart</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                &ldquo;Carl&apos;s expertise in web development helped us transform our digital presence. 
                The attention to detail and commitment to quality was exceptional.&rdquo;
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-md border border-purple-100"
            >
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-purple-500 flex items-center justify-center">
                  <span className="text-2xl">💫</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Mike Chen</h4>
                  <p className="text-purple-600">CTO, InnovateCo</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                &ldquo;Working with Carl was a game-changer for our mobile app development. 
                His technical skills and problem-solving abilities are top-notch.&rdquo;
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl shadow-md border border-cyan-100"
            >
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-cyan-500 flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Lisa Thompson</h4>
                  <p className="text-cyan-600">Founder, DesignHub</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                &ldquo;The cloud solutions Carl implemented revolutionized our infrastructure. 
                His expertise and dedication to the project were invaluable.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to Start Your Project?
              </h2>
              <p className="mt-4 text-xl text-blue-100">
                Let&apos;s work together to bring your ideas to life.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
