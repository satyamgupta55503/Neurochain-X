"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/yield-farming/components/ui/input";
import { cn } from "@/lib/utils";

const pools = [
  {
    name: "Neural Staking",
    type: "Single Asset",
    apy: "42.8%",
    tvl: "$43.2M",
    risk: "Low",
    tag: "Featured",
    icon: "NCX",
    category: "single",
  },
  {
    name: "Quantum LP",
    type: "Liquidity Pool",
    apy: "68.2%",
    tvl: "$29.7M",
    risk: "Medium",
    icon: "NCX/ETH",
    category: "liquidity",
  },
  {
    name: "Synthetic BTC",
    type: "Synthetic Asset",
    apy: "92.5%",
    tvl: "$18.5M",
    risk: "High",
    icon: "nBTC",
    category: "synthetic",
  },
];

const categories = [
  { label: "All Pools", value: "all" },
  { label: "Liquidity", value: "liquidity" },
  { label: "Single Asset", value: "single" },
  { label: "Synthetic", value: "synthetic" },
];

export default function StakingPools() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredPools = pools.filter(
    (pool) =>
      (activeCategory === "all" || pool.category === activeCategory) &&
      pool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <div className="rounded-xl border border-cyan-400/40 bg-gradient-to-br from-[#0e0e15] to-[#10121e] shadow-2xl">
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Staking Pools</h2>
            <span className="text-teal-400 font-medium">• Neural Optimized</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  "px-4 py-1.5 rounded-lg text-sm font-semibold",
                  activeCategory === cat.value
                    ? "bg-teal-500 text-white shadow"
                    : "bg-[#1a1c24] text-gray-300"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative mt-4">
            <Input
              placeholder="Search pools..."
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
              className="bg-[#14161d] border border-gray-700 text-white placeholder-gray-500"
            />
          </div>

          <div className="space-y-6 pt-4">
            {filteredPools.map((pool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-xl bg-[#0c0e13] px-6 py-5 shadow-xl border border-cyan-400/10 hover:border-cyan-500/30 transition-all duration-500"
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div className="text-lg font-bold text-cyan-300">{pool.icon}</div>
                      <div className="text-white font-semibold text-base">
                        {pool.name}
                      </div>
                      <div className="text-sm text-gray-400">{pool.type}</div>
                    </div>
                  </div>

                  {pool.tag && (
                    <div className="bg-teal-600 px-3 py-0.5 rounded-full text-sm font-medium text-white">
                      {pool.tag}
                    </div>
                  )}
                </div>

                <div className="flex justify-between mt-4 text-sm font-medium">
                  <div className="text-left">
                    <div className="text-gray-400">APY</div>
                    <div className="text-xl text-green-400 font-bold">{pool.apy}</div>
                  </div>
                  <div className="text-left">
                    <div className="text-gray-400">TVL</div>
                    <div className="text-xl text-cyan-300 font-bold">{pool.tvl}</div>
                  </div>
                  <div className="text-left">
                    <div className="text-gray-400">Risk</div>
                    <div
                      className={cn(
                        "text-sm font-semibold",
                        pool.risk === "Low"
                          ? "text-green-400"
                          : pool.risk === "Medium"
                          ? "text-yellow-400"
                          : "text-red-500"
                      )}
                    >
                      {pool.risk}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
