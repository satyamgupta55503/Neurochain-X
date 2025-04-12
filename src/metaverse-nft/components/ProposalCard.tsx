import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function ProposalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      whileHover={{ rotateX: 2, rotateY: -2 }}
      className="w-full max-w-7xl mx-auto px-6 py-8 rounded-3xl border border-cyan-500 bg-gradient-to-br from-[#0e0e15] via-[#10101a] to-[#14141f] shadow-[0_0_25px_rgba(0,255,255,0.15)] backdrop-blur-md transform transition-all duration-300"
      style={{ perspective: 1000 }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="text-start space-y-2">
          <h2 className="text-white text-2xl md:text-3xl font-bold font-sans drop-shadow-[0_1px_2px_rgba(0,255,255,0.4)]">
            Have A Proposal?
          </h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed text-base md:text-lg">
            Submit your ideas for protocol improvements, treasury allocations, or community initiatives.
            The neural network will help optimize your proposal for maximum engagement and clarity.
          </p>
        </div>
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: '0px 0px 15px rgba(0,255,255,0.6)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="flex items-center gap-2 px-6 py-3 rounded-xl text-black font-semibold text-base bg-cyan-300 hover:bg-cyan-400 transition-colors"
        >
          <Plus size={18} />
          Create Proposal
        </motion.button>
      </div>
    </motion.div>
  );
}
