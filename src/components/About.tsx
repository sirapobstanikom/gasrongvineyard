import React from 'react';
import { motion } from 'motion/react';

const aboutImage = new URL('../assets/รีวิว.jpg', import.meta.url).href;

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-paper-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-center">
          
          {/* Image Side with Artistic Mask */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 aspect-[4/5] rounded-t-full overflow-hidden shadow-2xl border-8 sm:border-[12px] border-white">
              <img
                src={aboutImage}
                alt="บรรยากาศสวนองุ่นแก๊สกับรอง"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold-accent/10 rounded-full -z-10 blur-3xl" />
            <div className="absolute top-1/2 -left-10 w-20 h-[1px] bg-gold-accent/40" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
            className="lg:col-span-7 lg:pl-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-8 bg-gold-accent" />
              <span className="text-gold-accent tracking-[0.3em] uppercase text-[10px] font-bold">
                Our Heritage
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-ink-dark mb-6 sm:mb-10 leading-[1.1]">
              ความละเมียดละไม<br />
              <span className="italic font-extralight text-gold-accent">แห่งบ้านสวนปากบาง</span>
            </h2>

            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-ink-dark/70 leading-relaxed font-light">
              <p>
                สวนองุ่นแก๊สกับรอง คือผลผลิตจากความหลงใหลในศาสตร์แห่งการเพาะปลูก 
                เราคัดสรรผืนดินที่อุดมสมบูรณ์ที่สุดในอำเภอพรหมบุรี จังหวัดสิงห์บุรี 
                เพื่อรังสรรค์อาณาจักรแห่งองุ่นที่เปี่ยมไปด้วยคุณภาพและความสุนทรีย์ 
              </p>
              <p>
                ทุกขั้นตอนถูกดูแลด้วยมาตรฐานระดับพรีเมียม ตั้งแต่การคัดสายพันธุ์ระดับโลก 
                ไปจนถึงกระบวนการบ่มเพาะแบบธรรมชาติ 100% เพื่อให้มั่นใจว่าทุกผลผลิต 
                คือตัวแทนของความสมบูรณ์แบบที่ส่งตรงถึงมือคุณ
              </p>
            </div>

            <div className="mt-10 sm:mt-16 grid grid-cols-2 gap-8 sm:gap-12 border-t border-gold-accent/20 pt-8 sm:pt-12">
              <div>
                <p className="text-3xl font-serif text-gold-accent mb-2">100%</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-ink-dark/40">Organic Process</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-gold-accent mb-2">Premium</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-ink-dark/40">Quality Control</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
