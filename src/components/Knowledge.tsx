import React from 'react';

const STEPS = [
  {
    step: 1,
    mood: '「なんかヤバい気がする」',
    subtitle: 'まず現状を知る',
    cards: [
      {
        title: '「勘ピューター経営」からの脱却',
        description:
          '資金ショートの危機を「たまたま」乗り切ることを繰り返していませんか？直感への依存を捨て、データに基づく意思決定の基盤を作るための最初の一歩です。',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        links: [
          { label: '脱・勘ピュータ経営 を読む', url: 'https://1drv.ms/b/c/48fc6611d8ccd3cf/IQBdV315CiNWS5ULp_2NpLOyAX5EjbXgmA88pRJtS9XK6Gw?e=fJaCs5' },
        ],
      },
    ],
  },
  {
    step: 2,
    mood: '「利益は出てるのに、お金がない」',
    subtitle: '利益構造を見える化する',
    cards: [
      {
        title: '経営判断のための「利益の方程式」',
        description:
          'P（単価）× Q（数量）− V（変動費）− F（固定費）＝ G（利益）。たった5つの記号で、利益創出の仕組みを読み解きます。',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
        links: [
          { label: '変動損益計算の実例 を読む', url: 'https://1drv.ms/b/c/48fc6611d8ccd3cf/IQAVjeCwphKXSJr8s29gKckCAUHfxwrMk3eRQQJrkIS_rNA?e=Uia45Y' },
        ],
      },
    ],
  },
  {
    step: 3,
    mood: '「銀行 / 投資で具体的に困った」',
    subtitle: '資金と投資を数字で判断する',
    cards: [
      {
        title: '銀行員はここを見ている！「銀行対策とCF予測」',
        description:
          '「夢」を語る前に、「返済の確実性」を数字で証明する。資金調達を成功させるキャッシュフロー予測のポイントを解説します。',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
        links: [
          { label: '銀行対策マニュアル を読む', url: 'https://1drv.ms/b/c/48fc6611d8ccd3cf/IQBZMp2yXo8IT4290PYGgCcGASs97xxJSfIpDTQx_mHu85U?e=74i3xj' },
        ],
      },
      {
        title: '会社の命運を分ける「設備投資の意思決定」',
        description:
          'なんとなくの直感ではなく、回収期間・NPV・IRRなどのデータを用いて、投資回収のタイムラインを可視化するアプローチです。',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
        links: [
          { label: '設備投資の意思決定 を読む', url: 'https://1drv.ms/b/c/48fc6611d8ccd3cf/IQCQ6643rHSzQ5f8vXTWzHOYAaPC3mBcmOPzs2f2N7ZGSPM?e=Yf1yYG' },
        ],
      },
    ],
  },
  {
    step: 4,
    mood: '「そろそろ誰かに任せたい」',
    subtitle: '専門家と一緒に実行する',
    cards: [
      {
        title: '経営を加速させる新しい選択肢「社外CFO」',
        description:
          '売上づくりに集中したいのに、お金の仕事に時間を取られていませんか？成長する中堅・中小企業の賢い選択肢です。',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
        links: [
          { label: '社外CFOの活用法 を読む', url: 'https://1drv.ms/b/c/48fc6611d8ccd3cf/IQAnRefWZIh4S7yywFsZm8f3Aa40HLMGMTnWYJ-0FlDmQP8?e=D4WAuY' },
        ],
      },
      {
        title: '顧問税理士先生と「社外CFO」の役割分担マップ',
        description:
          '既存の先生との関係性はそのままに、「守り」と「攻め」の両輪で強力な経営チームを構築します。',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
        links: [
          { label: '役割分担マップ を読む', url: 'https://1drv.ms/b/c/48fc6611d8ccd3cf/IQDoB12m2r7XSK4z-CBNyl1_Aa7Ej-MPRjCTSSvpScyGCtw?e=horIrJ' },
        ],
      },
    ],
  },
  {
    step: 5,
    mood: '「会社の出口を考え始めた」',
    subtitle: '会社の価値を知る',
    cards: [
      {
        title: '会社の値段はどう決まる？「株価算定（バリュエーション）」',
        description:
          'M&Aの現場でプロが使う「価値を測る3つのレンズ」と、見えない価値（のれん）の正体を解説します。',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
        links: [
          { label: '株価算定ロジック（簡易版）を読む', url: 'https://1drv.ms/b/c/48fc6611d8ccd3cf/IQCHxdUsE-oBTLLMyj5JNnhsAbdZEb38NFcvDTYP9tYdhy4?e=OHbqza' },
          { label: '株価算定ロジック（標準版）を読む', url: 'https://1drv.ms/b/c/48fc6611d8ccd3cf/IQCz7pSEQxAJRYRfyBRqYwjhAX9MiC9IfK16vvvo_wCW9mw?e=dH2s9g' },
        ],
      },
    ],
  },
];

function StepBadge({
  step,
  mood,
  subtitle,
}: {
  step: number;
  mood: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-600 text-white font-bold text-lg shrink-0 shadow-lg shadow-blue-600/30">
        {step}
      </div>
      <div>
        <p className="text-blue-600 font-bold text-sm tracking-wider">
          STEP {step}
        </p>
        <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-tight">
          {mood}
          <span className="block md:inline text-sm md:text-base font-normal text-slate-500 md:ml-2 mt-1 md:mt-0">
            ——{subtitle}
          </span>
        </h3>
      </div>
    </div>
  );
}

function KnowledgeCard({
  title,
  description,
  image,
  links,
}: {
  title: string;
  description: string;
  image: string;
  links: { label: string; url: string }[];
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="aspect-video bg-slate-100 overflow-hidden">
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
          aria-hidden="true"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-lg font-bold text-slate-800 mb-3 leading-snug">
          ■ {title}
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        <div className="space-y-3 mt-auto">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 px-4 py-3 rounded-lg text-sm font-semibold transition-all min-h-[44px]"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                {link.label}
              </span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Knowledge() {
  return (
    <section id="knowledge" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold text-sm tracking-widest">
            KNOWLEDGE BASE
          </span>
          <h2 className="text-3xl font-bold text-slate-800 mt-2 mb-4">
            分野別豆知識
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            経営に役立つ専門的な知見を、分かりやすい資料にまとめました。
            <br />
            どなたでも無料でダウンロードいただけます。
          </p>
        </div>

        <div className="text-center mb-12">
          <div className="inline-block bg-white border border-blue-200 rounded-full px-6 py-2 shadow-sm">
            <p className="text-blue-700 font-medium text-sm">
              御社の状況に近いステップから、お読みください
            </p>
          </div>
        </div>

        <div className="space-y-12 md:space-y-16">
          {STEPS.map((stepData) => (
            <div key={stepData.step}>
              <StepBadge
                step={stepData.step}
                mood={stepData.mood}
                subtitle={stepData.subtitle}
              />
              <div
                className={`grid gap-6 md:ml-16 ${
                  stepData.cards.length === 1
                    ? 'grid-cols-1 max-w-2xl'
                    : 'grid-cols-1 md:grid-cols-2'
                }`}
              >
                {stepData.cards.map((card, i) => (
                  <KnowledgeCard key={i} {...card} />
                ))}
              </div>
              {stepData.step < 5 && (
                <div className="hidden md:flex justify-start ml-[1.35rem] mt-8">
                  <div className="w-0.5 h-12 bg-slate-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* セクション末尾CTA */}
        <div className="mt-24 max-w-4xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            どのステップから始めればいいか、迷っていませんか？
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            いま、成長企業の経営者が「お金まわり」で何を感じているか、
            <br className="hidden md:block" />
            現場の声を聞かせていただいています。
            <br className="hidden md:block" />
            セールスではありません。30分ほど、お気軽にお話ししませんか？
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="bg-[#06C755] hover:bg-[#05b34c] text-white font-bold py-4 px-8 rounded-full transition-colors flex items-center justify-center gap-2 min-h-[48px]"
            >
              LINE で気軽に相談する
            </a>
            <a
              href="#contact"
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-4 px-8 rounded-full transition-colors flex items-center justify-center gap-2 min-h-[48px]"
            >
              Web で問い合わせる
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
