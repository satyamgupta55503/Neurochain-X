"use client";

import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function QuantumWallet() {
  const balance = "4,235.92 NCX";

  const assets = [
    { name: "NCX", amount: "3,427.58", color: "bg-purple-500" },
    { name: "ETH", amount: "28.35", color: "bg-blue-500" },
    { name: "BTC", amount: "1.78", color: "bg-orange-500" },
  ];

  return (
    <div className="flex items-center justify-center w-full px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-md p-6 rounded-xl shadow-lg border border-cyan-400/40 text-white bg-gray-900 backdrop-blur-lg overflow-hidden"
      >
        {/* Animated Gradient Background */}
        <motion.div
          initial={{ rotate: 0, opacity: 0.3 }}
          animate={{ rotate: 180, opacity: 1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 blur-3xl opacity-20 rounded-xl"
        />

        {/* Foreground Content */}
        <div className="relative z-10 space-y-4">
          <motion.div
            variants={itemVariants}
            className="absolute top-4 right-4 text-green-400 flex items-center text-sm"
          >
            ● Secured
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-xl font-semibold">
            Quantum Wallet
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-400">
            Total Balance
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-4xl font-bold leading-tight"
          >
            {balance}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-green-400 text-sm"
          >
            +3.8% from yesterday
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 mt-2"
          >
            {assets.map((asset) => (
              <motion.div
                key={asset.name}
                className="flex items-center bg-gray-800 px-3 py-1 rounded-full text-sm space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <span className={`w-2 h-2 rounded-full ${asset.color}`} />
                <span className="font-semibold">{asset.name}</span>
                <span className="text-gray-300">{asset.amount}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 py-2 text-lg font-semibold bg-cyan-400 text-black rounded-lg shadow-lg transition"
            >
              Send
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 py-2 text-lg font-semibold border border-cyan-400 text-cyan-400 rounded-lg shadow-lg transition"
            >
              Receive
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
