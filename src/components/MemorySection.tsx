import { motion } from "framer-motion";

// Array of memories (images & videos)
const memories = [
  { caption: "This smile didn’t know it was slowly becoming my favorite place.", image: "/images/1.jpg" },
  { caption: "Some moments don’t pass… they quietly stay forever.", image: "/images/2.jpg" },
  { caption: "Fun video memory!", video: "/videos/video1.mp4" },
  { caption: "I didn’t realize then, but this was the beginning of everything.", image: "/images/3.JPG" },
  { caption: "A normal photo for you — a priceless treasure for me.", image: "/images/4.JPG" },
  { caption: "Video of laughter and fun.", video: "/videos/video2.mp4" },
  { caption: "Every time I see this, my heart remembers what my mind forgets.", image: "/images/5.JPG" },
  { caption: "This moment taught me that happiness can have a face.", image: "/images/6.jpg" },
  { caption: "Some pictures whisper feelings words never could.", image: "/images/7.jpg" },
  { caption: "Time moved forward, but this moment stayed right here.", image: "/images/8.jpg" },
  { caption: "This photo carries a thousand unspoken emotions.", image: "/images/9.jpg" },
  { caption: "Video memory of a magical day.", video: "/videos/video3.mp4" },
  { caption: "This was one of those moments I wish I could relive silently.", image: "/images/10.jpg" },
  { caption: "You were just being you — and that was more than enough.", image: "/images/11.JPG" },
  { caption: "Some memories don’t fade, they grow deeper with time.", image: "/images/12.jpg" },
  { caption: "Video of our first trip together.", video: "/videos/video4.mp4" },
  { caption: "This photo holds the warmth I still feel today.", image: "/images/5.JPG" },
  { caption: "I didn’t know I was making a forever memory that day.", image: "/images/14.jpg" },
  { caption: "Even now, this moment makes my heart pause.", image: "/images/15.jpg" },
  { caption: "This wasn’t special then… but it means everything now.", image: "/images/16.jpg" },
  { caption: "Some days pass, some days change your life.", image: "/images/17.jpg" },
  { caption: "Video of an unforgettable celebration.", video: "/videos/video5.mp4" },
  { caption: "If memories had a heartbeat, this one would be mine.", image: "/images/18.jpg" },
  { caption: "Some memories feel like home.", image: "/images/19.jpg" },
  { caption: "I didn’t pose for this… my heart did.", image: "/images/20.JPG" },
  { caption: "Video of our silly moments together.", video: "/videos/video6.mp4" },
  { caption: "A quiet moment that became loud in my heart.", image: "/images/21.jpg" },
  { caption: "This photo still speaks when everything else is silent.", image: "/images/22.jpg" },
  { caption: "Video of a heartfelt surprise.", video: "/videos/video7.mp4" },
  { caption: "Another precious memory captured.", image: "/images/23.jpg" },
  { caption: "Video of laughter that never ends.", video: "/videos/video8.mp4" },
  { caption: "Smiles that stay forever.", image: "/images/24.jpg" },
  { caption: "Final magical memory video.", video: "/videos/video9.mp4" },
  { caption: "The most cherished memory.", image: "/images/25.jpg" },
  { caption: "Bonus video memory.", video: "/videos/video10.mp4" },
];

const MemorySection = () => {
  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.h2
          className="font-display text-3xl md:text-5xl text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Moments That Stay 📸
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Media */}
              <div className="w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden mb-4 flex justify-center items-center bg-gray-100">
                {memory.image ? (
                  <motion.img
                    src={memory.image}
                    alt="Memory"
                    className="w-full h-full object-contain"
                    initial={{ scale: 1.05 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                ) : memory.video ? (
                  <motion.video
                    src={memory.video}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    initial={{ scale: 1.05 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                ) : null}
              </div>

              {/* Caption */}
              <p className="font-display text-lg md:text-xl text-center italic">
                “{memory.caption}”
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          className="text-center text-gray-500 mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Every memory holds a piece of our forever.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default MemorySection;
