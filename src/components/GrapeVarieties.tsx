import React from 'react';
import { motion } from 'motion/react';

const imageViking = '/assets/ไวกิ้ง.jpg';
const imageshineMuscat = '/assets/shinemus.jpg';
const varieties = [
  {
    name: 'rembo',
    description: 'องุ่นดำไร้เมล็ด รสชาติหวานจัด เนื้อแน่นกรอบ กลิ่นหอมลึกซึ้งเป็นเอกลักษณ์',
    image: 'https://images.unsplash.com/photo-1601275868399-45bec4f4cd9d?q=80&w=800&auto=format&fit=crop',
    taste: 'หวานเข้ม, กรอบแน่น',
    origin: 'Premium Selection',
  },
  {
    name: 'Shine Muscat',
    description: 'องุ่นเขียวพรีเมียมยอดนิยม ผิวบางกรอบ เนื้อเจลลี่ กลิ่นหอมมัสกัตคล้ายดอกไม้',
    image: imageshineMuscat,
    taste: 'หวานนุ่ม, หอมมัสกัต',
    origin: 'Exclusive Estate',
  },
  {
    name: 'Viking',
    description: 'สายพันธุ์ไวกิ้งจากประเทศ Ukraine รสชาติโดดเด่น เนื้อแน่น กลมกล่อม',
    image: imageViking,
    taste: 'หวานกลมกล่อม, เนื้อแน่น',
    origin: 'Ukraine',
  },
];

export default function GrapeVarieties() {
  return (
    <section id="varieties" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-20 gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-accent tracking-[0.3em] uppercase text-[10px] font-bold mb-4 block">
              The Collection
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-ink-dark leading-tight">
              สายพันธุ์องุ่น<br />
              <span className="italic font-extralight text-gold-accent">ระดับพรีเมียม</span>
            </h2>
          </div>
          <p className="text-ink-dark/50 font-light max-w-xs text-sm leading-relaxed">
            เราคัดสรรเฉพาะสายพันธุ์ที่โดดเด่นที่สุด เพื่อมอบประสบการณ์รสชาติที่เหนือระดับในทุกพวง
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {varieties.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-8 shadow-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ink-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Taste Label */}
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md text-ink-dark text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                    {item.origin}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-3xl font-serif text-ink-dark group-hover:text-gold-accent transition-colors">
                    {item.name}
                  </h3>
                  <div className="h-[1px] flex-grow mx-4 bg-gold-accent/20" />
                </div>
                <p className="text-ink-dark/60 font-light text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-4 flex items-center gap-2 text-gold-accent text-xs font-bold uppercase tracking-widest">
                  <span className="w-8 h-[1px] bg-gold-accent" />
                  {item.taste}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
