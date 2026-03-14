import React from 'react';
import { motion } from 'motion/react';

export default function LineFloatingButton() {
  return (
    <motion.a
      href="https://line.me/R/ti/p/@602drfaq"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 20px 25px -5px rgba(6, 199, 85, 0.4), 0 8px 10px -6px rgba(6, 199, 85, 0.2)" 
      }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50 hidden md:flex items-center gap-2 bg-[#06C755] text-white px-5 py-3.5 md:px-6 md:py-4 rounded-full shadow-lg transition-colors duration-300 hover:bg-[#05b34c]"
    >
      <svg 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-6 h-6 md:w-7 md:h-7"
      >
        <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.122.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zM8.58 12.76H6.103c-.342 0-.622-.279-.622-.622V7.485c0-.342.279-.622.622-.622s.622.279.622.622v4.031h1.855c.342 0 .622.279.622.622s-.279.623-.622.623zm3.507 0h-1.244c-.342 0-.622-.279-.622-.622V7.485c0-.342.279-.622.622-.622s.622.279.622.622v4.653c0 .343-.279.622-.622.622zm4.496-3.111c0 .342-.279.622-.622.622h-1.244v1.867c0 .342-.279.622-.622.622s-.622-.279-.622-.622V7.485c0-.342.279-.622.622-.622s.622.279.622.622v1.867h1.244c.342 0 .622.279.622.622zm4.496-1.542c0 .342-.279.622-.622.622h-1.867l1.867 2.489c.124.166.166.373.104.56-.062.187-.228.332-.415.332h-1.244c-.207 0-.394-.104-.518-.269l-1.867-2.489v2.136c0 .342-.279.622-.622.622s-.622-.279-.622-.622V7.485c0-.342.279-.622.622-.622h1.244c.207 0 .394.104.518.269l1.867 2.489V7.485c0-.342.279-.622.622-.622s.622.279.622.622v2.489z"/>
      </svg>
      <span className="font-bold text-sm md:text-base tracking-wide">LINEで無料相談</span>
    </motion.a>
  );
}
