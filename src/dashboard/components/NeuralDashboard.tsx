"use client";

import { motion } from "framer-motion";
import React from "react";
import QuantumWallet from "@/dashboard/components/Wellet";
import MarketDataCard from "@/dashboard/components/MarketDataCard";
import NeuralSecurityCard from "@/dashboard/components/NeuralSecurityCard";
import NeuralTransactionsCard from "@/dashboard/components/NeuralTransactionsCard";
import NeuralAIAssistantCard from "@/dashboard/components/NeuralAIAssistantCard";
import AIRecommendationsCard from "@/dashboard/components/AIRecommendationsCard";

const NeuralDashboard = () => {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col  text-center ">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-lg"
        >
          Neural Dashboard
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-gray-400 mt-2 text-lg md:text-xl"
        >
          Advanced neural monitoring and control interface for your decentralized assets
        </motion.p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <QuantumWallet />
        <MarketDataCard />
        <NeuralSecurityCard />
        <NeuralTransactionsCard />
        <NeuralAIAssistantCard />
        <AIRecommendationsCard />
      </div>
    </>
  );
};

export default NeuralDashboard;
