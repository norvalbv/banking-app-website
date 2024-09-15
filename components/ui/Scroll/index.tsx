'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const SECTION_HEIGHT = 1500

export default function Component() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  const icons = [
    { color: 'bg-blue-500', letter: 'F' },
    { color: 'bg-red-500', letter: 'Y' },
    { color: 'bg-green-500', letter: 'A' },
    { color: 'bg-yellow-500', letter: 'P' },
    { color: 'bg-purple-500', letter: 'R' },
    { color: 'bg-pink-500', letter: 'C' },
  ]

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-gray-100">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center">
        <motion.div className="relative h-96 w-96" style={{ rotate }}>
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              className={`absolute h-12 w-12 rounded-full ${icon.color} flex items-center justify-center text-white font-bold`}
              style={{
                top: `${50 - 40 * Math.cos((index / icons.length) * Math.PI * 2)}%`,
                left: `${50 + 40 * Math.sin((index / icons.length) * Math.PI * 2)}%`,
              }}
            >
              {icon.letter}
            </motion.div>
          ))}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-6 py-3 text-xl font-bold shadow-lg">
            YOUR LOGO
          </div>
        </motion.div>
      </div>
    </div>
  )
}