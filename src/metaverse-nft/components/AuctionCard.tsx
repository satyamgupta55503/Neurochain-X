import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Share2 } from "lucide-react";

export default function AuctionCard() {
  const [bidAmount, setBidAmount] = useState(15.0);

  const quickBids = [15.0, 16.0, 17.5, 20.0];
  const bidHistory = [
    { name: "QuantumAlpha.ncx", amount: 14.5, time: "2 hours ago", color: "text-blue-400" },
    { name: "MetaCollector.ncx", amount: 12.8, time: "5 hours ago", color: "text-purple-400" },
  ];

  return (
    <div className="bg-gradient-to-br from-[#0d0c1c] to-[#0a0f1f]  text-white font-sans">
      <div className="max-w-6xl mx-auto rounded-2xl border border-cyan-500/10 bg-[#0f1626] shadow-2xl grid md:grid-cols-2 gap-6">
        {/* Left: Metadata */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#141b29] p-4 rounded-xl">
              <p className="text-sm text-gray-400">Creator</p>
              <p className="font-semibold text-purple-500">NeuralArtist.eth</p>
            </div>
            <div className="bg-[#141b29] p-4 rounded-xl">
              <p className="text-sm text-gray-400">Owner</p>
              <p className="font-semibold text-cyan-400">MetaCollector.ncx</p>
            </div>
            <div className="bg-[#141b29] p-4 rounded-xl">
              <p className="text-sm text-gray-400">Collection</p>
              <p className="font-semibold">Neural Artifacts</p>
            </div>
            <div className="bg-[#141b29] p-4 rounded-xl">
              <p className="text-sm text-gray-400">Minted</p>
              <p className="font-semibold">2 days ago</p>
            </div>
          </div>
        </div>

        {/* Right: Auction Info */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Neural Genesis #7</h2>
            <span className="text-green-400 text-sm">● Live Auction</span>
          </div>
          <p className="text-gray-400 text-sm">
            A one-of-a-kind holographic neural artwork that evolves based on viewer interaction. Created using quantum
            algorithms and neural network training on 50 years of digital art history.
          </p>

          <div className="bg-[#141b29] rounded-xl p-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Current Bid</span>
              <span className="text-right font-bold text-cyan-300">14.5 NCX</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-gray-400">Auction Ends In</span>
              <span className="text-right text-white font-mono">07 : 38 : 30</span>
            </div>
            <div className="h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-transparent mt-3 rounded-full"></div>
            <p className="text-xs text-right text-gray-500 mt-1">8 bids placed</p>
          </div>

          <div className="bg-[#141b29] rounded-xl p-4">
            <h3 className="text-md font-semibold mb-2">Bid History</h3>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {bidHistory.map((bid, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className={`font-medium ${bid.color}`}>{bid.name}</span>
                  <span className="text-white">{bid.amount} NCX</span>
                  <span className="text-gray-400 text-xs">{bid.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(parseFloat(e.target.value))}
                className="bg-[#0f1a2d] text-white p-2 rounded-md w-full focus:outline-none focus:ring focus:ring-cyan-500"
              />
              <span className="text-cyan-400">NCX</span>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {quickBids.map((val, i) => (
                <button
                  key={i}
                  onClick={() => setBidAmount(val)}
                  className="bg-[#1a2639] text-white text-sm rounded-md p-2 hover:bg-cyan-700/30"
                >
                  {val.toFixed(1)} NCX
                </button>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="bg-cyan-400 text-black font-semibold w-full py-3 mt-2 rounded-xl shadow-xl hover:bg-cyan-300 transition"
            >
              ⚡ Place Bid
            </motion.button>

            <button className="w-full border border-cyan-400 text-cyan-400 py-3 rounded-xl hover:bg-cyan-400/10 flex justify-center items-center gap-2">
              Buy Now (30 NCX)
            </button>

            <div className="flex justify-end gap-2 mt-2">
              <button className="p-2 bg-[#141b29] rounded-full hover:bg-cyan-400/10">
                <Heart size={16} className="text-white" />
              </button>
              <button className="p-2 bg-[#141b29] rounded-full hover:bg-cyan-400/10">
                <Share2 size={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}