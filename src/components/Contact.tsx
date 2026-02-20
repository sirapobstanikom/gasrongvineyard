import React from 'react';
import { motion } from 'motion/react';
import { Phone, Facebook, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info & Map */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-8 bg-gold-accent" />
              <span className="text-gold-accent tracking-[0.3em] uppercase text-[10px] font-bold">
                Get In Touch
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-ink-dark mb-12 leading-tight">
              ติดต่อเรา
            </h2>
            <div className="space-y-10 mb-16">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-paper-light rounded-full flex items-center justify-center text-gold-accent shrink-0 border border-gold-accent/10">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-ink-dark mb-2">ที่ตั้ง</h4>
                  <p className="text-ink-dark/60 font-light">
                    227 หมู่ 5 ตำบลม่วงหมู่ อำเภอพรหมบุรี จังหวัดสิงห์บุรี 16160
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-paper-light rounded-full flex items-center justify-center text-gold-accent shrink-0 border border-gold-accent/10">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-ink-dark mb-2">เบอร์โทรศัพท์</h4>
                  <p className="text-ink-dark/60 font-light">0634265626</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-paper-light rounded-full flex items-center justify-center text-gold-accent shrink-0 border border-gold-accent/10">
                  <Facebook size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-ink-dark mb-2">Facebook</h4>
                  <a 
                    href="https://www.facebook.com/profile.php?id=100063842003133" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gold-accent hover:underline font-medium"
                  >
                    สวนองุ่นแก๊สกับรอง บ้านสวนปากบาง
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-gold-accent/10 grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.3456789!2d100.456789!3d14.890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDUzJzI0LjQiTiAxMDDCsDI3JzI0LjQiRQ!5e0!3m2!1sth!2sth!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="bg-paper-light p-12 md:p-16 rounded-[3rem] shadow-2xl border border-gold-accent/10"
          >
            <h3 className="text-3xl font-serif text-ink-dark mb-10">ส่งข้อความถึงเรา</h3>
            <form className="space-y-8">
              <div className="group">
                <label className="block text-[10px] font-bold text-ink-dark/40 uppercase tracking-widest mb-3 group-focus-within:text-gold-accent transition-colors">
                  ชื่อ-นามสกุล
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-ink-dark/10 py-4 focus:outline-none focus:border-gold-accent transition-all font-light"
                  placeholder="กรอกชื่อของคุณ"
                />
              </div>
              <div className="group">
                <label className="block text-[10px] font-bold text-ink-dark/40 uppercase tracking-widest mb-3 group-focus-within:text-gold-accent transition-colors">
                  อีเมล / เบอร์โทรศัพท์
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-ink-dark/10 py-4 focus:outline-none focus:border-gold-accent transition-all font-light"
                  placeholder="กรอกข้อมูลติดต่อ"
                />
              </div>
              <div className="group">
                <label className="block text-[10px] font-bold text-ink-dark/40 uppercase tracking-widest mb-3 group-focus-within:text-gold-accent transition-colors">
                  ข้อความ
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-ink-dark/10 py-4 focus:outline-none focus:border-gold-accent transition-all font-light resize-none"
                  placeholder="พิมพ์ข้อความที่ต้องการติดต่อ..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="luxury-button-filled w-full !py-5"
              >
                ส่งข้อความ
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
