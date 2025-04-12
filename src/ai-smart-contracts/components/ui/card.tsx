// File: src/ai-smart-contracts/components/ui/card.tsx
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`rounded-2xl p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-md ${className}`}
    >
      {children}
    </motion.div>
  );
};
