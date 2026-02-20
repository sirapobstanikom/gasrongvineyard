import React from 'react';
import { motion } from 'motion/react';

// รูปจาก public/assets/ — ใส่ไฟล์ในโฟลเดอร์ public/assets/ แล้ว commit
const cafeImages = [
  '/assets/เค้ก.jpg',
  '/assets/pizza.jpg',
  '/assets/มินเนี่ยน.jpg',
  '/assets/coffee.jpg',
  '/assets/ไอติมเค้ก.jpg',
  '/assets/fruitfeppe.jpg',
  '/assets/รีวิว.jpg',
];

export default function CafeGallery() {
  return (
    <section id="cafe-gallery" className="py-16 sm:py-24 px-4 sm:px-6 bg-paper-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-vineyard-green mb-4">
            แกลเลอรีคาเฟ่
          </h2>
          <p className="text-base sm:text-lg text-vineyard-green/60 max-w-2xl mx-auto px-2">
            บรรยากาศคาเฟ่ด้านหน้าสวน แก๊สกับรอง
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {cafeImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src={src}
                alt={`แกลเลอรีคาเฟ่ ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
