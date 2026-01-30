import { motion } from 'framer-motion';
import { useState } from 'react';

interface OpeningSectionProps {
  onBalloonOpen: () => void;
}

const OpeningSection = ({ onBalloonOpen }: OpeningSectionProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);

  const handleBalloonClick = () => {
    setIsOpened(true);
    setTimeout(() => {
      setShowPhotos(true);
      onBalloonOpen();
    }, 1000);
  };

  // Replace these URLs with your real images
  const photos = [
    '/images/31.jpg',
    '/images/33.jpg',
    '/images/34.jpg',
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center z-10"
      >
        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          Happy Birthday, Sonu 🎂
        </motion.h1>
        <motion.p
          className="font-display text-xl md:text-2xl text-muted-foreground italic max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Read slowly… this page remembers more than I ever said.<br></br>
                   please  scroll up slowly
        </motion.p>
      </motion.div>

      {/* Glowing Balloon */}
      <motion.div
        className="mt-16 cursor-pointer relative"
        onClick={handleBalloonClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={isOpened ? { scale: 1.5, opacity: 0 } : { y: [0, -15, 0] }}
        transition={isOpened ? { duration: 0.8 } : { duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 blur-2xl bg-rose/40 rounded-full scale-150" />
        
        <svg width="120" height="160" viewBox="0 0 120 160" fill="none" className="drop-shadow-lg relative z-10">
          <defs>
            <linearGradient id="balloonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(330, 70%, 80%)" />
              <stop offset="50%" stopColor="hsl(340, 65%, 75%)" />
              <stop offset="100%" stopColor="hsl(280, 50%, 75%)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <ellipse cx="60" cy="55" rx="50" ry="55" fill="url(#balloonGrad)" filter="url(#glow)" />
          <ellipse cx="45" cy="40" rx="15" ry="20" fill="white" opacity="0.35" />
          <polygon points="60,110 50,120 70,120" fill="hsl(330, 60%, 70%)" />
          <path d="M60 120 Q55 140 60 160" stroke="hsl(40, 50%, 60%)" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>

      <motion.p
        className="mt-8 text-muted-foreground text-center font-body text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpened ? 0 : 1 }}
        transition={{ delay: 2 }}
      >
        "Sonu… Touch this balloon is holding everything I never told you."
      </motion.p>

      {/* Floating Photos after balloon opens */}
      {showPhotos && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-20 bg-background/85 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center px-4">
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {photos.map((src, i) => (
                <motion.div
                  key={i}
                  className="w-32 h-40 md:w-40 md:h-52 bg-cream rounded-lg shadow-dreamy overflow-hidden"
                  style={{ rotate: `${(i - 1) * 5}deg` }}
                  initial={{ opacity: 0, y: 50, rotate: Math.random() * 30 - 15 }}
                  animate={{ opacity: 1, y: 0, rotate: (i - 1) * 5 }}
                  transition={{ delay: 0.5 + i * 0.3, type: 'spring', stiffness: 100 }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                >
                  <img
                    src={src}
                    alt={`Memory ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="font-display text-2xl md:text-3xl text-foreground italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              "Some memories don't make noise. They stay."
            </motion.p>

            <motion.button
              className="mt-8 px-8 py-3 bg-primary text-primary-foreground rounded-full font-body shadow-glow hover:shadow-dreamy transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3 }}
              onClick={() => setShowPhotos(false)}
            >
              Continue ✨
            </motion.button>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default OpeningSection;
