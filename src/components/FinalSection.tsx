import { motion } from 'framer-motion';
import { useState } from 'react';
 // Your heart image path

const FinalSection = () => {
  const [hasClicked, setHasClicked] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-pink-100 via-rose-100 to-pink-200">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        {/* Moon Animation */}
        <motion.div
          className="text-6xl mb-8"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          🌙
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-display text-2xl md:text-4xl text-foreground mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          "This page will close.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="font-display text-2xl md:text-4xl text-rose-600 italic mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          But the feeling won't."
        </motion.p>

        {/* Button or Heart Animation */}
        {!hasClicked ? (
          <motion.button
            className="px-10 py-4 bg-rose-500 text-white rounded-full font-body text-lg shadow-lg hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setHasClicked(true)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            Click Heart 💖 Keep this memory
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Heart Image Animation */}
            {/* <motion.div
              className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden"
              style={{
                backgroundImage: `url(${HeartImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            ></motion.div> */}

            {/* Thank You Text */}
            <p className="font-display text-2xl text-foreground italic">
              Thank you for reading, Sonu…
            </p>

            <p className="font-body text-gray-600">
              This memory is now yours to keep.
            </p>

            {/* Floating Emojis */}
            <motion.div
              className="flex justify-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {['💕', '✨', '🌸', '✨', '💕'].map((emoji, i) => (
                <motion.span
                  key={i}
                  className="text-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Footer Text */}
        <motion.p
          className="mt-16 text-sm text-gray-500 font-body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2 }}
        >
          Made with love, for you 💝
        </motion.p>
      </motion.div>
    </section>
  );
};

export default FinalSection;
