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
    <div className=" bg-gradient-to-b  from-[#1a1a1a] to-[#14141f]">
      <YieldFarmingHeader />
      <StakingPools />
      <div className="flex mt-4  bg-gradient-to-b from-[#1a1a1a] to-[#14141f]">
        <StakingPoolCard />
        <YourStaking />
      </div>
      <NeuralStatsPanel />
      <NeuralAutoCompound />
    </div>
  );
};

export default YieldFarming;
