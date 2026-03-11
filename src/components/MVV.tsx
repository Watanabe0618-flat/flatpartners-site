import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Diamond } from 'lucide-react';

export default function MVV() {
  return (
    <section id="mvv" className="py-24 bg-white/60 backdrop-blur-xl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">Philosophy</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">ミッション・ビジョン・バリュー</h3>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        {/* Core Value Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-slate-100 text-center max-w-4xl mx-auto"
        >
          <h4 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
            専門用語の壁をなくし、<br className="sm:hidden" />
            経営と「<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">フラット</span>」に向き合う。
          </h4>
          <p className="text-slate-600 font-medium text-lg">
            これが、当事務所のコアバリューであり、すべての支援の原点です。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center mr-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-3xl font-black text-slate-900 tracking-tight">MISSION</h4>
                  <p className="text-sm font-bold text-blue-600">私たちの使命</p>
                </div>
              </div>
              <h5 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                情報の非対称性を克服し、経営者が「確信」をもって決断できる環境を創る
              </h5>
              <p className="text-slate-700 leading-relaxed font-medium">
                会計や税務、ファイナンスの専門用語は、時に経営の視界を曇らせます。私たちは難解な事象を「フラット（平易）」な言葉に翻訳し、経営者が直感と論理の両面から、迷いなく次の一手を打てる環境を提供します。
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center mr-6">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-3xl font-black text-slate-900 tracking-tight">VISION</h4>
                  <p className="text-sm font-bold text-blue-600">目指す未来</p>
                </div>
              </div>
              <h5 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                経営者と専門家が「フラット」に響き合い、共に新しい光を共創する社会へ
              </h5>
              <p className="text-slate-700 leading-relaxed font-medium">
                目指すのは、先生と生徒のような上下関係でも、単なる業務委託でもありません。互いに顔を突き合わせ、同じ目線を持つ「パートナー」として深く共鳴し合い、企業が自律的に成長し続けるWIN-WINの未来を社会に増やしていきます。
              </p>
            </div>
          </motion.div>
        </div>

        {/* Value */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-blue-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center mr-6">
                <Diamond className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h4 className="text-3xl font-black text-slate-900 tracking-tight">VALUE</h4>
                <p className="text-sm font-bold text-blue-600">3つの行動指針</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-start mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg mr-3">1</span>
                  <h5 className="text-lg font-bold text-slate-900 leading-tight pt-1">評論家ではなく、現場の当事者であれ</h5>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  投資、PMI、EXITまで、M&Aの最前線で取締役として組織を変革してきた泥臭い経験を活かし、机上の空論ではない、現場で確実に機能する仕組みと資金調達を支援します。
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-start mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg mr-3">2</span>
                  <h5 className="text-lg font-bold text-slate-900 leading-tight pt-1">壁を作らず、本質をシンプルに伝える</h5>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  複雑な情報を整理・分解し、経営の意思決定に直結する重要なポイントだけを抽出します。専門知識を振りかざすのではなく、常に経営者とフラットな関係で、わかりやすく対話します。
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-start mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg mr-3">3</span>
                  <h5 className="text-lg font-bold text-slate-900 leading-tight pt-1">目の前のお客様に尽くし、調和を重んじる</h5>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  すべての出発点は、目の前のお客様に喜んでいただくこと。誠実な対話を通じて課題に正面から向き合い、関わるすべての人々にとって調和のとれた最適解を導き出します。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
