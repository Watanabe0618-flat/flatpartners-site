import React from 'react';
import StarryBackground from './StarryBackground';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] md:min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
      <StarryBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/50 pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 pt-16 md:pt-0">
        {/* h1: モバイルはtext-2xlに縮小、余白も詰める */}
        <h1 className="text-2xl md:text-5xl font-bold text-white leading-tight mb-3 md:mb-8">
          売上づくりに、
          <span className="text-amber-400">100%集中</span>
          できていますか？
        </h1>

        {/* ペインポイント: モバイルはパディングと行間を圧縮 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-8 mb-3 md:mb-8 max-w-2xl mx-auto">
          <div className="space-y-1.5 md:space-y-4 text-left">
            <PainPoint text="利益は出ているのに、なぜか手元にお金が残らない" />
            <PainPoint text="税理士の先生には聞きにくい、「経営の未来」の相談相手がいない" />
            <PainPoint text='投資やM&Aの判断を、数字の裏付けなく "勘" で決めてしまっている' />
          </div>
        </div>

        {/* SOLUTION */}
        <div className="mb-0 md:mb-8 flex flex-col items-center">
          <div className="flex justify-center my-2 md:my-12">
            <svg
              className="w-16 h-16 md:w-20 md:h-20 text-amber-400 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <p className="text-base md:text-xl text-white font-bold mb-0 md:mb-2 leading-relaxed">
            こんな「数字の悩み」——<br className="md:hidden" />M&A先に役員常駐もした実務派会計士が、右腕となってすべて解決します。
          </p>
          {/* 権威テキスト: PCのみ表示（モバイルでは縦幅節約のため非表示） */}
          <div className="hidden md:block bg-slate-800/80 rounded-lg p-4 mt-4 max-w-2xl mx-auto mb-8">
            <p className="text-amber-400 font-bold text-sm md:text-base">
              経営者の隣で「一緒に考え、一緒に動く」。それがフラットパートナーズのスタンスです。
            </p>
          </div>

          {/* ヒーローCTA: PCのみ表示（モバイルは画面下部の固定フッターバーがCTA機能を担う） */}
          <div className="hidden md:flex justify-center gap-4 mt-8">
            <a
              href="https://line.me/R/ti/p/@602drfaq"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#06C755] hover:bg-[#05b34c] text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2 min-h-[48px]"
            >
              LINE で気軽に相談する
            </a>
            <a
              href="#contact"
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2 min-h-[48px]"
            >
              Web で問い合わせる
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PainPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <svg
        className="w-5 h-5 text-green-400 mt-1 shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <p className="text-white text-sm md:text-base">{text}</p>
    </div>
  );
}
