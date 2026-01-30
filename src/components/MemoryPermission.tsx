import { motion } from 'framer-motion';

interface MemoryPermissionProps {
  onRemember: () => void;
  onSkip: () => void;
}

const MemoryPermission = ({ onRemember, onSkip }: MemoryPermissionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-background/90">
      <motion.div
        className="text-center max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-6xl mb-8"
          animate={{ 
            scale: [1, 1.05, 1, 1.05, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          💓
        </motion.div>
        
        <motion.p
          className="font-display text-xl md:text-2xl text-muted-foreground mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Before we go further, Sonu…
        </motion.p>

        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
          Do you really want to remember?
        </h2>
        
        <p className="font-body text-lg text-muted-foreground italic mb-12">
          Because once memories wake up, they don't leave easily.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-body text-lg shadow-glow hover:shadow-dreamy transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRemember}
          >
            💖 Click here to go back to our memories and scroll slowly
          </motion.button>
          

        </div>
      </motion.div>
    </section>
  );
};

export default MemoryPermission;
