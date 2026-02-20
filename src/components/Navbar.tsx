import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const logo = '/assets/1.jpg';

const navLinks = [
  { name: 'หน้าแรก', href: '#home' },
  { name: 'เกี่ยวกับเรา', href: '#about' },
  { name: 'สายพันธุ์องุ่น', href: '#varieties' },
  { name: 'ผลิตภัณฑ์ไวน์', href: '#wine' },
  { name: 'แกลเลอรี', href: '#gallery' },
  { name: 'แกลเลอรีคาเฟ่', href: '#cafe-gallery' },
  { name: 'วิดีโอรีวิว', href: '#video-review' },
  { name: 'ติดต่อเรา', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.classList.add('menu-open-mobile');
      document.body.style.top = `-${scrollY}px`;
    } else {
      const scrollY = document.body.style.top ? Math.abs(parseInt(document.body.style.top, 10)) : 0;
      document.body.classList.remove('menu-open-mobile');
      document.body.style.top = '';
      if (scrollY) window.scrollTo(0, scrollY);
    }
    return () => {
      document.body.classList.remove('menu-open-mobile');
      document.body.style.top = '';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 pt-[env(safe-area-inset-top)] ${
        scrolled ? 'glass-nav py-2 sm:py-3' : 'bg-transparent py-4 sm:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 sm:gap-4 group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] shrink-0">
            <img 
              src={logo} 
              alt="แกสกะรอง สวนองุ่น" 
              className="w-full h-full object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <span className={`text-base sm:text-lg md:text-xl font-serif tracking-widest transition-colors ${scrolled ? 'text-ink-dark' : 'text-white'}`}>
              GAS & RONG
            </span>
            <span className={`text-[7px] sm:text-[8px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold transition-colors ${scrolled ? 'text-gold-accent' : 'text-gold-accent/80'}`}>
              Vineyard Estate
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:text-gold-accent ${scrolled ? 'text-ink-dark/60' : 'text-white/70'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="luxury-button-filled !py-2 !px-6 !text-[9px]">
            Book Now
          </a>
        </div>

        {/* Mobile Toggle — พื้นที่แตะอย่างน้อย 44px */}
        <button
          type="button"
          aria-label={isOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
          className={`md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors ${scrolled ? 'text-ink-dark' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu + Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-paper-light border-t border-gold-accent/10 overflow-hidden relative z-50"
            >
            <div className="flex flex-col p-4 pb-[max(1rem,env(safe-area-inset-bottom))] gap-3 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-serif font-medium text-ink-dark hover:text-gold-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
