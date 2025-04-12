"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const cardVariants = {
  initial: { opacity: 0, scale: 0.95, rotateX: 15, rotateY: -10 },
  animate: { opacity: 1, scale: 1, rotateX: 0, rotateY: 0 },
};

export default function NeuroChainCards() {
  const cards = [
    {
      title: "Total Value Locked",
      value: "$0",
      change: "+15.7% in 24h",
      color: "from-cyan-500 via-purple-600 to-pink-500",
    },
    {
      title: "Neural Nodes",
      value: "0",
      change: "+307 in 24h",
      color: "from-purple-600 via-blue-500 to-cyan-400",
    },
    {
      title: "Quantum APY",
      value: "0%",
      change: "Yield-optimized",
      color: "from-emerald-400 via-cyan-500 to-blue-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-6 max-w-7xl mx-auto">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          whileHover={{
            scale: 1.07,
            rotateX: 3,
            rotateY: -4,
            boxShadow: "0 0 25px rgba(255, 255, 255, 255)",
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className={cn(
            "rounded-2xl p-6 bg-gradient-to-br text-white shadow-[0_0_30px_rgba(0,255,255,0.2)] backdrop-blur-md transform-gpu transition-transform duration-500",
            card.color
          )}
        >
          <h3 className="text-xl font-bold drop-shadow-sm mb-2 tracking-wide uppercase">
            {card.title}
          </h3>
          <div className="text-5xl font-extrabold text-white drop-shadow-lg mb-1">
            {card.value}
          </div>
          <p className="text-sm font-medium text-cyan-100 tracking-tight">
            {card.change}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
