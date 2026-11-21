"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Globe, Code2, Smartphone, Server, Database } from "lucide-react";

export default function Home() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Maps mouse position to rotation angle
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  return (
    <main className="min-h-screen flex items-center px-6 bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-[#1e3a8a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">

        {/* Left side: Text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Your Business with Smart Technology
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-lg">
            From websites and mobile apps to fintech and custom software, we deliver solutions that accelerate growth and efficiency.
          </p>
           <Link
            href="/Contactpage"
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
             text-white font-semibold px-8 py-3 rounded-full
             shadow-lg hover:shadow-2xl
             transform hover:scale-105 transition duration-300 inline-block"
          >
            Explore More
          </Link>
        </div>

        {/* Right side: 3D Interactive Graphic */}
        <motion.div 
          className="flex-1 w-full h-[400px] md:h-[600px] flex items-center justify-center cursor-pointer"
          style={{ perspective: 1000 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80"
            style={{ 
              rotateX, 
              rotateY,
              transformStyle: "preserve-3d" 
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            {/* Glowing Backdrop */}
            <div 
              className="absolute inset-0 bg-blue-500/20 rounded-[3rem] blur-3xl"
              style={{ transform: "translateZ(-100px)" }}
            />

            {/* Base Glass Card */}
            <div 
              className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-gradient-to-br from-blue-500/20 to-purple-500/20" 
              style={{ transform: "translateZ(-50px)" }}
            />
            
            {/* Main Center Icon */}
            <div 
              className="absolute inset-0 flex items-center justify-center" 
              style={{ transform: "translateZ(50px)" }}
            >
              <div className="p-8 bg-gradient-to-tr from-blue-600 to-purple-500 rounded-2xl shadow-2xl shadow-purple-500/40 border border-white/20">
                <Globe size={80} className="text-white drop-shadow-md" strokeWidth={1.5} />
              </div>
            </div>

            {/* Top Left Floating Tile: Code */}
            <div 
              className="absolute -top-12 -left-8 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/30 shadow-xl shadow-black/20" 
              style={{ transform: "translateZ(90px)" }}
            >
              <Code2 size={40} className="text-blue-300 drop-shadow-md" />
            </div>

            {/* Bottom Right Floating Tile: App */}
            <div 
              className="absolute -bottom-8 -right-8 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/30 shadow-xl shadow-black/20" 
              style={{ transform: "translateZ(110px)" }}
            >
              <Smartphone size={40} className="text-pink-300 drop-shadow-md" />
            </div>

            {/* Center Right Floating Tile: Server */}
            <div 
              className="absolute top-1/2 -right-14 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/30 shadow-xl shadow-black/20 transform -translate-y-1/2" 
              style={{ transform: "translateZ(70px)" }}
            >
              <Server size={32} className="text-purple-300 drop-shadow-md" />
            </div>

            {/* Center Left Floating Tile: Database */}
            <div 
              className="absolute bottom-1/4 -left-12 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/30 shadow-xl shadow-black/20" 
              style={{ transform: "translateZ(130px)" }}
            >
              <Database size={32} className="text-cyan-300 drop-shadow-md" />
            </div>

          </motion.div>
        </motion.div>

      </div>
    </main>
  );
}




