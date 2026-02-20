import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-vineyard-deep pt-[env(safe-area-inset-top)]">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 opacity-60"
      >
        <img
          src="https://images.unsplash.com/photo-1506306447117-858c2d296bb1?q=80&w=2048&auto=format&fit=crop"
          alt="Vineyard Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-vineyard-deep/80 via-transparent to-vineyard-deep" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "circOut" }}
        >
          <span className="inline-block text-gold-accent tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold mb-6 sm:mb-8">
            Est. 2024 — Phrom Buri, Sing Buri
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-[10rem] text-white font-serif leading-[0.9] sm:leading-[0.85] mb-8 sm:mb-12">
            <span className="block">GAS & RONG</span>
            <span className="block italic font-extralight text-gold-accent/80">Vineyard</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16">
            <div className="h-[1px] w-12 bg-gold-accent/30 hidden md:block" />
            <p className="text-white/60 font-serif italic text-base sm:text-lg md:text-xl max-w-md">
              "สัมผัสประสบการณ์สวนองุ่นสดใหม่จากไร่ พร้อมไวน์คุณภาพที่รังสรรค์ด้วยความใส่ใจ มีคาเฟ่ด้านหน้าสวนด้วย"
            </p>
            <div className="h-[1px] w-12 bg-gold-accent/30 hidden md:block" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-10 sm:mt-16 w-full sm:w-auto px-2 sm:px-0">
            <a href="#gallery" className="luxury-button-filled">
              Explore Estate
            </a>
            <a href="#contact" className="luxury-button">
              Private Visit
            </a>
          </div>
        </motion.div>
      </div>

      {/* Vertical Rail Text */}
      <div className="absolute left-10 bottom-20 hidden lg:block">
        <p className="writing-vertical-rl rotate-180 text-gold-accent/40 text-[10px] uppercase tracking-[0.5em] font-bold">
          Agro Tourism Experience
        </p>
      </div>
      
      <div className="absolute right-10 bottom-20 hidden lg:block">
        <p className="writing-vertical-rl text-gold-accent/40 text-[10px] uppercase tracking-[0.5em] font-bold">
          Sing Buri, Thailand
        </p>
      </div>
    </section>
  );
}
