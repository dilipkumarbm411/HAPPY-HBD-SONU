import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingElements from '@/components/FloatingElements';
import OpeningSection from '@/components/OpeningSection';
import MemoryPermission from '@/components/MemoryPermission';
import MemoryLineSection from '@/components/MemoryLineSection';
import MemorySection from '@/components/MemorySection';
import LoveLetterSection from '@/components/LoveLetterSection';
import ProposalSection from '@/components/ProposalSection';
import CelebrationSection from '@/components/CelebrationSection';
import FinalSection from '@/components/FinalSection';
import romanticBg from '@/assets/romantic-bg.jpg';

const Index = () => {
  const [balloonOpened, setBalloonOpened] = useState(false);
  const [showMemories, setShowMemories] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Setup audio once
  useEffect(() => {
    audioRef.current = new Audio('/music/song.mp3'); // Ensure your song is in public/music/
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    // Cleanup
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  // Play audio on user interaction (click Begin)
  const handleStart = () => {
    setHasStarted(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch(() => console.warn('Autoplay blocked, user interaction required'));
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${romanticBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90 backdrop-blur-sm" />
      </div>

      {/* Floating Elements */}
      <FloatingElements count={20} type="mixed" />

      {/* Welcome Screen */}
      <AnimatePresence>
        {!hasStarted && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            style={{
              background: 'linear-gradient(180deg, hsl(0, 0%, 5%) 0%, hsl(330, 40%, 15%) 50%, hsl(350, 50%, 20%) 100%)',
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-center px-4 max-w-2xl"
            >
              <motion.p
                className="font-display text-xl md:text-2xl text-rose/90 mb-4 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                "This page was never meant to exist."
              </motion.p>
              
              <motion.p
                className="font-body text-lg text-cream/70 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                But some feelings refuse to stay hidden.
              </motion.p>

              <motion.div
                className="text-7xl mb-8"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 3, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                initial={{ opacity: 0 }}
              >
                🎈
              </motion.div>
              
              <motion.h1
                className="font-display text-4xl md:text-6xl text-cream mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                Happy Birthday, Sonu 🎂
              </motion.h1>
              
              <motion.p
                className="font-body text-lg text-cream/60 mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
              >
                Before begin, kindly wear Headphones and ensure you are in a private place.
              </motion.p>

              <motion.button
                className="px-10 py-4 bg-rose text-cream rounded-full font-body text-lg shadow-glow hover:shadow-dreamy transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStart}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                Let’s start with your smile😊
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {hasStarted && (
        <main className="relative z-10">
          <OpeningSection onBalloonOpen={() => setBalloonOpened(true)} />
          {balloonOpened && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
              <MemoryPermission onRemember={() => setShowMemories(true)} onSkip={() => setShowMemories(false)} />
            </motion.div>
          )}
          {balloonOpened && showMemories && <MemoryLineSection />}
          {balloonOpened && showMemories && <MemorySection />}
          {balloonOpened && <LoveLetterSection />}
          {balloonOpened && <ProposalSection />}
          {balloonOpened && <CelebrationSection />}
          {balloonOpened && <FinalSection />}
        </main>
      )}
    </div>
  );
};

export default Index;
