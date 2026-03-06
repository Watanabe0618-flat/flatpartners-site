import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingCTA() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/90 backdrop-blur-md border-t border-slate-200 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)] pb-safe">
      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={scrollToContact}
        className="w-full bg-orange-500 text-white font-bold py-3.5 px-6 rounded-full shadow-lg flex items-center justify-center gap-2 text-lg"
      >
        <Mail className="w-6 h-6" />
        <span>無料相談はこちら</span>
      </motion.button>
      <p className="text-[10px] text-center text-slate-500 mt-1.5">
        簡単30秒で入力完了・24時間受付中
      </p>
    </div>
  );
}
