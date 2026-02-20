import React from 'react';
import { motion } from 'motion/react';

// ภาพจากโปรเจกต์ (โหลดจาก src/assets) — ตอนนี้ใช้ 1.jpg ครบ 6 ช่อง
// ถ้ามีรูปใน assets/gallery/ (1.jpg, 2.jpg, ...) แล้ว เปลี่ยนเป็น: [1,2,3,4,5,6].map(i => getImage(`../assets/gallery/${i}.jpg`))
const getImage = (path: string) => new URL(path, import.meta.url).href;
const one = getImage('../assets/1.jpg');
const two = getImage('../assets/2.jpg');
const three = getImage('../assets/3.jpg');
const four = getImage('../assets/4.jpg');
const five = getImage('../assets/5.jpg');
const six = getImage('../assets/6.jpg');
const images = [one, two, three, four, five, six];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-warm-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-vineyard-green mb-4">
            แกลเลอรีภาพสวน
          </h2>
          <p className="text-lg text-vineyard-green/60 max-w-2xl mx-auto">
            บรรยากาศความสุขและความสวยงามในสวนองุ่นแก๊สกับรอง
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
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
                alt={`Gallery image ${index + 1}`}
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
