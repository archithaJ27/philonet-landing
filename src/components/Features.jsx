import { motion } from 'framer-motion';

export default function Features() {
  return (
    <motion.section
      id="features"
      className="px-6 py-20 text-center bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6">Why Philonet?</h2>
      <p className="max-w-xl mx-auto text-gray-600">
        It promotes mindful thinking and self-reflection instead of endless feeds.
      </p>
    </motion.section>
  );
}
