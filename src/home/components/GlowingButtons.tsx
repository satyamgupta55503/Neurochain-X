'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const buttons = [
  { label: 'Launch Dapp', href: '/launch', glowFrom: 'from-cyan-400 to-purple-600' },
  { label: 'Explore Features', href: '/features', glowFrom: 'from-purple-600 to-cyan-400' },
];

export default function GlowingButtons() {
  return (
    <div className="flex gap-4 mt-8 justify-center">
      {buttons.map(({ label, href, glowFrom }, idx) => (
        <motion.div
          key={idx}
          className={`relative rounded-xl bg-black p-[1px] bg-gradient-to-r ${glowFrom}`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link
            href={href}
            className="block px-6 py-3 rounded-xl bg-black text-white font-orbitron text-sm md:text-base shadow-[0_0_20px_2px_rgba(0,255,255,0.2)]"
          >
            <span className="flex items-center justify-center gap-2">
              {label}
              {label.includes('Launch') && <span>→</span>}
            </span>
          </Link>

          {/* Neon glow ring */}
          <div
            className={`absolute -inset-[2px] rounded-xl blur-md opacity-50 z-[-1] bg-gradient-to-r ${glowFrom}`}
          ></div>
        </motion.div>
      ))}
    </div>
  );
}
