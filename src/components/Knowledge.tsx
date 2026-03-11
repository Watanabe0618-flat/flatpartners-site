import React from 'react';
import { motion } from 'motion/react';
import { Download, FileText, ExternalLink } from 'lucide-react';

const knowledgeCategories = [
  {
    category: 'カテゴリー1：社外CFO・経営管理体制',
    items: [
      {
        title: '経営を加速させる新しい選択肢「社外CFO」',
        description: '「利益は出ているのに現金がない」といった悩みを解決する、成長企業のための社外CFOの役割と、既存の顧問税理士先生との役割分担マップです。',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
        buttons: [
          { label: '社外CFO説明資料 を開く', link: 'https://1drv.ms/b/c/48fc6611d8ccd3cf/IQCLPTFg62GsQa2UohNzHJHCAQECVZIEAqe8ojOsamhF2Dw?e=8VFMev' },
          { label: '社外CFOと顧問税理士の役割分担 を開く', link: 'https://1drv.ms/b/c/48fc6611d8ccd3cf/IQDl2ihGlYwJQ7J7c3SdaNHoAcP7Nsex-LxuRVaitnzArJo?e=X28a7L' },
        ]
      },
      {
        title: '「勘ピューター経営」からの脱却と「変動損益計算」',
        description: '直感や経験への依存を捨て、データに基づく意思決定の基盤を作るためのステップと、未来の利益を設計する変動損益計算の概要です。',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        buttons: [
          { 
            label: '脱・勘ピュータ経営 を開く', 
            link: 'https://1drv.ms/b/c/48fc6611d8ccd3cf/IQAkfyKhrgoeTqQbwctcXgULAbPtTjLsXtcRoScfNQnpu8Y?e=6uUcwC' 
          },
          { 
            label: '変動損益計算の概要と実例 を開く', 
            link: 'https://1drv.ms/b/c/48fc6611d8ccd3cf/IQBas-6jpylPSYXVc0SQiKG0ASJGsjnXryxugtpizboZiEE?e=SKJH81' 
          },
        ]
      }
    ]
  },
  {
    category: 'カテゴリー2：資金調達・投資判断',
    items: [
      {
        title: '会社の命運を分ける「設備投資の意思決定」',
        description: 'なんとなくの直感ではなく、回収期間や現在価値（NPV）などのデータを用いて、投資回収のタイムライン（Jカーブ）を可視化するアプローチです。',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
        buttons: [
          { label: '設備投資の意思決定 を開く', link: 'https://1drv.ms/b/c/48fc6611d8ccd3cf/IQDT2XasM0cXQKI7MoYa8jEWASpLNkTChHBW5r-fZU1FfzY?e=EapgsE' },
        ]
      },
      {
        title: '銀行員はここを見ている！「銀行対策とCF予測」',
        description: '夢を語る前に「返済の確実性」を数字で証明するための、資金調達を成功させるキャッシュフロー予測のポイントを解説します。',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
        buttons: [
          { label: '銀行対策 を開く', link: 'https://1drv.ms/b/c/48fc6611d8ccd3cf/IQAvR8Akb9CISqBxpLcplvMMAfkO3P9cc7AOGWPfFalBk8c?e=2dCush' },
        ]
      }
    ]
  },
  {
    category: 'カテゴリー3：M&A・企業価値評価',
    items: [
      {
        title: '会社の値段はどう決まる？「株価算定（バリュエーション）」',
        description: 'M&Aの現場でプロが使う「価値を測る3つのレンズ（コスト・マーケット・インカム）」と、見えない価値（のれん）の正体を解説します。',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
        buttons: [
          { label: '株価算定ロジック（簡易版）を開く', link: 'https://1drv.ms/b/c/48fc6611d8ccd3cf/IQB-H1OjVDZPTqLA7Vd6FyziAVEC5guo6W9TR76fO-8OFg8?e=QjsMkI' },
          { label: '株価算定ロジック（標準版）を開く', link: 'https://1drv.ms/b/c/48fc6611d8ccd3cf/IQCzGi2NNTEwT52mXWD4LH0TAYngsDZ5IRROt3NYt-dH8ik?e=QRXO5Y' },
        ]
      }
    ]
  }
];

export default function Knowledge() {
  return (
    <section id="knowledge" className="py-24 bg-white/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">Knowledge Base</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">分野別豆知識</h3>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            経営に役立つ専門的な知見を、分かりやすい資料にまとめました。<br className="hidden md:block" />
            どなたでも無料でダウンロードいただけます。
          </p>
        </div>

        <div className="space-y-20">
          {knowledgeCategories.map((cat, catIndex) => (
            <div key={catIndex}>
              <div className="flex items-center gap-4 mb-10">
                <h4 className="text-xl font-bold text-blue-900 bg-blue-50 px-6 py-2 rounded-full border border-blue-100 shadow-sm">
                  {cat.category}
                </h4>
                <div className="flex-grow h-px bg-gradient-to-r from-blue-200 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col h-full group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <h5 className="text-xl font-bold text-slate-900 mb-3 leading-tight">■ {item.title}</h5>
                      <p className="text-slate-600 mb-8 flex-grow text-sm leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="space-y-3">
                        {item.buttons.map((btn, btnIndex) => (
                          <a 
                            key={btnIndex}
                            href={btn.link}
                            className="inline-flex items-center justify-between w-full px-4 py-3 bg-blue-50 text-blue-700 text-sm font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 group/btn shadow-sm hover:shadow-md"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="flex items-center">
                              <FileText className="w-4 h-4 mr-2 flex-shrink-0" />
                              <span>{btn.label}</span>
                            </div>
                            <ExternalLink className="w-4 h-4 opacity-50 group-hover/btn:opacity-100" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
