"use client"

import { useEffect, useRef, useState } from "react"

export default function LoveLetter() {
  const letterRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.4 }
    )

    if (letterRef.current) observer.observe(letterRef.current)
    return () => observer.disconnect()
  }, [])

  const letterText = `My Dearest Sonu,

Today isn’t just a celebration of your birthday —
it’s a celebration of the beautiful soul that quietly changed my life.

When I look back at the moments we’ve shared,
I realize how effortlessly you filled my world with warmth,
laughter, and a kind of happiness I never knew I was missing.

You have a way of turning ordinary days into memories
and simple moments into something unforgettable.
Your kindness reaches my heart,
your laughter feels like comfort,
and your presence makes everything feel right.

I admire how you make me braver without trying,
how you believe in me even in moments when I don’t.
You inspire me, calm me, and remind me that love can be gentle and real.

To me, you are more than just someone special —
you are my safe place, my peace, my home.
And today, I just wanted you to know
how deeply grateful I am for you.

Always,
Someone who holds you close in their heart ❤️
`

  return (
    <section
      ref={letterRef}
      className="min-h-screen flex flex-col items-center justify-start py-28 px-4
      bg-gradient-to-b from-pink-50 via-rose-50 to-purple-50"
    >
      {/* Title */}
      <h2 className="font-serif text-5xl md:text-6xl font-bold mb-16
        bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
        Special Letter for you
      </h2>

      {/* Letter Card */}
      <div
        className={`max-w-3xl w-full bg-[#fff7ec] rounded-[32px]
        border-[4px] border-pink-300 shadow-2xl
        px-14 py-16 transition-all duration-700
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <div className="font-serif text-gray-800 text-[18px] leading-[1.9] whitespace-pre-line">
          {isVisible && <TypewriterText text={letterText} speed={18} />}
        </div>
      </div>
    </section>
  )
}

function TypewriterText({ text, speed }: { text: string; speed: number }) {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1))
      index++
      if (index >= text.length) clearInterval(interval)
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return <>{displayedText}</>
}
