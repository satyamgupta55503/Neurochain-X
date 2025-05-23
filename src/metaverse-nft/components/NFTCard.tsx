"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image from next/image
import AnimatedOrb from "@/metaverse-nft/animations/AnimatedOrb";

type NFTCardProps = {
  title: string;
  edition: string;
  currentBid: string;
  imageSrc: string;
  onBid: () => void;
  onView3D: () => void;
};

const NFTCard: React.FC<NFTCardProps> = ({
  title,
  edition,
  currentBid,
  imageSrc,
  onBid,
  onView3D,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="bg-[#0f0f0f] border border-cyan-500/30 p-6 rounded-2xl w-full max-w-sm shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 backdrop-blur-xl relative"
    >
      {/* Displaying the NFT image */}
      <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
        <Image
          src={imageSrc}
          alt={title}
          width={500} // Provide width
          height={300} // Provide height
          className="object-cover w-full h-full"
        />
      </div>

      <div className="mb-4">
        <AnimatedOrb />
      </div>

      <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
      <p className="text-cyan-300 text-sm mb-2">{edition}</p>

      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-400">Current Bid</span>
        <span className="text-cyan-400 font-semibold">{currentBid}</span>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBid}
          className="w-full py-2 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
        >
          Place Bid
        </button>
        <button
          onClick={onView3D}
          className="px-4 py-2 rounded-lg border border-cyan-500 text-cyan-300 hover:bg-cyan-800/30 transition"
        >
          View in 3D
        </button>
      </div>
    </motion.div>
  );
};

export default NFTCard;
