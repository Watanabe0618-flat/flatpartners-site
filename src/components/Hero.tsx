import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckSquare } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Hero() {
  // Force rebuild: White card visibility check
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-blue-950">
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
            /* 
             * ユーザー様へ: 
             * Bing Image Creatorのリンク（https://sl.bing.net/HBvig0iQBo）は直接画像として読み込めないため、
             * 雰囲気が近い代替画像（Unsplash）を設定しています。
             * 
             * ご指定の画像を使用したい場合は、以下の手順で差し替えてください：
             * 1. Bing Image Creatorから画像をダウンロードします。
             * 2. プロジェクトの `public` フォルダに配置します（例: `my-bing-aurora-2.jpg`）。
             * 3. 以下の `src` を `/my-bing-aurora-2.jpg` に書き換えてください。
             */
            src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop" 
            alt="Aurora" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          
          {/* ふたご座（Gemini Constellation） */}
          {/* オーロラと一緒に動くように、同じコンテナ内に配置しています */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Catchphrase & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              専門用語の壁をなくし、<br />
              経営と<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 drop-shadow-[0_0_15px_rgba(20,184,166,0.5)]">「フラット」</span>に向き合う。
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 font-bold mb-8 leading-relaxed">
              M&Aの最前線で企業を成長させた<br className="hidden sm:block" />
              「実務派会計士」が、あなたの最強の右腕に。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
               <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all flex items-center justify-center hover:scale-105">
                 無料相談はこちら <ArrowRight className="ml-2 h-5 w-5" />
               </a>
               <a href="#services" className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full border border-white/30 backdrop-blur-sm transition-all flex items-center justify-center hover:bg-white/20">
                 サービス詳細を見る
               </a>
            </div>
          </motion.div>

          {/* Right Column: Pain Points Card (White Semi-transparent) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Card Body */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl border border-white/50 text-slate-800 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-teal-400"></div>
              
              <div className="text-center mb-5">
                <h3 className="inline-block bg-blue-50 text-blue-800 font-bold px-4 py-2 rounded-full text-sm sm:text-base border border-blue-100 shadow-sm">
                  一つでも当てはまるなら、すぐにご相談ください。
                </h3>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start bg-white border border-slate-200 p-3.5 sm:p-4 rounded-xl shadow-sm">
                  <CheckSquare className="text-orange-500 mr-3 shrink-0 mt-0.5" size={22} />
                  <span className="text-sm sm:text-base font-bold text-slate-700 leading-snug">利益は出ているのに、なぜかお金がない</span>
                </li>
                <li className="flex items-start bg-white border border-slate-200 p-3.5 sm:p-4 rounded-xl shadow-sm">
                  <CheckSquare className="text-orange-500 mr-3 shrink-0 mt-0.5" size={22} />
                  <span className="text-sm sm:text-base font-bold text-slate-700 leading-snug">M&Aの買い時・売り時、統合に悩んでいる</span>
                </li>
                <li className="flex items-start bg-white border border-slate-200 p-3.5 sm:p-4 rounded-xl shadow-sm">
                  <CheckSquare className="text-orange-500 mr-3 shrink-0 mt-0.5" size={22} />
                  <span className="text-sm sm:text-base font-bold text-slate-700 leading-snug">今の税理士に「未来の相談」ができない</span>
                </li>
              </ul>

              <div className="text-center bg-blue-50/80 rounded-xl p-4 mb-6 border border-blue-100">
                <p className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed">
                  その悩み、実務派会計士の<br className="sm:hidden" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600 text-lg sm:text-xl font-black mx-1">「社外CFO」</span>がすべて解決します。
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-500 text-white text-sm sm:text-base font-bold px-6 py-3.5 rounded-full shadow-md w-full sm:w-auto">
                  初回相談無料・秘密厳守
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-teal-400 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
