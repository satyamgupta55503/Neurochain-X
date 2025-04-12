"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; 

export default function Cards() {
  return (
    <div className="space-y-10">
      {/* 🔐 Security Status Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl p-6 border border-purple-800/50 bg/90 shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-2 text-white">Security Status</h2>

        <p className="text-sm text-gray-400 mb-2">Quantum Security Score</p>
        <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "98%" }}
            transition={{ duration: 1 }}
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
          />
        </div>
        <p className="text-sm text-green-400 mb-6">98/100</p>

        <div className="space-y-4">
          {[
            {
              title: "Multi-Layer Encryption",
              subtitle: "256-bit quantum resistant",
              color: "text-cyan-400",
              icon: "🛡️",
            },
            {
              title: "Biometric Verification",
              subtitle: "Neural pattern matching",
              color: "text-purple-400",
              icon: "🧠",
            },
            {
              title: "Smart Contract Audit",
              subtitle: "AI-powered vulnerability detection",
              color: "text-blue-400",
              icon: "📄",
            },
            {
              title: "Neural Firewall",
              subtitle: "Adaptive threat protection",
              color: "text-pink-400",
              icon: "🧬",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-start gap-2">
              <div className="flex gap-8 items-start">
                <div className={`text-xl ${item.color}`}>{item.icon}</div>
                <div>
                  <p className="text-sm text-white font-medium">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.subtitle}</p>
                </div>
              </div>
              <CheckCircle className="text-green-400 w-5 h-5 mt-1" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* 📜 Recent Activity Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl p-6 border border-purple-800/50 bg/90  shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4 text-white">Recent Activity</h2>
        <div className="space-y-5 text-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white">Authentication Successful</p>
              <p className="text-gray-400 text-xs">Biometric verification passed</p>
            </div>
            <p className="text-xs text-gray-500">3 min ago</p>
          </div>

          <div className="flex justify-between items-center bg-zinc-900 px-4 py-2 rounded-lg">
            <div>
              <p className="text-cyan-400 font-medium">+45.3 NCX</p>
              <p className="text-xs text-gray-400">From: Neural Pool</p>
            </div>
            <p className="text-xs text-gray-500">1h ago</p>
          </div>

          <div className="flex justify-between items-start">
            <div>
              <p className="text-yellow-300 font-medium">Swapped BTC to NCX</p>
              <p className="text-xs text-gray-400">0.15 → 312 NCX</p>
              <p className="text-xs text-gray-500">Via Quantum Bridge</p>
            </div>
            <p className="text-xs text-gray-500">5h ago</p>
          </div>

          <div className="flex justify-between items-start">
            <div>
              <p className="text-purple-400 font-medium">Smart Contract Signed</p>
              <p className="text-xs text-gray-400">Staking Contract #2403</p>
            </div>
            <p className="text-xs text-purple-500">200 NCX Staked</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 w-full text-purple-400 text-sm font-semibold border border-purple-500 rounded-xl py-2"
        >
          View All Activity
        </motion.button>
      </motion.div>
    </div>
  );
}
