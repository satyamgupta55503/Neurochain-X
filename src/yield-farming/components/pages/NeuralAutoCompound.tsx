'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa6';

export default function NeuralAutoCompound() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="w-full flex justify-center items-center px-4 py-8"> {/* <-- Centering wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97, rotateX: -10 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="w-fit rounded-2xl bg-gradient-to-br from-[#0a0e27] via-[#0e122f] text-center to-black border border-white/10 p-6 flex flex-col md:flex-row items-center justify-center gap-4 shadow-[0_0_40px_rgba(0,255,255,0.08)] backdrop-blur-xl hover:shadow-[0_0_60px_rgba(0,255,255,0.2)] transition-shadow duration-500"
      >
        {/* Text Content */}
        <div>
          <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight">Neural Auto-Compounding</h3>
          <p className="text-gray-400 text-sm md:text-base mt-1 max-w-xl">
            Activate the neural auto-compounder to automatically reinvest your rewards for exponential growth.
            Our AI optimizes compounding frequency based on network conditions and gas fees.
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Toggle Switch */}
          <motion.div
            whileTap={{ scale: 0.95 }}
            className={`w-36 h-11 flex items-center justify-between px-4 rounded-full cursor-pointer 
              border border-white/10 transition-all duration-300 shadow-inner 
              ${enabled ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-black/60'}`}
            onClick={() => setEnabled(!enabled)}
          >
            <span className="text-sm text-white">Auto-Compound</span>
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={`w-6 h-6 rounded-full bg-white shadow-lg ${enabled ? 'translate-x-5' : 'translate-x-0'}`}
            />
          </motion.div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-cyan-400 text-black font-semibold px-5 py-2 rounded-xl 
              shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:bg-cyan-300 transition-all text-sm md:text-base"
          >
            <FaArrowDown className="text-xs" />
            Optimize All Positions
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
