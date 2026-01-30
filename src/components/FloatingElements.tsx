import { motion } from 'framer-motion';

interface FloatingElementProps {
  count?: number;
  type?: 'hearts' | 'balloons' | 'sparkles' | 'mixed';
}

const Heart = ({ delay, duration, left }: { delay: number; duration: number; left: string }) => (
  <motion.div
    className="absolute text-rose opacity-60"
    style={{ left }}
    initial={{ y: '100vh', rotate: 0 }}
    animate={{ y: '-100vh', rotate: 360 }}
    transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  </motion.div>
);

const Balloon = ({ delay, duration, left, color }: { delay: number; duration: number; left: string; color: string }) => (
  <motion.div
    className="absolute"
    style={{ left }}
    initial={{ y: '100vh', rotate: -5 }}
    animate={{ y: '-100vh', rotate: 5 }}
    transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
  >
    <div className="relative">
      <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
        <ellipse cx="20" cy="18" rx="16" ry="18" fill={color} opacity="0.7" />
        <path d="M20 36 L20 50" stroke={color} strokeWidth="1" opacity="0.5" />
        <ellipse cx="20" cy="18" rx="6" ry="8" fill="white" opacity="0.3" />
      </svg>
    </div>
  </motion.div>
);

const Sparkle = ({ delay, left, top }: { delay: number; left: string; top: string }) => (
  <motion.div
    className="absolute"
    style={{ left, top }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
    transition={{ duration: 2, delay, repeat: Infinity }}
  >
    <svg width="16" height="16" viewBox="0 0 16 16" fill="hsl(40, 70%, 70%)">
      <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" />
    </svg>
  </motion.div>
);

const FloatingElements = ({ count = 15, type = 'mixed' }: FloatingElementProps) => {
  const balloonColors = [
    'hsl(350, 80%, 85%)',
    'hsl(270, 50%, 85%)',
    'hsl(330, 60%, 80%)',
    'hsl(40, 60%, 85%)',
  ];

  const elements = [];

  for (let i = 0; i < count; i++) {
    const delay = Math.random() * 10;
    const duration = 15 + Math.random() * 10;
    const left = `${Math.random() * 100}%`;

    if (type === 'hearts' || (type === 'mixed' && i % 3 === 0)) {
      elements.push(<Heart key={`heart-${i}`} delay={delay} duration={duration} left={left} />);
    } else if (type === 'balloons' || (type === 'mixed' && i % 3 === 1)) {
      elements.push(
        <Balloon
          key={`balloon-${i}`}
          delay={delay}
          duration={duration}
          left={left}
          color={balloonColors[i % balloonColors.length]}
        />
      );
    } else {
      elements.push(
        <Sparkle
          key={`sparkle-${i}`}
          delay={delay}
          left={`${Math.random() * 100}%`}
          top={`${Math.random() * 100}%`}
        />
      );
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements}
    </div>
  );
};

export default FloatingElements;
