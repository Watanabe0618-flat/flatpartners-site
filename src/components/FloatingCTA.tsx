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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)] pb-safe">
      <div className="flex gap-[6px] px-3 py-[10px]">
        {/* Left Button (Phone) */}
        <motion.a
          href="tel:05017201202"
          whileTap={{ scale: 0.96 }}
          className="flex-[1] bg-blue-600 text-white rounded-[10px] flex flex-col items-center justify-center py-2 px-1 shadow-sm"
        >
          <div className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span className="font-bold text-[12px] sm:text-[13px]">電話相談</span>
          </div>
        </motion.a>

        {/* Middle Button (Form) */}
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={scrollToContact}
          className="flex-[1.5] bg-[#f57c00] text-white rounded-[10px] flex flex-col items-center justify-center py-2 px-1 shadow-sm"
        >
          <div className="flex items-center gap-1.5 mb-0.5">
            <Mail className="w-4 h-4" />
            <span className="font-bold text-[12px] sm:text-[13px]">無料相談</span>
          </div>
          <span className="text-[9px] opacity-90">24時間受付</span>
        </motion.button>

        {/* Right Button (LINE) */}
        <motion.a
          href="https://lin.ee/xxxxx"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.96 }}
          className="flex-[1.5] bg-[#06C755] text-white rounded-[10px] flex flex-col items-center justify-center py-2 px-1 shadow-sm"
        >
          <div className="flex items-center gap-1.5 mb-0.5">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.122.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zM8.58 12.76H6.103c-.342 0-.622-.279-.622-.622V7.485c0-.342.279-.622.622-.622s.622.279.622.622v4.031h1.855c.342 0 .622.279.622.622s-.279.623-.622.623zm3.507 0h-1.244c-.342 0-.622-.279-.622-.622V7.485c0-.342.279-.622.622-.622s.622.279.622.622v4.653c0 .343-.279.622-.622.622zm4.496-3.111c0 .342-.279.622-.622.622h-1.244v1.867c0 .342-.279.622-.622.622s-.622-.279-.622-.622V7.485c0-.342.279-.622.622-.622s.622.279.622.622v1.867h1.244c.342 0 .622.279.622.622zm4.496-1.542c0 .342-.279.622-.622.622h-1.867l1.867 2.489c.124.166.166.373.104.56-.062.187-.228.332-.415.332h-1.244c-.207 0-.394-.104-.518-.269l-1.867-2.489v2.136c0 .342-.279.622-.622.622s-.622-.279-.622-.622V7.485c0-.342.279-.622.622-.622h1.244c.207 0 .394.104.518.269l1.867 2.489V7.485c0-.342.279-.622.622-.622s.622.279.622.622v2.489z"/>
            </svg>
            <span className="font-bold text-[12px] sm:text-[13px]">LINE相談</span>
          </div>
          <span className="text-[9px] opacity-90">初回無料</span>
        </motion.a>
      </div>
    </div>
  );
}
