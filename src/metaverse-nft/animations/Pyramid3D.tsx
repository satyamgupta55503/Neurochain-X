"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Pyramid3D() {
  const pyramidRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let angle = 0;
    const animate = () => {
      if (pyramidRef.current) {
        pyramidRef.current.style.transform = `rotateX(${angle}deg) rotateY(${angle}deg)`;
        angle += 0.3;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="flex items-center justify-center bg-transparent py-6">
      <div className="relative  sm:w-48 sm:h-48 perspective-[800px]">
        <div
          ref={pyramidRef}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="absolute inset-0 m-auto transform-style-preserve-3d transition duration-500"
        >
          {/* Base */}
          <motion.div
            className="absolute w-full h-full border border-teal-400/40 bg-teal-400/10 rotate-x-90 translate-z-[-75px] rounded-xl"
            animate={{ opacity: hovered ? 0.3 : 0.15 }}
            transition={{ duration: 0.6 }}
          />

          {/* Triangular Faces */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full bg-gradient-to-br from-cyan-400/20 to-amber-500/10 border border-amber-300/30 origin-bottom rounded-xl"
              style={{
                transform: `rotateY(${i * 90}deg) rotateX(60deg) translateZ(75px)`,
              }}
              animate={{
                scale: hovered ? 1.05 : 1,
                opacity: [0.5, 1, 0.5],
                backgroundColor: hovered
                  ? "rgba(168, 85, 247, 0.2)"
                  : "rgba(34, 211, 238, 0.1)",
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
