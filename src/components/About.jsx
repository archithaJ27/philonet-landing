import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="px-6 py-20 text-center bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6">Built for Thinkers</h2>
      <p className="max-w-xl mx-auto text-gray-600">
        We believe in thoughtful interactions and meaningful connections.
      </p>
    </motion.section>
  );
}