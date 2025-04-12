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

  // Data
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
    <div className="flex items-center justify-center w-full px-4">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-md p-6 rounded-xl shadow-lg border border-cyan-400/40 text-white bg-gray-900 backdrop-blur-xl overflow-hidden"
      >
        <motion.div
          initial={{ rotate: 0, opacity: 0.4 }}
          animate={{ rotate: 180, opacity: 1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 blur-3xl opacity-20 rounded-xl"
        />

        <div className="relative z-10">
          {/* Title & Subtitle */}
          <motion.h2 className="text-xl font-semibold mb-1" variants={itemVariants}>
            {data.name}
          </motion.h2>
          <motion.p className="text-sm text-gray-400 mb-4" variants={itemVariants}>
            {data.subtitle}
          </motion.p>

          {/* Timeframe Switch Buttons */}
          <motion.div className="flex space-x-3 mb-6" variants={itemVariants}>
            {timeframes.map((time) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={time}
                onClick={() => setSelectedTimeframe(time)}
                className={`px-3 py-1 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  selectedTimeframe === time
                    ? "bg-cyan-500 text-black shadow-md"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {time}
              </motion.button>
            ))}
          </motion.div>

          {/* Data Stats */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4" variants={cardVariants}>
            <motion.div variants={itemVariants}>
              <p className="text-gray-400 text-sm">Status</p>
              <p className="text-lg font-bold">{data.status}</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-400 text-sm">TVL</p>
              <p className="text-lg font-bold">{data.tvl}</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-400 text-sm">APY</p>
              <p className="text-lg font-bold">{data.apy}</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-400 text-sm">Score</p>
              <p className="text-lg font-bold">{data.score}</p>
            </motion.div>
          </motion.div>

          {/* Feature Info */}
          <motion.div className="mb-6" variants={itemVariants}>
            <p className="text-gray-400 text-sm">{data.feature}</p>
            <p className="text-lg font-semibold text-cyan-400">{data.featureLabel}</p>
          </motion.div>

          {/* Buttons */}
          <motion.div className="flex space-x-4" variants={itemVariants}>
            {data.buttons.map((btn) => (
              <button
                key={btn}
                className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-semibold shadow"
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
