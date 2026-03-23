import React from 'react';

export default function AchievementSummary() {
  const achievements = [
    {
      title: 'M&Aに携わって約15年',
      description: 'ORIXで税務・ストラクチャーのアドバイザリー業務を経て、事業投資部門でDD・投資実行からEXITまでを一貫して経験しました。助言する側と、当事者として手を動かす側の両方を知っています。',
    },
    {
      title: '投資先3社に常駐',
      description: '総資産2兆円の外資系保険会社、東京・千葉トップシェアの医療機器卸、福岡のBtoC企業。株主側の立場で現場に入りましたが、実際にやっていたのは会社の方と一緒に手を動かすことでした。管理体制の構築からEXITまでを現場で経験しています。',
    },
    {
      title: '公認会計士・税理士',
      description: '働きながら公認会計士試験に合格。財務・税務の両面から、経営者の判断材料を整理します。',
    },
  ];

  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-12">
          なぜフラットパートナーズが選ばれるのか
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12 text-center">
        <p className="text-sm md:text-base text-slate-700 mb-4">
          noteやXをご覧いただいた方へ——まずは60分の無料壁打ち相談から
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="https://line.me/R/ti/p/@602drfaq"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#06C755] hover:bg-[#05b34c] text-white font-bold py-3 px-8 rounded-full transition-colors text-sm"
          >
            LINEで相談する
          </a>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-slate-600 hover:text-slate-900 font-medium py-3 px-8 rounded-full transition-colors text-sm border border-slate-300"
          >
            お問い合わせフォーム
          </button>
        </div>
      </div>
    </section>
  );
}
