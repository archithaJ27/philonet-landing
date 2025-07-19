import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="flex flex-col items-center justify-center text-center px-6 py-40 bg-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
        Stop doom-scrolling. <br className="hidden md:block" />
        <span className="text-blue-600">Start thought-building.</span>
      </h1>
      <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-xl">
        Philonet helps you catch your thoughts before the feed steals them.
      </p>
      <button className="mt-8 px-6 py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition duration-300">
        Get Started
      </button>
    </motion.section>
  );
}


