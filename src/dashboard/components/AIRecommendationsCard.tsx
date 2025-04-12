"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Recommended AI investment opportunities
const opportunities = [
  {
    title: "Quantum Liquidity Pool",
    description: "Optimized by Neural Node",
    apy: "32% APY",
    risk: "Low Risk",
    riskColor: "text-green-400",
    borderColor: "border-cyan-400",
    bgColor: "bg-gray-900",
  },
  {
    title: "Neural Staking Node",
    description: "Self-optimizing contracts",
    apy: "47% APY",
    risk: "Medium Risk",
    riskColor: "text-yellow-400",
    borderColor: "border-purple-400",
    bgColor: "bg-gray-800",
  },
  {
    title: "Metaverse Yield Farm",
    description: "Synthetic asset collateral",
    apy: "82% APY",
    risk: "High Risk",
    riskColor: "text-red-400",
    borderColor: "border-pink-500",
    bgColor: "bg-gray-800",
  },
];

export default function AIRecommendationsCard() {
  return (
    <div className="flex items-center justify-center w-full px-4">
      <motion.div
        className="relative w-full max-w-md p-6 rounded-xl shadow-lg border border-cyan-400/40 text-white bg-gray-900 backdrop-blur-xl overflow-hidden"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background Gradient Animation */}
        <motion.div
          initial={{ rotate: 0, opacity: 0.3 }}
          animate={{ rotate: 180, opacity: 1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 blur-3xl opacity-20 rounded-xl"
        />

        {/* Header */}
        <motion.h2 className="text-lg font-semibold mb-4 relative z-10" variants={itemVariants}>
          AI Recommendations
        </motion.h2>

        {/* Opportunity Cards */}
        <motion.div className="space-y-3 relative z-10" variants={cardVariants}>
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              className={`p-4 rounded-lg shadow-md border ${opportunity.borderColor} ${opportunity.bgColor} hover:border-cyan-400 transition-all`}
              variants={itemVariants}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-md font-semibold">{opportunity.title}</h3>
                <span className="text-cyan-400 font-bold">{opportunity.apy}</span>
              </div>
              <p className="text-gray-400 text-sm">{opportunity.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className={`text-sm ${opportunity.riskColor}`}>● {opportunity.risk}</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-cyan-400 flex items-center gap-1 hover:underline"
                  aria-label={`Deploy ${opportunity.title}`}
                >
                  Deploy <ArrowRight size={14} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div className="mt-4 text-center relative z-10" variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 text-lg font-semibold border border-purple-400 text-purple-400 rounded-lg shadow-lg hover:bg-purple-500 hover:text-black transition-all"
          >
            View All Opportunities
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
