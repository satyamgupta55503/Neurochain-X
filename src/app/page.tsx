'use client'

import React from 'react'
import { motion } from 'framer-motion'


import Navbar from '@/Navbar/page'
import NeuroChainLogo from '@/home/components/NeuroChain'
import NeuralDashboard from '@/dashboard/components/NeuralDashboard'
import SmartContracts from '@/quantum-wallet/page'
import Metaverse from '@/metaverse-nft/page'
import YieldFarming from '@/yield-farming/page'
import Footer from '@/Footer/NeuroFooter'

const fadeInUp = {
  hidden: { opacity: 0, y: 30, scale: 0.97, rotateX: -5 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Page() {
  return (
    <main className="bg-black overflow-x-hidden">
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Navbar />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <NeuroChainLogo />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <NeuralDashboard />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <SmartContracts />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Metaverse />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <YieldFarming />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Footer />
      </motion.div>
    </main>
  )
}
