"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";
import { SiNeovim } from "react-icons/si";

const authSteps = [
  { label: "Iris Scan", icon: <MdOutlineRemoveRedEye size={24} /> },
  { label: "Neural Sync", icon: <SiNeovim size={24} /> },
  { label: "Quantum Key", icon: <FaEthereum size={24} /> }
];

const balances = [
  {
    symbol: "NCX",
    name: "NeuroChain",
    balance: "3,427.58",
    value: "$147,403",
    tag: "Native",
    color: "text-cyan-400"
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    balance: "28.35",
    value: "$36,855",
    tag: "Bridge",
    color: "text-purple-400"
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    balance: "1.78",
    value: "$43,171",
    tag: "Bridge",
    color: "text-yellow-400"
  }
];

export default function QuantumWallet() {
  const [authenticating, setAuthenticating] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuth = () => {
    setAuthenticating(true);
    setTimeout(() => {
      setAuthenticated(true);
      setAuthenticating(false);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white p-4">
      <div className="mx-auto border border-white/20 p-6 rounded-2xl bg-black/30 backdrop-blur-lg shadow-xl">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 3 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-5xl text-center mb-10 mt-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-lg"
        >
          Quantum Wallet
        </motion.h1>

        {/* Authentication Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-4 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          {authSteps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`p-4 border border-white/10 rounded-xl flex items-center gap-4 transition-all duration-300 ${
                authenticated ? "bg-green-900/20" : "bg-black/40"
              }`}
            >
              <div className="text-cyan-400">{step.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{step.label}</h3>
                <p className="text-sm text-purple-300">Neural Pattern</p>
              </div>
              {authenticated && <FiCheckCircle className="text-green-400 ml-auto" size={20} />}
            </motion.div>
          ))}
          <div className="mt-6 flex justify-center w-full">
            <button
              onClick={handleAuth}
              className="px-6 py-2 bg-cyan-400 text-black font-semibold rounded-xl shadow-md hover:bg-cyan-300 transition-all duration-300 w-full sm:w-auto"
              disabled={authenticating}
            >
              {authenticating ? "Authenticating..." : "Authenticate"}
            </button>
          </div>
        </motion.div>

        {/* Wallet Balance Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-6 justify-center"
        >
          {balances.map((bal, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-[#0f0f0f] p-5 rounded-xl border border-white/10 shadow-md w-full sm:w-80"
            >
              <div className="flex justify-between items-center mb-4">
                <span className={`${bal.color} font-bold text-lg`}>{bal.symbol}</span>
                <span className="text-xs text-white/60">{bal.tag}</span>
              </div>
              <h2 className="text-2xl font-bold mb-1">{bal.balance}</h2>
              <p className="text-sm text-white/40 mb-4">≈ {bal.value}</p>
              <div className="flex gap-3">
                <button className="w-full px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm">
                  Send
                </button>
                <button className="w-full px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm">
                  Receive
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[{ label: "Swap", icon: "↔" }, { label: "Stake", icon: "$" }, { label: "NFTs", icon: "🖼️" }].map(
            (action, i) => (
              <button
                key={i}
                className="w-full py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-lg font-semibold flex items-center justify-center gap-3"
              >
                {action.icon} {action.label}
              </button>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
