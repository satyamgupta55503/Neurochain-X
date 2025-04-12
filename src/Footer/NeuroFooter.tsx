'use client';

import { motion } from 'framer-motion';
import {
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaBolt
} from 'react-icons/fa6';
import { useState } from 'react';

export default function NeuroFooter() {
  const [email, setEmail] = useState('');

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="w-full bg-gradient-to-br from-black via-[#0a0e27] to-[#050509] text-white px-6 md:px-16 pt-20 pb-10 relative z-10 overflow-hidden shadow-[inset_0_0_60px_rgba(0,255,255,0.1)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(0,255,255,0.6)]">
              N
            </div>
            <h1 className="text-xl font-bold">NeuroChain <span className="text-cyan-400">X</span></h1>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            The next evolution in decentralized finance, powered by neural networks and quantum-resistant blockchain technology.
          </p>
          <div className="flex items-center gap-4 mt-6">
            {[FaTwitter, FaGithub, FaYoutube, FaFacebookF, FaInstagram].map((Icon, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-cyan-500/10 p-2 rounded-full shadow-md"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3 text-cyan-400">Platform</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">AI Smart Contracts</a></li>
            <li><a href="#">Quantum Wallet</a></li>
            <li><a href="#">Metaverse & NFT</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-cyan-400">Governance</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Governance</a></li>
            <li><a href="#">Yield Farming</a></li>
            <li><a href="#">DAO</a></li>
            <li><a href="#">Proposals</a></li>
            <li><a href="#">Voting</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-cyan-400">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Subscribe CTA */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="mt-16 bg-[#0c101e]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 text-center md:text-left shadow-[0_0_40px_rgba(0,255,255,0.1)]"
      >
        <h3 className="text-lg md:text-xl font-bold text-white mb-2">Stay in the Neural Loop</h3>
        <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for the latest updates on protocol developments, security enhancements, and ecosystem growth.</p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-2/3 px-4 py-2 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-400 text-black font-semibold px-6 py-2 rounded-lg shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:bg-cyan-300 transition-all flex items-center gap-2"
          >
            <FaBolt className="text-sm" />
            Subscribe
          </motion.button>
        </div>
      </motion.div>

      {/* Bottom */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 border-t border-white/5 pt-4">
        <span>© 2050 NeuroChain X. All rights reserved.</span>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>

      {/* Network Status */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-cyan-300">
        <span className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" />
        Network Status: Optimal
        <span className="ml-2 bg-cyan-500 text-black font-bold px-2 py-0.5 rounded-full text-[10px] shadow-md">v5.4.2</span>
      </div>
    </motion.footer>
  );
}
