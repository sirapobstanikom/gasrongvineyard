import React from 'react';
import { motion } from 'motion/react';
import { Facebook } from 'lucide-react';

export default function FloatingContact() {
  return (
    <motion.a
      href="https://www.facebook.com/profile.php?id=100063842003133"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
    >
      <Facebook size={32} />
      <span className="absolute right-full mr-4 bg-white text-[#1877F2] px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        ติดต่อเราผ่าน Facebook
      </span>
    </motion.a>
  );
}
