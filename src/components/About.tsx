import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">Profile</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              代表者プロフィール
            </h3>
            <div className="w-16 h-1 bg-blue-600 mb-8"></div>
            
            <div className="mb-8">
              <p className="text-xl font-bold text-slate-900 mb-2">代表 公認会計士・税理士 渡部 興二（わたなべ こうじ）</p>
              <p className="text-lg font-bold text-blue-700 bg-blue-50 inline-block px-4 py-2 rounded-md">
                【ご挨拶・メッセージ】 「現場で共に汗を流す。それが私の考える『専門家』のあり方です」
              </p>
            </div>
            
            <div className="space-y-6 text-base text-slate-700 leading-relaxed">
              <p>
                はじめまして。税務会計フラットパートナーズ代表の渡部興二と申します。
              </p>
              <p>
                私が仕事をする上で最も大切にしているのは、「目の前のお客様に尽くし、調和のとれたWIN-WINの関係を築くこと」です。これは、かつてORIXで営業の最前線に立っていた時代、お客様からいただいた「ありがとう」という感謝の言葉に、何にも代えがたいやりがいと充実感を感じた原体験から来ています。
              </p>
              <p>
                私は一般的な「外部から数字をチェックするだけ」の会計士ではありません。オリックスグループの事業投資部門を経て、M&Aの最前線である投資先企業に監査役や取締役として入り込み、現場の痛みを分かち合いながら組織を育て上げる「当事者」としての道を歩んできました。ハードな実務の傍ら、働きながら2020年に公認会計士登録を果たしたのも、現場の実務に裏打ちされた実践的な知識を、より多くの経営者の方々に届けたいという想いからでした。
              </p>
              <p>
                会計やファイナンスの専門用語は難解ですが、本質はシンプルな言葉に言い換えられます。私は専門用語の壁を可能な限り取り払い、経営者様が確信を持って意思決定できるよう、常に「フラット（対等）」な目線で向き合います。共に新しい光を見出し、企業の未来を共創するパートナーとして、全力で伴走いたします。
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="w-2 h-6 bg-blue-600 rounded-full mr-3"></span>
                略歴・実績
              </h4>
              <p className="text-sm font-medium text-slate-600 mb-6 bg-slate-100 p-3 rounded">
                M&Aにおける投資実務、常駐でのハンズオンでのPMI経験、そしてEXITまでの全工程を当事者として完遂した実績を有します。
              </p>
              
              <div className="mb-6 pb-6 border-b border-slate-100">
                <p className="font-bold text-slate-800">都立国分寺高校、明治大学法学部卒業</p>
              </div>

              <ul className="space-y-6 text-sm text-slate-700">
                <li className="flex flex-col sm:flex-row">
                  <span className="w-32 flex-shrink-0 font-bold text-blue-700 mb-1 sm:mb-0">1998年</span>
                  <span><span className="font-bold text-slate-900">オリックス株式会社入社</span>（本部営業、地方＜岐阜＞営業を経験）</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="w-32 flex-shrink-0 font-bold text-blue-700 mb-1 sm:mb-0">2009-2013年</span>
                  <span><span className="font-bold text-slate-900">オリックス経理部門（税務・M&A部門）</span><br/>オリックス単体の別表作成、税務調査対応・ M&A部門へのストラクチャー構築支援や連結決算取込を実施</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="w-32 flex-shrink-0 font-bold text-blue-700 mb-1 sm:mb-0">2013-2014年</span>
                  <span><span className="font-bold text-slate-900">外資系保険会社の日本法人への資本参加</span><br/>DDや投資モデル作成に従事し、シニアプロジェクトマネージャーとして常駐後は資産2兆円の開始BS作成</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="w-32 flex-shrink-0 font-bold text-blue-700 mb-1 sm:mb-0">2015-2016年</span>
                  <span><span className="font-bold text-slate-900">老舗医療機器ディーラーへの資本参加</span><br/>監査役として常駐、複数社の連結や日本基準へのコンバージョン・管理会計の立ち上げを完遂。</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="w-32 flex-shrink-0 font-bold text-blue-700 mb-1 sm:mb-0">2017-2023年</span>
                  <span><span className="font-bold text-slate-900">老舗BtoC企業（サービス業）への資本参加</span><br/>取締役就任。現場責任者として常駐し、上場企業水準のガバナンス構築を支援。2023年に全株式を売却しEXITを完遂。常駐中は老舗BtoC企業（サービス業）のロールアップ（追加のM&A）も実行。</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="w-32 flex-shrink-0 font-bold text-blue-700 mb-1 sm:mb-0">2020年</span>
                  <span><span className="font-bold text-slate-900">公認会計士登録</span><br/>働きながら試験に合格し、高度な実務経験と専門資格を融合。</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="w-32 flex-shrink-0 font-bold text-blue-700 mb-1 sm:mb-0">2025年</span>
                  <span><span className="font-bold text-slate-900">税理士登録</span></span>
                </li>
                <li className="flex flex-col sm:flex-row pt-4 border-t border-slate-100">
                  <span className="w-32 flex-shrink-0 font-bold text-blue-700 mb-1 sm:mb-0">現在</span>
                  <span>
                    <span className="font-bold text-slate-900">BlueWoksグループ（<a href="https://blueworks.co.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://blueworks.co.jp/</a>）顧問就任</span><br/>
                    <span className="font-bold text-slate-900">税務会計フラットパートナーズ 創業</span>
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
