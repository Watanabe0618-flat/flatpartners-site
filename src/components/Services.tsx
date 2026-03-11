import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, LineChart, Building } from 'lucide-react';

const services = [
  {
    icon: <LineChart className="h-10 w-10 text-blue-600" />,
    title: '社外CFO・経営管理体制の構築',
    subtitle: '',
    description: '「利益は出ているのに現金がない」といった課題に対し、データに基づく組織的な経営へ移行したい企業様の右腕となります。決算書（BS/PL/CF）のつながりを正しく理解いただくこともサービスの一つと考え、会計データを未来の意思決定のための言葉に翻訳し、論理的かつ実行可能な管理体制をゼロから構築します。',
    list: [
      '決算書（BS/PL/CF）の相関理解と活用支援',
      '資金繰り表の作成とキャッシュフロー管理',
      '管理会計体制構築',
      '予算・事業計画の策定'
    ]
  },
  {
    icon: <Building className="h-10 w-10 text-blue-600" />,
    title: '税務・会計顧問サービス',
    subtitle: '',
    description: '顧問税理士としての基本的な税務申告はもちろん、会計面でのご相談も幅広く承ります。経営者が「本業の成長」に集中できる環境を整え、未来の経営に活きる強靭な数字の基盤を作ります。',
    list: [
      '法人税・消費税等の税務申告・税務相談',
      '日常的な会計・財務に関する相談・セカンドオピニオン',
      '月次決算の早期化と経営数値の可視化',
      'クラウド会計ソフトの活用支援'
    ]
  },
  {
    icon: <Briefcase className="h-10 w-10 text-blue-600" />,
    title: 'M&A・財務アドバイザリー',
    subtitle: '（投資からPMI・EXITまで）',
    description: 'M&A投資時のデューデリジェンス（会社の健康診断。通称DD）や企業価値評価（バリュエーション）のレポート作成と、PMIフェーズでもご支援が可能です。',
    list: [
      '財務・税務デューデリジェンス（DD）およびストラクチャー構築',
      '企業価値評価（バリュエーション）',
      'レポート提出後の継続的な経営サポート（PMI実行支援・組織再構築等）'
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">事業内容</h3>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <h4 className="text-xl font-bold text-slate-800 mb-4">企業の成長フェーズに合わせた、3つの実践的アプローチ</h4>
          <p className="text-lg text-slate-600">
            企業の現在の課題と、目指すべき未来の姿をフラットな目線で共有し、経営の「確信」となる次の一手を共に実行していくための3つの柱をご用意しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                {React.cloneElement(service.icon, {
                  className: 'h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300',
                })}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">{service.title}</h4>
              {service.subtitle && <p className="text-sm font-bold text-blue-600 mb-4">{service.subtitle}</p>}
              {!service.subtitle && <div className="mb-4"></div>}
              
              <p className="text-slate-600 leading-relaxed text-sm mb-6 flex-grow">
                {service.description}
              </p>
              
              <div className="bg-slate-50 p-4 rounded-lg mt-auto">
                <p className="text-xs font-bold text-slate-800 mb-2">【主な支援内容】</p>
                <ul className="space-y-2">
                  {service.list.map((item, i) => (
                    <li key={i} className="text-xs text-slate-600 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
