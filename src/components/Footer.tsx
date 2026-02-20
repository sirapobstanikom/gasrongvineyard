import React from 'react';

const logo = new URL('../assets/1.jpg', import.meta.url).href;

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-paper-light border-t border-gold-accent/10 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-12">
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-xl border border-gold-accent/10">
            <img 
              src={logo} 
              alt="แกสกะรอง สวนองุ่น" 
              className="w-full h-full object-contain p-2"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-serif text-ink-dark mb-2">
              GAS & RONG
            </h3>
            <p className="text-[10px] text-gold-accent uppercase tracking-[0.4em] font-bold">
              Vineyard Estate • Phrom Buri
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-[10px] uppercase tracking-[0.2em] font-bold text-ink-dark/40">
          <a href="#home" className="hover:text-gold-accent transition-colors">Home</a>
          <a href="#about" className="hover:text-gold-accent transition-colors">Estate</a>
          <a href="#varieties" className="hover:text-gold-accent transition-colors">Collection</a>
          <a href="#cafe-gallery" className="hover:text-gold-accent transition-colors">Cafe</a>
          <a href="#contact" className="hover:text-gold-accent transition-colors">Contact</a>
        </div>

        <div className="text-center md:text-right text-[10px] text-ink-dark/30 font-light tracking-widest">
          <p>© {new Date().getFullYear()} GAS & RONG VINEYARD. ALL RIGHTS RESERVED.</p>
          <p className="mt-2">PREMIUM AGRO TOURISM EXPERIENCE</p>
        </div>
      </div>
    </footer>
  );
}
