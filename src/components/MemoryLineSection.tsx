"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface Memory {
  id: number
  title: string
  description: string
  emoji: string
}

const memoryLines = [
  "I didn't fall for you, Sonu… I slowly grew into you.",
  "Somewhere between 'best friend' and 'forever', my heart stopped asking questions.",
  "You never tried to impress me… that's what impressed me the most.",
  "I trusted you before I understood why.",
  "If comfort had a name, it would sound like yours.",
  "I never planned to feel this deeply — you happened.",
  "Some feelings don't need a confession… they live quietly.",
]

export default function CombinedMemorySection() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null)

  const memories: Memory[] = [
    {
      id: 1,
      title: "The Moment We Met",
      description:
        "The instant I saw you, my heart knew it had found its home. Everything changed in that beautiful moment.",
      emoji: "👀",
    },
    {
      id: 2,
      title: "Our First Adventure",
      description:
        "Exploring the world with you by my side has been the greatest adventure of my life.",
      emoji: "🌍",
    },
    {
      id: 3,
      title: "Late Night Conversations",
      description:
        "Your voice has become my favorite sound in the world. I could listen to you forever.",
      emoji: "💬",
    },
    {
      id: 4,
      title: "Quiet Moments Together",
      description:
        "In your presence, silence feels like the most beautiful symphony. You are my sanctuary.",
      emoji: "🏠",
    },
  ]

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-white to-purple-50">
      {/* Section Title */}
      <motion.h2
        className="font-display text-3xl md:text-5xl text-center text-gray-900 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Things I Never Said, But Always Felt
      </motion.h2>

      {/* Memory Lines */}
      <div className="max-w-3xl w-full space-y-8 mb-20">
        {memoryLines.map((line, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-rose-400 opacity-60" />
            <p className="font-display text-xl md:text-2xl text-gray-900 italic pl-6 leading-relaxed">
              "{line}"
            </p>
          </motion.div>
        ))}
      </div>

      {/* Floating Emojis */}
      <motion.div
        className="mb-16 flex justify-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5 }}
      >
        {['✨', '💕', '✨'].map((emoji, i) => (
          <motion.span
            key={i}
            className="text-2xl"
            animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>

      {/* Memory Lane Section */}
      <div className="max-w-4xl w-full">
        <h2 className="font-serif text-5xl sm:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Memory Lane
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Click on each memory to relive it with me
        </p>

        <div className="space-y-8">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className={`flex items-center gap-6 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
            >
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full shadow-lg hover:scale-125 transition-transform" />
                {index < memories.length - 1 && (
                  <div className="w-1 h-40 bg-gradient-to-b from-rose-300 via-pink-300 to-transparent mt-2" />
                )}
              </div>

              {/* Memory Card */}
              <button
                onClick={() => setSelectedMemory(memory)}
                className="flex-1 p-8 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl shadow-md hover:shadow-2xl transition-all hover:scale-105 cursor-pointer group text-left border-2 border-rose-200 hover:border-purple-400"
              >
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">
                  {memory.emoji}
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-800 mb-2">
                  {memory.title}
                </h3>
                <p className="text-gray-700">{memory.description}</p>
              </button>
            </div>
          ))}
        </div>

        {/* Memory Modal */}
        {selectedMemory && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedMemory(null)}
          >
            <div
              className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-3xl p-10 max-w-md w-full shadow-2xl animate-slideUp border-2 border-rose-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-7xl mb-6 text-center">{selectedMemory.emoji}</div>
              <h3 className="font-serif text-3xl font-bold text-gray-800 mb-4 text-center">
                {selectedMemory.title}
              </h3>
              <p className="text-gray-700 mb-8 text-center text-lg leading-relaxed">
                {selectedMemory.description}
              </p>
              <button
                onClick={() => setSelectedMemory(null)}
                className="w-full py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white font-serif font-bold rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
