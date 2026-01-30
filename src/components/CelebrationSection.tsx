import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const CelebrationSection = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleBlowCandles = () => {
    setCandlesBlown(true);
    setTimeout(() => setShowConfetti(true), 500);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Confetti */}
      <AnimatePresence>
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 60 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  width: Math.random() > 0.5 ? '10px' : '8px',
                  height: Math.random() > 0.5 ? '10px' : '8px',
                  borderRadius: Math.random() > 0.5 ? '50%' : '2px',
                  backgroundColor: [
                    'hsl(350, 80%, 70%)',
                    'hsl(270, 50%, 70%)',
                    'hsl(40, 70%, 70%)',
                    'hsl(330, 60%, 75%)',
                    'hsl(200, 60%, 70%)',
                  ][i % 5],
                }}
                initial={{ y: -20, opacity: 1, scale: 0 }}
                animate={{
                  y: window.innerHeight + 100,
                  opacity: [1, 1, 0],
                  scale: [0, 1, 1],
                  rotate: Math.random() * 720,
                  x: Math.random() * 100 - 50,
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: Math.random() * 0.5,
                  ease: 'easeOut',
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="font-display text-3xl md:text-5xl text-foreground mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Make a Wish, Sonu 🌟
        </motion.h2>

        {/* Birthday Cake */}
        <motion.div
          className="relative inline-block mb-12"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <svg width="200" height="180" viewBox="0 0 200 180" className="drop-shadow-lg">
            {/* Cake base */}
            <rect x="30" y="100" width="140" height="60" rx="10" fill="hsl(350, 60%, 85%)" />
            <rect x="30" y="100" width="140" height="20" rx="5" fill="hsl(330, 50%, 80%)" />
            
            {/* Middle layer */}
            <rect x="45" y="70" width="110" height="35" rx="8" fill="hsl(270, 50%, 85%)" />
            <rect x="45" y="70" width="110" height="15" rx="5" fill="hsl(280, 45%, 80%)" />
            
            {/* Top layer */}
            <rect x="60" y="45" width="80" height="30" rx="6" fill="hsl(350, 70%, 90%)" />
            <rect x="60" y="45" width="80" height="12" rx="4" fill="hsl(340, 60%, 85%)" />
            
            {/* Frosting drips */}
            <ellipse cx="50" cy="100" rx="8" ry="12" fill="hsl(40, 80%, 95%)" />
            <ellipse cx="100" cy="70" rx="6" ry="10" fill="hsl(40, 80%, 95%)" />
            <ellipse cx="150" cy="100" rx="8" ry="12" fill="hsl(40, 80%, 95%)" />
            
            {/* Decorations */}
            <circle cx="70" cy="115" r="5" fill="hsl(40, 70%, 70%)" />
            <circle cx="100" cy="115" r="5" fill="hsl(40, 70%, 70%)" />
            <circle cx="130" cy="115" r="5" fill="hsl(40, 70%, 70%)" />
            
            {/* Candles */}
            <AnimatePresence>
              {!candlesBlown && (
                <>
                  {[80, 100, 120].map((x, i) => (
                    <g key={i}>
                      <rect x={x - 3} y="20" width="6" height="28" fill="hsl(270, 50%, 75%)" rx="2" />
                      <motion.ellipse
                        cx={x}
                        cy="15"
                        rx="8"
                        ry="12"
                        fill="hsl(40, 90%, 60%)"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.9, 1, 0.9] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                      />
                      <motion.ellipse
                        cx={x}
                        cy="12"
                        rx="4"
                        ry="6"
                        fill="hsl(30, 100%, 70%)"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.15 }}
                      />
                    </g>
                  ))}
                </>
              )}
            </AnimatePresence>
            
            {/* Smoke after blowing */}
            {candlesBlown && (
              <>
                {[80, 100, 120].map((x, i) => (
                  <g key={`smoke-${i}`}>
                    <rect x={x - 3} y="20" width="6" height="28" fill="hsl(270, 50%, 75%)" rx="2" />
                    <motion.path
                      d={`M${x} 20 Q${x + 5} 10 ${x} 0`}
                      stroke="hsl(0, 0%, 70%)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ opacity: 1, pathLength: 0 }}
                      animate={{ opacity: 0, pathLength: 1, y: -20 }}
                      transition={{ duration: 2 }}
                    />
                  </g>
                ))}
              </>
            )}
          </svg>
        </motion.div>

        {!candlesBlown ? (
          <motion.button
            className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-body text-lg shadow-glow hover:shadow-dreamy transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBlowCandles}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Blow the candles 🎂
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <p className="font-display text-2xl md:text-4xl text-foreground">
              "Today is your birthday, Sonu."
            </p>
            <p className="font-display text-xl md:text-3xl text-rose italic">
              "Thank you for being the reason some days feel lighter."
            </p>
            <motion.div
              className="text-5xl mt-8"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              🎉
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default CelebrationSection;
