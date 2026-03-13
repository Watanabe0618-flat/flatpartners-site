import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-blue-950 min-h-[100svh] flex items-center">
      {/* Space Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=2070&auto=format&fit=crop"
          alt="Blue night sky"
          className="w-full h-full object-cover opacity-50 mix-blend-screen"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/60 to-blue-950"></div>
      </div>

      {/* Aurora Image Animation (Simulating Video) */}
      <div className="absolute inset-0 z-0 overflow-hidden mix-blend-screen opacity-70 pointer-events-none">
        <div className="absolute w-[120%] h-[120%] -left-[10%] -top-[10%] animate-aurora-pan-x relative">
          <img 
            src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop" 
            alt="Aurora" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          
          {/* ふたご座（Gemini Constellation） */}
          <div className="absolute top-[15%] right-[25%] w-64 h-64 md:w-96 md:h-96 opacity-60">
            <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              {/* 星座の線 */}
              <g stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="4 4" fill="none">
                {/* カストル側 */}
                <polyline points="100,50 120,100 110,150 80,200" />
                <polyline points="120,100 160,140 170,190" />
                {/* ポルックス側 */}
                <polyline points="200,60 190,110 210,160 230,210" />
                <polyline points="190,110 160,140" />
                {/* 双子をつなぐ線 */}
                <line x1="100" y1="50" x2="200" y2="60" />
              </g>
              {/* 星 */}
              <g fill="#ffffff">
                {/* カストル（Castor） */}
                <circle cx="100" cy="50" r="5" className="animate-pulse" />
                {/* ポルックス（Pollux） */}
                <circle cx="200" cy="60" r="6" className="animate-pulse" style={{ animationDelay: '1s' }} />
                
                {/* その他の星 */}
                <circle cx="120" cy="100" r="3" />
                <circle cx="110" cy="150" r="2.5" />
                <circle cx="80" cy="200" r="3" />
                
                <circle cx="160" cy="140" r="2" />
                <circle cx="170" cy="190" r="2.5" />
                
                <circle cx="190" cy="110" r="3" />
                <circle cx="210" cy="160" r="2.5" />
                <circle cx="230" cy="210" r="3" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="meteor top-[10%] left-[80%]"></div>
        <div className="meteor top-[30%] left-[60%] delay-2000"></div>
        <div className="meteor top-[50%] left-[90%] delay-4000"></div>
        <div className="meteor top-[20%] left-[40%] delay-1000"></div>
        <div className="meteor top-[70%] left-[70%] delay-3000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* (A) 問いかけキャッチコピー */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[22px] sm:text-3xl md:text-4xl font-black text-white leading-tight mb-8 drop-shadow-md"
          >
            経営の「<span className="text-[#FBBF24]">数字の悩み</span>」、<br />
            誰に相談していますか？
          </motion.h1>

          {/* (B) 悩みリストカード */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-[calc(100%-24px)] sm:w-full max-w-2xl bg-white rounded-[14px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-5 sm:p-8 mb-12 text-left mx-auto"
          >
            <ul className="space-y-4">
              <li className="flex items-start pb-4 border-b border-[#f0f0f0]">
                <div className="bg-[#fff3e0] p-1 rounded mr-3 shrink-0 mt-0.5">
                  <Check className="text-orange-500 w-4 h-4" strokeWidth={3} />
                </div>
                <span className="text-[14px] sm:text-base font-medium text-slate-800 leading-[1.6]">
                  利益は出ているのに、なぜか手元にお金が残らない
                </span>
              </li>
              <li className="flex items-start pb-4 border-b border-[#f0f0f0]">
                <div className="bg-[#fff3e0] p-1 rounded mr-3 shrink-0 mt-0.5">
                  <Check className="text-orange-500 w-4 h-4" strokeWidth={3} />
                </div>
                <span className="text-[14px] sm:text-base font-medium text-slate-800 leading-[1.6]">
                  税理士の先生には聞きにくい、「経営の未来」の相談相手がいない
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#fff3e0] p-1 rounded mr-3 shrink-0 mt-0.5">
                  <Check className="text-orange-500 w-4 h-4" strokeWidth={3} />
                </div>
                <span className="text-[14px] sm:text-base font-medium text-slate-800 leading-[1.6]">
                  投資やM&Aの判断を、数字の裏付けなく"勘"で決めてしまっている
                </span>
              </li>
            </ul>
          </motion.div>

          {/* (C) 解決提示 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 text-center"
          >
            <span className="inline-block bg-blue-600 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wider">
              SOLUTION
            </span>
            <h2 className="text-[16px] sm:text-xl font-bold text-white leading-relaxed drop-shadow-md">
              こんな悩み、実務派会計士の「<span className="text-white text-[18px] sm:text-[20px] font-black drop-shadow-sm">社外CFO</span>」がすべて解決します。
            </h2>
          </motion.div>

          {/* (D) 権威性ボックス */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-[calc(100%-24px)] sm:w-full max-w-2xl bg-gradient-to-br from-[#1a2744] to-[#243455] rounded-[12px] p-5 sm:p-6 border border-white/20 shadow-xl text-left mx-auto"
          >
            <p className="text-[15px] sm:text-lg font-bold text-white leading-relaxed">
              <span className="text-[#7ecfff]">M&Aの最前線</span>で企業を成長させた「実務派会計士」が、あなたの<span className="text-[#7ecfff]">最強の右腕</span>に。
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
