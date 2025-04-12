import React from "react";
import { motion } from "framer-motion";
import NFTCard from "@/metaverse-nft/components/NFTCard";
import Cyber from "./components/Cyber";
import QuantumCard from "@/metaverse-nft/components/QuantumCube";
import AuctionCard from "@/metaverse-nft/components/AuctionCard";
import NeuroVerseMetaspace from "@/metaverse-nft/components/NeuroVerseMetaspace";
import ProposalCard from "@/metaverse-nft/components/ProposalCard";

const Metaverse = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen p-10">
      <div className="text-center mb-14">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400"
        >
          Metaverse & NFT Zone
        </motion.h1>
        <p className="text-gray-400 mt-4 text-sm md:text-base">
          Explore and trade next-generation digital assets in the neural metaverse
        </p>
      </div>

      <main className="flex justify-center flex-wrap gap-8">
        <NFTCard
          title="Neural Genesis"
          edition="Limited Edition · 7/10"
          currentBid="14.5 NCX"
          imageSrc="/images/neural-genesis.png"
          onBid={async () => alert("Bid placed!")}
          onView3D={() => alert("Opening 3D view...")}
        />
        <QuantumCard
          title="Quantum Cube"
          edition="Limited Edition · 1/10"
          currentBid="12.5 NCX"
          imageSrc="/images/quantum-cube.png"
          onBid={async () => {
            alert("Bid placed!");
            return Promise.resolve();
          }}
          onView3D={() => alert("Opening 3D view...")}
        />
        <Cyber
          title="Cyber Pyramid"
          edition="Limited Edition · 1/10"
          currentBid="10.0 NCX"
          imageSrc="/images/cyber-pyramid.png"
          onBid={() => alert("Bid placed!")}
          onView3D={() => alert("Opening 3D view...")}
        />
        <AuctionCard />
        <NeuroVerseMetaspace />
        <ProposalCard />
      </main>
    </div>
  );
};

export default Metaverse;
