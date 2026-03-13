import React from 'react';
import StarryBackground from './StarryBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
      <StarryBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/50 pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 mt-20">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
          売上づくりに、
          <span className="text-amber-400">100%集中</span>
          できていますか？
        </h1>

        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8 mb-8 max-w-2xl mx-auto shadow-2xl">
          <div className="space-y-4 text-left">
            <PainPoint text="利益は出ているのに、なぜか手元にお金が残らない" />
            <PainPoint text="税理士の先生には聞きにくい、「経営の未来」の相談相手がいない" />
            <PainPoint text='投資やM&Aの判断を、数字の裏付けなく "勘" で決めてしまっている' />
          </div>
        </div>

        <div className="mb-8">
          <span className="inline-block bg-blue-600/80 backdrop-blur-sm border border-blue-500/50 text-white text-xs font-bold tracking-widest px-4 py-1 rounded-full mb-4 shadow-lg">
            SOLUTION
          </span>
          <p className="text-lg md:text-xl text-white font-bold mb-2 drop-shadow-md">
            こんな「数字の悩み」——実務派会計士が、右腕となってすべて解決します。
          </p>
          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 mt-4 max-w-2xl mx-auto mb-8 shadow-xl">
            <p className="text-amber-400 font-bold text-sm md:text-base">
              投資・資金調達・M&Aの現場を走り続けてきた会計士が、あなたの隣で並走します。
            </p>
          </div>

          {/* ヒーローCTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="https://lin.ee/ZJEGfe1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#06C755] hover:bg-[#05b34c] text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-lg shadow-[#06C755]/20 flex items-center justify-center gap-2 min-h-[48px]"
            >
              LINE で気軽に相談する
            </a>
            <a
              href="#contact"
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 min-h-[48px]"
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
        className="w-5 h-5 text-green-400 mt-1 shrink-0 drop-shadow-md"
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
      <p className="text-slate-100 text-sm md:text-base font-medium drop-shadow-sm">{text}</p>
    </div>
  );
}
