"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-zinc-950">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full mix-blend-screen opacity-50" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/10 blur-[120px] rounded-full mix-blend-screen opacity-50" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none"
        >
          DEFENDING
          <br />
          <span className="text-outline text-transparent md:text-zinc-500/50">YOUR LEGACY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-sm md:text-lg uppercase tracking-widest text-zinc-400 max-w-md mx-auto"
        >
          Premier Legal Representation for High-Stakes Litigation
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-6 text-xs uppercase tracking-widest text-zinc-500"
      >
        Scroll to Explore
      </motion.div>
    </section>
  );
}
