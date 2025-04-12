"use client";

import YieldFarmingHeader from "@/yield-farming/components/YieldFarmingHeader";
import StakingPools from "@/yield-farming/components/pages/StakingPools";
import React from "react";
import StakingPoolCard from "./components/pages/StakingPoolCard";
import YourStaking from "./components/pages/YourStaking";
import NeuralStatsPanel from "@/yield-farming/components/pages/NeuralStatsPanel";
import NeuralAutoCompound from "@/yield-farming/components/pages/NeuralAutoCompound";

const YieldFarming = () => {
  return (
    <div className="bg-gradient-to-b from-[#1a1a1a] to-[#14141f] min-h-screen">
      {/* Header */}
      <YieldFarmingHeader />

      {/* Staking Pools Section */}
      <StakingPools />

      {/* Staking Pool Card and Your Staking Section */}
      <div className="flex flex-wrap gap-6 mt-4 bg-gradient-to-b from-[#1a1a1a] to-[#14141f] px-4 sm:px-6">
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <StakingPoolCard />
        </div>
        <div className="w-full sm:w-1/2 lg:w-2/3">
          <YourStaking />
        </div>
      </div>

      {/* Stats and Auto Compound Section */}
      <NeuralStatsPanel />
      <NeuralAutoCompound />
    </div>
  );
};

export default YieldFarming;
