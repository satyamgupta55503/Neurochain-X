"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function AnimatedCube() {
  const controls = useAnimation();
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    controls.start({
      rotateY: [0, 360],
      rotateX: [0, 360],
      rotateZ: [0, 360],
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <div className="flex justify-center items-center  mb-17  bg-transparent p-2">
      <motion.div
        ref={cubeRef}
        animate={controls}
        className="relative w-40 h-40 sm:w-40 sm:h-40 md:w-[10rem] md:h-[10rem] transform-style-preserve-3d perspective-[800px]"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full border rounded-xl border-violet-500/50 bg-violet-700/10 backdrop-blur-md shadow-[0_0_20px_#a855f7]/40"
            style={{
              transform:
                i === 0 ? "rotateY(0deg) translateZ(3rem)" :
                i === 1 ? "rotateY(90deg) translateZ(3rem)" :
                i === 2 ? "rotateY(180deg) translateZ(3rem)" :
                i === 3 ? "rotateY(-90deg) translateZ(3rem)" :
                i === 4 ? "rotateX(90deg) translateZ(3rem)" :
                "rotateX(-90deg) translateZ(3rem)",
            }}
            whileHover={{ scale: 1.05, rotateZ: 5 }}
            transition={{ duration: 0.4 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
