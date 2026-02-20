import React from 'react';
import { motion } from 'motion/react';

// ใส่ลิงก์ YouTube (ได้ทั้ง watch?v=xxx หรือ embed/xxx) — ใช้แค่ Video ID 11 ตัวก็ได้
const youtubeVideoIds: string[] = [
  'https://www.youtube.com/watch?v=ZX-F3I738NA',
  'https://www.youtube.com/watch?v=Uij1aSMAJto',
  'https://www.youtube.com/watch?v=_hGscLf3l2E',
];

function getEmbedUrl(idOrUrl: string): string {
  const trimmed = idOrUrl.trim();
  // ถ้าเป็น URL แบบ watch?v=xxx
  const watchMatch = trimmed.match(/(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
  // ถ้าเป็น URL แบบ youtu.be/xxx
  const shortMatch = trimmed.match(/(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
  // ถ้าเป็นแค่ Video ID (11 ตัว)
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return `https://www.youtube.com/embed/${trimmed}`;
  return trimmed;
}

export default function VideoReview() {
  return (
    <section id="video-review" className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 bg-paper-light relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold-accent/5 via-transparent to-gold-accent/5 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-gold-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12 sm:mb-20">
          <span className="inline-block text-gold-accent tracking-[0.3em] uppercase text-[10px] font-bold mb-3 sm:mb-4">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-vineyard-green mb-4 sm:mb-5 leading-tight">
            วิดีโอรีวิว
          </h2>
          <p className="text-base sm:text-lg text-vineyard-green/60 max-w-xl mx-auto font-light px-2">
            รีวิวจากผู้มาเยือนสวนองุ่นแก๊สกับรอง
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <span className="w-12 h-px bg-gold-accent/40" />
            <span className="w-2 h-2 rounded-full bg-gold-accent/60" />
            <span className="w-12 h-px bg-gold-accent/40" />
          </div>
        </div>

        {youtubeVideoIds.length === 0 ? (
          <p className="text-center text-vineyard-green/50 text-sm max-w-md mx-auto py-12">
            เพิ่มลิงก์ YouTube ในไฟล์ <code className="bg-white/80 px-1.5 py-0.5 rounded text-ink-dark">VideoReview.tsx</code> ในตัวแปร <code className="bg-white/80 px-1.5 py-0.5 rounded text-ink-dark">youtubeVideoIds</code>
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {youtubeVideoIds.map((idOrUrl, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-vineyard-deep shadow-xl ring-1 ring-black/5 group-hover:ring-gold-accent/30 group-hover:shadow-2xl transition-all duration-500">
                  <iframe
                    src={getEmbedUrl(idOrUrl) + '?rel=0'}
                    title={`วิดีโอรีวิว ${index + 1}`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  {/* Label */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/95 backdrop-blur-sm text-vineyard-green text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                      รีวิวที่ {index + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
