"use client";

import React, { useState } from "react";
import { Slider } from "@/ai-smart-contracts/components/ui/slider";
import { Button } from "@/ai-smart-contracts/components/ui/button";
import { Textarea } from "@/ai-smart-contracts/components/ui/textarea";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import ContractCard from "@/ai-smart-contracts/ContractCard";

// Removed the unused Badge import

const SmartContracts = () => {
  const [feeStructure, setFeeStructure] = useState(0.25);
  const [slippage, setSlippage] = useState(0.5);
  const [learningRate, setLearningRate] = useState(0.15);
  const [security, setSecurity] = useState(1);
  const [deploying, setDeploying] = useState(false);

  const deployContract = async () => {
    setDeploying(true);
    toast.loading("Deploying contract...");
    await new Promise((res) => setTimeout(res, 2000));
    toast.dismiss();
    toast.success("Smart Contract Deployed!");
    setDeploying(false);
  };

  const saveTemplate = async () => {
    toast.success("Template saved!");
  };

  const templateList = [
    { name: "Neural DEX", label: "Popular", color: "purple" },
    { name: "Quantum Vault", label: "Safe", color: "green" },
    { name: "Flash Lender", label: "Efficient", color: "blue" },
    { name: "Perpetual Synth", label: "Advanced", color: "red" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b text-white p-6 font-sans">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl text-center text-cyan-400 font-bold"
      >
        AI Smart Contracts
      </motion.h1>
      <p className="text-center text-gray-400 mb-6">
        Deploy self-learning contracts with advanced neural algorithms
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Templates */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900 rounded-2xl p-4 shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Templates</h2>
          {templateList.map((t, i) => (
            <motion.div
              key={i}
              className="mb-4 p-3 border border-gray-700 rounded-lg"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-between items-center">
                <p className="text-cyan-300">{t.name}</p>
                <div className={`text-white px-2 py-1 rounded`} style={{ backgroundColor: t.color }}>
                  <span>{t.label}</span>
                </div>
              </div>
              <p className="text-xs text-gray-400">Complexity: Medium</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Builder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-900 rounded-2xl p-4 shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Neural DEX Builder</h2>
          <div className="space-y-4">
            <label>Fee Structure ({feeStructure}%)</label>
            <Slider value={[feeStructure]} onValueChange={([v]) => setFeeStructure(v)} />

            <label>Slippage Tolerance ({slippage}%)</label>
            <Slider value={[slippage]} onValueChange={([v]) => setSlippage(v)} />

            <label>Learning Rate ({learningRate})</label>
            <Slider value={[learningRate]} onValueChange={([v]) => setLearningRate(v)} />

            <label>Security Level ({security})</label>
            <Slider value={[security]} onValueChange={([v]) => setSecurity(v)} />

            <Textarea
              value={`// Auto-generated contract...`}
              onChange={() => {}}
              placeholder="Enter contract details"
            />

            <div className="flex gap-4">
              <button onClick={deployContract} disabled={deploying} className="btn">
                {deploying ? "Deploying..." : "Deploy Contract"}
              </button>
              <Button onClick={saveTemplate}>Save Template</Button>
            </div>
          </div>
        </motion.div>

        {/* Insights */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-900 rounded-2xl p-4 shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">AI Insights</h2>
          <p>
            Neural Efficiency: <span className="text-green-400 font-bold">94%</span>
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li className="bg-gray-800 p-2 rounded">
              Increase learning rate to 0.18 for optimal adaptability
            </li>
            <li className="bg-gray-800 p-2 rounded">
              Add USDC to increase stable pair liquidity
            </li>
            <li className="bg-gray-800 p-2 rounded">
              Enable flash loan functionality
            </li>
          </ul>
          <div className="mt-6">
            <p>
              Gas Optimization: <span className="text-green-400 font-bold">-42%</span>
            </p>
            <p className="text-sm">
              Standard: 142,540 gas | Neural: 62,573 gas
            </p>
          </div>
        </motion.div>
      </div>
      <ContractCard />
    </div>
  );
};

export default SmartContracts;
