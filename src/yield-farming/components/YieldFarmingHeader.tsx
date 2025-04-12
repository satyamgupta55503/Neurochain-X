'use client';

import { motion } from 'framer-motion';

export default function YieldFarmingHeader() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="w-full py-16 px-4 md:px-8 text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold font-sans bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">
        Yield Farming & Staking
      </h2>
      <p className="mt-4 text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
        Maximize your passive income with neural-optimized staking strategies
      </p>
    </motion.section>
  );
}
