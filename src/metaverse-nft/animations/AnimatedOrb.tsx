"use client";

import { motion } from "framer-motion";

export default function AnimatedOrb() {
  return (
    <div className="flex items-center justify-center w-40 h-40 mb-19 bg-transparent perspective p-2">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotateY: [0, 180, 360],
          rotateX: [0, 90, 0],
          boxShadow: [
            "0 0 12px 3px rgba(0, 255, 255, 0.2)",
            "0 0 24px 8px rgba(140, 80, 255, 0.35)",
            "0 0 12px 3px rgba(0, 255, 255, 0.2)",
          ],
        }}
        whileHover={{
          scale: 1.15,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          rotateZ: 10,
        }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="relative rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 opacity-95 shadow-xl transform-style-preserve-3d"
      >
        {/* Inner Orbiting Rings */}
        <motion.div
          className="absolute inset-0 m-auto rounded-full w-28 h-28 border border-cyan-400/40"
          animate={{ rotateZ: [0, 360] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 m-auto rounded-full w-32 h-32 border border-purple-500/30"
          animate={{ rotateZ: [360, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 m-auto rounded-full w-36 h-36 border border-teal-300/20"
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
