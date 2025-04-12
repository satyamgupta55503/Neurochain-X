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

/*************  ✨ Codeium Command ⭐  *************/
/**
 * MarketDataCard displays the market data for NCX, including current price,
 * 24-hour change, and volume. It allows users to switch between different
/******  a8d37eae-8959-4c80-b7a0-3c9610e2995e  *******/const MarketDataCard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24H");
  const timeframes = ["24H", "7D", "1M"];

  return (
    <div className="flex items-center justify-center w-full px-4">
      {/* Card Container */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-md p-6 rounded-xl shadow-lg border border-cyan-400/40 text-white bg-gray-900 backdrop-blur-xl overflow-hidden"
      >
        {/* Animated Background Gradient */}
        <motion.div
          initial={{ rotate: 0, opacity: 0.4 }}
          animate={{ rotate: 180, opacity: 1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 blur-3xl opacity-20 rounded-xl"
        />

        <div className="relative z-10">
          {/* Header */}
          <motion.h2
            className="text-xl font-semibold mb-4"
            variants={itemVariants}
          >
            NCX Market Data
          </motion.h2>

          {/* Timeframe Switch Buttons */}
          <motion.div
            className="flex space-x-3 mb-6"
            variants={itemVariants}
          >
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

          {/* Market Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            variants={cardVariants}
          >
            <motion.div variants={itemVariants}>
              <p className="text-gray-400 text-sm">Current Price</p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-2xl font-bold"
              >
                $42.97
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-400 text-sm">24h Change</p>
              <p className="text-green-400 text-lg font-bold">+5.34%</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-400 text-sm">Volume</p>
              <p className="text-lg font-bold">$895M</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default MarketDataCard;
