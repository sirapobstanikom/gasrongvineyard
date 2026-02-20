import React from 'react';
import { motion } from 'motion/react';

export default function WineProducts() {
  return (
    <section id="wine" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-vineyard-deep text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="order-2 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-8 bg-gold-accent" />
              <span className="text-gold-accent tracking-[0.3em] uppercase text-[10px] font-bold">
                The Cellar
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif mb-6 sm:mb-10 leading-[1.1]">
              สุนทรียภาพ<br />
              <span className="italic font-extralight text-gold-accent">แห่งการบ่มเพาะ</span>
            </h2>

            <div className="space-y-8 text-lg text-white/60 leading-relaxed font-light">
              <p>
                ไวน์ทุกขวดจาก GAS & RONG คือผลงานศิลปะที่ต้องใช้เวลา 
                เราคัดสรรองุ่นที่ดีที่สุดจากสวน ผ่านกระบวนการหมักบ่มแบบดั้งเดิม 
                เพื่อให้ได้รสสัมผัสที่ลุ่มลึกและสง่างามที่สุด
              </p>
              
              <div className="space-y-10 mt-12">
                <div className="group">
                  <div className="flex justify-between items-end mb-2">
                    <h4 className="text-2xl font-serif text-white group-hover:text-gold-accent transition-colors">Grand Reserve Red</h4>
                    <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase">Vintage 2025</span>
                  </div>
                  <p className="text-gold-accent/90 text-sm italic mb-2">พบกันเร็วๆ นี้</p>
                  <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
                    <motion.div 
                      initial={{ x: "-100%" }}
                      whileInView={{ x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="absolute inset-0 bg-gold-accent" 
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="flex justify-between items-end mb-2">
                    <h4 className="text-2xl font-serif text-white group-hover:text-gold-accent transition-colors">Prestige White</h4>
                    <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase">Vintage 2024</span>
                  </div>
                  <p className="text-gold-accent/90 text-sm italic mb-2">พบกันเร็วๆ นี้</p>
                  <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
                    <motion.div 
                      initial={{ x: "-100%" }}
                      whileInView={{ x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      className="absolute inset-0 bg-gold-accent" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="order-1 lg:order-1 relative"
          >
            <div className="aspect-[3/4] rounded-full overflow-hidden border-[1px] border-gold-accent/30 p-4">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop"
                alt="Wine Production"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute top-1/2 -right-12 w-32 h-32 bg-gold-accent rounded-full flex items-center justify-center text-center p-4 shadow-2xl border border-white/20 transform -translate-y-1/2">
              <p className="text-[10px] font-bold tracking-widest text-white uppercase leading-tight">
                Award<br />Winning<br />Estate
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
