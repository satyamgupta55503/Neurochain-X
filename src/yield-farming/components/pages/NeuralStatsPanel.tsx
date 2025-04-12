'use client';

import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Card } from '@/yield-farming/components/ui/card';
import { Progress } from '@/yield-farming/components/ui/progress';

const CardContainer = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className="rounded-2xl p-5 bg-gradient-to-br from-[#0a0f24]/80 via-[#0c102e]/90 to-[#000000]/80 border border-white/10 shadow-[0_0_25px_rgba(0,255,255,0.07),_0_0_60px_rgba(100,0,255,0.05)] backdrop-blur-xl"
  >
    {children}
  </motion.div>
);

export default function NeuralStatsPanel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 w-full max-w-7xl mx-auto">
      
      {/* 🧠 Neural Network Stats */}
      <CardContainer>
        <h2 className="text-white text-xl font-semibold mb-4">Neural Network Stats</h2>

        <div className="text-sm text-gray-400">Total Stakers</div>
        <div className="text-2xl font-bold text-cyan-400">184,382</div>

        <div className="text-sm text-gray-400 mt-4">Rewards Distributed</div>
        <div className="text-2xl font-bold text-cyan-300">43.8M NCX</div>

        <div className="mt-6">
          <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
            <span>Network Health</span>
            <span className="text-white font-medium">Excellent</span>
          </div>
          <Progress value={94} className="h-2 bg-gradient-to-r from-cyan-400 to-purple-600" />
        </div>

        <div className="mt-5 p-3 bg-black/40 rounded-xl flex items-center gap-3 shadow-inner shadow-cyan-900/20">
          <div className="bg-cyan-500/30 p-2 rounded-full">
            <img src="/icons/lock.svg" alt="lock" className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm text-gray-300">Total Value Locked</div>
            <div className="text-lg font-semibold text-emerald-300">$238.4M</div>
          </div>
        </div>
      </CardContainer>

      {/* 🎁 Rewards Overview */}
      <CardContainer>
        <h2 className="text-white text-xl font-semibold mb-4">Rewards Overview</h2>

        <div className="text-sm text-gray-400">Daily Rewards</div>
        <div className="text-2xl font-bold text-purple-400">247,000 NCX</div>
        <div className="text-xs text-gray-500">≈ $10.6 million daily</div>

        <div className="mt-4 flex gap-4">
          {[
            { label: 'Staking', value: '45%' },
            { label: 'Liquidity', value: '35%' },
            { label: 'Synthetic', value: '20%' },
          ].map(({ label, value }) => (
            <div key={label} className="text-sm text-white bg-black/30 rounded-lg p-3 w-full text-center">
              <span className="block text-xs text-gray-400">{label}</span>
              <span className="font-medium text-purple-300">{value}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-black/40 p-3 rounded-xl flex items-center justify-between shadow-inner shadow-purple-800/20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
            <span className="text-sm text-gray-300">Emission Rate</span>
          </div>
          <span className="text-sm text-purple-400 font-semibold">2.5% Annual</span>
        </div>
      </CardContainer>

      {/* 📊 Yield Comparison */}
      <CardContainer>
        <h2 className="text-white text-xl font-semibold mb-4">Yield Comparison</h2>

        <ul className="space-y-3">
          {[
            { name: 'NeuroChain X', icon: '/icons/ncx.svg', value: '42.8%' },
            { name: 'Ethereum 2.0', icon: '/icons/eth.svg', value: '4.5%' },
            { name: 'Traditional Finance', icon: '/icons/tf.svg', value: '2.1%' },
            { name: 'NCX Advantage Ratio', icon: '/icons/ratio.svg', value: '9.5x' },
          ].map((item, i) => (
            <li key={i} className="flex justify-between items-center bg-black/30 p-3 rounded-xl shadow-inner shadow-cyan-800/10">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-6 h-6" />
                <span className="text-white">{item.name}</span>
              </div>
              <span className="font-semibold text-cyan-300">{item.value}</span>
            </li>
          ))}
        </ul>
      </CardContainer>
    </div>
  );
}
