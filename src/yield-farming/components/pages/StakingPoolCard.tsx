'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Slider } from '@/yield-farming/components/ui/slider';
import { Input } from '@/yield-farming/components/ui/input';
import { Button } from '@/yield-farming/components/ui/button';
import { Zap } from 'lucide-react';

export default function StakingPoolCard() {
  const [lockDays, setLockDays] = useState(30);
  const [amount, setAmount] = useState('0.0');
  const estimatedReward = 8.56;
  const estimatedUsd = 368.25;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="bg-gradient-to-br from-[#0b0f14] to-[#111827] border mt-6 border-cyan-500/30 p-6 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.15)] text-white w-full max-w-xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="h-12 w-12 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-300 font-bold text-sm">NCX</div>
        <div>
          <h2 className="text-xl font-bold leading-tight">Neural Staking</h2>
          <p className="text-sm text-gray-400">Self-optimizing single asset staking</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <CardStat title="Current APY" value="42.8%" sub="+2.4%" />
        <CardStat title="TVL" value="$43.2M" />
        <CardStat title="Lock Period" value="7-90 days" />
        <CardStat title="Neural Score" value="94/100" />
      </div>

      <div className="mb-6">
        <h3 className="text-sm mb-1">Staking Amount</h3>
        <div className="flex items-center bg-black rounded-lg px-4 py-2">
          <Input
            type="number"
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
            className="flex-1 bg-transparent text-white border-none outline-none"
          />
          <span className="text-sm text-gray-400 mr-2">NCX</span>
          <button className="text-xs text-cyan-400 hover:underline">MAX</button>
        </div>
        <p className="text-xs text-gray-500 mt-1">Your Balance: 247.58 NCX</p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-1">
          <span>Lock Period</span>
          <span className="text-cyan-400 font-semibold">{lockDays} Days</span>
        </div>
        <Slider
          min={7}
          max={90}
          value={[lockDays]}
          onValueChange={(val: number[]) => setLockDays(val[0])}
          className="bg-gradient-to-r from-cyan-400 to-purple-500"
        />
      </div>

      <div className="bg-black rounded-xl border border-cyan-500/20 p-4 mb-6">
        <p className="text-sm text-gray-400">Estimated Reward</p>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xl font-semibold text-white">+{estimatedReward} NCX</span>
          <span className="text-sm text-emerald-400">≈ ${estimatedUsd}</span>
        </div>
        <p className="text-xs text-green-300 mt-1">AI Prediction</p>
      </div>

      <Button className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-3 text-base rounded-xl flex items-center justify-center gap-2">
        <Zap className="w-5 h-5" /> Stake NCX
      </Button>
    </motion.div>
  );
}

function CardStat({ title, value, sub }: { title: string; value: string; sub?: string }) {
  return (
    <div className="bg-black rounded-lg p-4 shadow-inner border border-cyan-400/20">
      <p className="text-xs text-gray-400 mb-1">{title}</p>
      <div className="text-lg font-bold text-cyan-300 flex items-center gap-1">
        {value} {sub && <span className="text-sm text-green-400">{sub}</span>}
      </div>
    </div>
  );
}
