import { motion } from "framer-motion";
import { Button } from "@/yield-farming/components/ui/button";
import { Progress } from "@/yield-farming/components/ui/progress";
import { Bolt } from "lucide-react";

export default function YourStaking() {
  return (
    <div className=" max-w-xl mx-auto p-10 rounded-2xl bg-gradient-to-br from-[#0e0e13] to-[#121726] shadow-[0_0_30px_#00f0ff33] border border-[#1a1f30]">
      {/* Header */}
      <div className="flex justify-between items-center text-white">
        <div>
          <h2 className="text-xl font-bold">Your Staking</h2>
          <span className="text-sm text-green-400">● Active</span>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="p-4 bg-[#141827] rounded-xl text-white">
          <p className="text-sm">Total Staked</p>
          <h3 className="text-2xl font-bold">423.5 NCX</h3>
          <p className="text-sm text-gray-400">≈ $18,230.55</p>
        </div>
        <div className="p-4 bg-[#141827] rounded-xl text-white">
          <p className="text-sm">Total Earnings</p>
          <h3 className="text-2xl font-bold text-cyan-400">62.8 NCX</h3>
          <p className="text-sm text-gray-400">≈ $2,704.38</p>
        </div>
      </div>

      {/* Active Position Card */}
      <div className="mt-8 p-4 bg-[#10131c] rounded-xl border border-[#1f273e]">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <h3 className="font-semibold">Neural Staking</h3>
            <p className="text-xs text-gray-400">90 days lock</p>
          </div>
          <span className="text-sm bg-green-500/10 text-green-400 px-2 py-1 rounded-full">Active</span>
        </div>
        <div className="mt-4 flex justify-between text-white text-sm">
          <div>
            <p>Staked</p>
            <p className="font-semibold">200 NCX</p>
          </div>
          <div>
            <p>APY</p>
            <p className="font-semibold">42.8%</p>
          </div>
          <div>
            <p>Earned</p>
            <p className="font-semibold">32.4 NCX</p>
          </div>
        </div>
        <div className="mt-4">
          <Progress value={53} />
          <p className="text-right text-xs text-gray-400 mt-1">42 days left</p>
        </div>
        <div className="mt-4 flex gap-2">
          <Button className="flex-1 bg-cyan-500 hover:bg-cyan-600">Harvest</Button>
          <Button className="flex-1 bg-gray-800 hover:bg-gray-700">Extend Lock</Button>
        </div>
      </div>

      {/* AI Insights */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="mt-8 p-4 bg-gradient-to-br from-[#0e0e15] to-[#1a2035] rounded-xl border border-[#262c41] shadow-[0_0_20px_#00f0ff22]"
      >
        <div className="flex items-center gap-2 text-purple-400 font-semibold">
          <Bolt size={16} className="text-purple-400" />
          Neural AI Insights
        </div>
        <p className="text-sm text-white mt-2">
          Based on market analysis and your staking history, our neural AI suggests the following optimization strategy:
        </p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-white">
          <li>
            <span className="text-green-400">Increase Neural Staking position</span> by 50-100 NCX for optimal returns
          </li>
          <li>
            <span className="text-green-400">Extend Quantum LP lock</span> to 60 days to maximize yield by +12.5%
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
