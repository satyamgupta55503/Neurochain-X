"use client";

import { motion } from "framer-motion";
import { CheckCircle, Lock, Database, Eye } from "lucide-react";
import type { ReactNode } from "react";

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
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

const iconBounce = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  },
};

interface SecurityFeature {
  icon: ReactNode;
  title: string;
}

export default function NeuralSecurityCard() {
  const securityFeatures: SecurityFeature[] = [
    { icon: <Lock className="text-cyan-400" />, title: "Quantum Encrypted" },
    { icon: <Database className="text-purple-400" />, title: "Neural Backup" },
    { icon: <Eye className="text-blue-400" />, title: "Biometric Auth" },
  ];

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
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500 to-purple-500 blur-3xl opacity-20 rounded-xl"
        />

        {/* Foreground Content */}
        <div className="relative z-10">
          <motion.h2
            className="text-xl font-semibold mb-2"
            variants={itemVariants}
          >
            Neural Security
          </motion.h2>

          <motion.div className="flex justify-between" variants={itemVariants}>
            <p className="text-gray-400 text-sm">Security Score</p>
            <p className="text-green-400 font-semibold">98/100</p>
          </motion.div>

          <motion.div
            className="w-full h-2 bg-gray-700 rounded-full mt-2 overflow-hidden"
            variants={itemVariants}
          >
            <motion.div
              className="h-2 bg-gradient-to-r from-cyan-400 to-purple-500 w-[98%] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "98%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </motion.div>

          <motion.div className="mt-6 space-y-3" variants={cardVariants}>
            {securityFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                className="flex items-center justify-between p-3 bg-gray-800 rounded-lg shadow-md"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-3">
                  <motion.span
                    variants={iconBounce}
                    initial="initial"
                    animate="animate"
                  >
                    {feature.icon}
                  </motion.span>
                  <p className="text-white font-medium">{feature.title}</p>
                </div>
                <CheckCircle className="text-green-400" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
