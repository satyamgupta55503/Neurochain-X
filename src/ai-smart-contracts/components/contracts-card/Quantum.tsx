"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const QuantumVaultCard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24H");
  const timeframes = ["24H", "7D", "1M"];

  const data = {
    name: "Quantum Vault v2",
    subtitle: "Self-optimizing vault",
    status: "Live",
    tvl: "$2.4M",
    apy: "14.8%",
    score: 92,
    feature: "Neural Learning",
    featureLabel: "Auto-optimizing",
    buttons: ["Interact", "Upgrade"],
  };

  return (
    <div className="flex items-center justify-center w-full px-4 py-10 sm:py-16 bg-black">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-cyan-400/30 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden"
      >
        {/* Animated Background Glow */}
        <motion.div
          initial={{ rotate: 0, opacity: 0.4 }}
          animate={{ rotate: 180, opacity: 1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 blur-3xl opacity-20 rounded-2xl"
        />

        <div className="relative z-10">
          {/* Title & Subtitle */}
          <motion.h2 className="text-2xl sm:text-3xl font-bold mb-2" variants={itemVariants}>
            {data.name}
          </motion.h2>
          <motion.p className="text-sm sm:text-base text-gray-400 mb-6" variants={itemVariants}>
            {data.subtitle}
          </motion.p>

          {/* Timeframe Buttons */}
          <motion.div className="flex flex-wrap gap-3 mb-6" variants={itemVariants}>
            {timeframes.map((time) => (
              <motion.button
                key={time}
                type="button"
                onClick={() => setSelectedTimeframe(time)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                  selectedTimeframe === time
                    ? "bg-cyan-500 text-black shadow-lg"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {time}
              </motion.button>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 gap-4 text-sm sm:text-base mb-6"
            variants={cardVariants}
          >
            <motion.div variants={itemVariants}>
              <p className="text-gray-400">Status</p>
              <p className="font-semibold">{data.status}</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-400">TVL</p>
              <p className="font-semibold">{data.tvl}</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-400">APY</p>
              <p className="font-semibold">{data.apy}</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-400">Score</p>
              <p className="font-semibold">{data.score}</p>
            </motion.div>
          </motion.div>

          {/* Feature */}
          <motion.div className="mb-6" variants={itemVariants}>
            <p className="text-gray-400 text-sm">{data.feature}</p>
            <p className="text-lg font-semibold text-cyan-400">{data.featureLabel}</p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            {data.buttons.map((btn) => (
              <button
                key={btn}
                type="button"
                className="px-5 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold shadow-md transition"
              >
                {btn}
              </button>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuantumVaultCard;
