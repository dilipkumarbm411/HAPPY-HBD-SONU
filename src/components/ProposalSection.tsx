import { motion } from 'framer-motion';

const poeticLines = [
  {
    line: "I never asked for your hand.",
    continuation: "But I held your presence carefully.",
  },
  {
    line: "I never said I love you.",
    continuation: "But my heart learned your name.",
  },
  {
    line: "If this is love…",
    continuation: "Then it's the quiet kind.",
  },
];

const ProposalSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-romantic">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-5xl mb-12"
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🌸
        </motion.div>

        <div className="space-y-16">
          {poeticLines.map((item, index) => (
            <motion.div
              key={index}
              className="space-y-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.4 }}
            >
              <p className="font-display text-2xl md:text-4xl text-foreground">
                "{item.line}
              </p>
              <motion.p
                className="font-display text-xl md:text-3xl text-rose italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.4 + 0.3 }}
              >
                {item.continuation}"
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2 }}
        >
          {['💕', '✨', '💕'].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-3xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProposalSection;
