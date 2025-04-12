"use client";

import { motion } from "framer-motion";
import Dex from "@/ai-smart-contracts/components/contracts-card/Dex";
import Lender from "@/ai-smart-contracts/components/contracts-card/Lender";
import Quantum from "@/ai-smart-contracts/components/contracts-card/Quantum";

export default function ContractsPage() {
  return (
    <div className="justify-center items-center text-white px-6 py-10">
      {/* 🧠 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 3 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="text-4xl md:text-5xl text-center mb-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-lg"
      >
        
      </motion.h1>

      {/* 🧩 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <Quantum />
        <Lender />
        <Dex />
      </div>
    </div>
  );
}
