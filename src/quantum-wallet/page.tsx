"use client";

import { motion } from "framer-motion";
import Cards from "@/quantum-wallet/components/card/page";
import QuantumWallet from "@/quantum-wallet/components/wellet/page";

export default function ContractsPage() {
  return (
    <div className="min-h-screen w-full px-4 sm:px-6 md:px-10 py-14 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* 🧠 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-lg"
      >
        
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 sm:mt-6 text-center text-white/60 text-base sm:text-lg max-w-3xl mx-auto"
      >
        Next-generation biometric security with neural authentication and decentralized intelligence.
      </motion.p>

      {/* ⚙️ Cards & Wallet Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 sm:mt-16 grid gap-12 w-full max-w-6xl mx-auto"
      >
        <Cards />
        <QuantumWallet />
      </motion.div>
    </div>
  );
}
