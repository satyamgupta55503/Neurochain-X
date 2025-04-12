"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp, FaArrowDown, FaExchangeAlt } from "react-icons/fa";

const transactions = [
  { type: "Received", asset: "NCX", amount: "+42.5 NCX", time: "2 hours ago", iconType: "up", color: "text-green-400" },
  { type: "Sent", asset: "ETH", amount: "-2.35 ETH", time: "5 hours ago", iconType: "down", color: "text-red-400" },
  { type: "Swapped", asset: "BTC", amount: "0.15 → 312 NCX", time: "Yesterday", iconType: "swap", color: "text-purple-400" },
];

const renderIcon = (type: string, color: string) => {
  const classes = `text-xl ${color}`;
  if (type === "up") return <FaArrowUp className={classes} />;
  if (type === "down") return <FaArrowDown className={classes} />;
  return <FaExchangeAlt className={classes} />;
};

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

const NeuralTransactionsCard = () => {
  return (
    <motion.div
      className="p-6 bg-gray-900 border border-gray-700 rounded-xl shadow-lg w-full relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br  to-blue-500 opacity-20 blur-3xl"
        initial={{ scale: 1.2, rotate: 180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Title */}
      <motion.h2 className="text-xl font-semibold text-white mb-4 relative z-10" variants={itemVariants}>
        Neural Transactions
      </motion.h2>

      {/* Transaction List */}
      <motion.div className="space-y-4 relative z-10">
        {transactions.map((tx, index) => (
          <motion.div
            key={index}
            className="flex justify-between items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-md"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              >
                {renderIcon(tx.iconType, tx.color)}
              </motion.div>
              <div>
                <p className="text-white font-medium">{tx.type} {tx.asset}</p>
                <p className="text-gray-400 text-sm">{tx.time}</p>
              </div>
            </div>
            <motion.span className={`font-semibold ${tx.color}`} variants={itemVariants}>
              {tx.amount}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.button
        className="mt-4 w-full py-2 border border-purple-500 text-amber-600 text- bold rounded-lg hover:bg-purple-100 hover:text-white transition-all duration-300"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        View All Transactions
      </motion.button>
    </motion.div>
  );
};

export default NeuralTransactionsCard;
