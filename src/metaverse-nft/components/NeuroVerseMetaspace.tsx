import React from "react";
import { motion } from "framer-motion";

export default function NeuroVerseMetaspace() {
  return (
    <main className="flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-[#090918] ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl rounded-2xl border p-5 border-[#6d28d9] bg-gradient-to-br from-black/60 to-zinc-900/60 shadow-2xl text-white grid md:grid-cols-2 gap-6"
      >
        {/* Left Side */}
        <div className="flex flex-col gap-6 p-5">
          <h1 className="text-3xl font-extrabold text-white">NeuroVerse Metaspace</h1>
          <p className="text-gray-400 text-sm">
            Enter the neural metaverse where your digital assets come to life. Explore virtual galleries,
            participate in immersive experiences, and connect with creators in a decentralized reality.
          </p>
          <div className="flex gap-4">
            <div className="bg-zinc-900 rounded-xl p-4 flex-1">
              <p className="text-gray-500 text-xs mb-1">Active Users</p>
              <p className="text-teal-400 font-semibold text-xl">14,382</p>
            </div>
            <div className="bg-zinc-900 rounded-xl p-4 flex-1">
              <p className="text-gray-500 text-xs mb-1">Spaces</p>
              <p className="text-purple-400 font-semibold text-xl">386</p>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-xl p-4">
            <p className="text-gray-500 text-xs mb-1">Featured Event</p>
            <p className="text-white font-medium">Neural Art Auction</p>
            <p className="text-gray-400 text-xs">By Genesis Gallery • Central District</p>
            <span className="text-red-500 text-xs mt-1 inline-block">Live Now</span>
          </div>
          <div className="flex gap-4">
            <button className="bg-[#a855f7] hover:bg-[#9333ea] transition-all duration-200 text-white font-semibold px-6 py-3 rounded-xl shadow-lg">
              ⚡ Enter Metaverse
            </button>
            <button className="border border-[#a855f7] hover:bg-[#a855f7]/10 transition-all duration-200 text-[#a855f7] font-semibold px-6 py-3 rounded-xl">
              Create Space
            </button>
          </div>
        </div>

        {/* Right Side - Gateway Animation */}
        <div className="relative h-72 w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#1f1f2a] to-[#14141c] p-4 flex items-center justify-center">
          <motion.div
            className="relative w-40 h-40 rounded-full bg-gradient-to-tr from-teal-400 to-purple-600 blur-lg"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 360, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />

          <div className="absolute bottom-4 left-4 text-white text-xs">
            <p className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-purple-500 rounded-full"></span>
              Neural Gateway <span className="text-teal-400 ml-1">Connected</span>
            </p>
          </div>
          <div className="absolute bottom-4 right-4 text-white text-xs bg-zinc-800 rounded-md px-2 py-1">
            Ping <strong>8ms</strong>
          </div>
        </div>
      </motion.div>
    </main>
  );
}