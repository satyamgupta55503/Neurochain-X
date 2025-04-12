'use client';
import { motion } from 'framer-motion';
import React from 'react';
import GlowingButtons from "@/home/components/GlowingButtons";
import NeuroChainCards from "@/home/components/NeuroChainCards";

export default function NeuroChainLogo() {
  return (
  <>
    <div className="flex flex-col items-center min-h-screen  justify-center  gap-4">
      
      {/* Glowing Background Orb */}
      <motion.div
        className="w-40 h-40 rounded-full bg-gradient-to-br mt-10 from-purple-500 via-blue-400 to-cyan-400 shadow-[0_0_60px_20px_rgba(0,255,255,0.2)] relative flex items-center justify-center"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: 'easeInOut',
        }}
      >
        <motion.span
          className="text-3xl font-bold text-purple-600 z-10"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: 'easeInOut',
          }}
        >
          N
        </motion.span>
      </motion.div>

      {/* Gradient Text */}
      <motion.h1
        className="text-4xl md:text-6xl font-orbitron font-bold bg-gradient-to-r from-blue-400 via-white to-purple-300 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        NeuroChain X
      </motion.h1>
      <GlowingButtons />
      <NeuroChainCards />
    </div>

     </>
  );
}
