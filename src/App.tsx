import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import MVV from './components/MVV';
import Services from './components/Services';
import Knowledge from './components/Knowledge';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import LineFloatingButton from './components/LineFloatingButton';
import LegalModal from './components/LegalModal';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'disclaimer' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 relative">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-50">
        <motion.div 
          animate={{ x: [0, 40, -20, 0], y: [0, -60, 30, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-200/20 blur-[120px] mix-blend-multiply"
        />
        <motion.div 
          animate={{ x: [0, -50, 30, 0], y: [0, 40, -50, 0], scale: [1, 0.9, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-teal-200/20 blur-[120px] mix-blend-multiply"
        />
      </div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <MVV />
          <Knowledge />
          <About />
          <Contact />
        </main>
        <Footer onOpenPrivacy={() => setActiveLegalModal('privacy')} onOpenDisclaimer={() => setActiveLegalModal('disclaimer')} />
      </div>

      <FloatingCTA />
      <LineFloatingButton />

      <LegalModal
        isOpen={activeLegalModal !== null}
        onClose={() => setActiveLegalModal(null)}
        title={activeLegalModal === 'privacy' ? 'プライバシーポリシー' : '免責事項'}
        content={
          activeLegalModal === 'privacy' ? (
            <div className="space-y-4 text-left">
              <p>税務会計フラットパートナーズ（以下「当事務所」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。</p>
              
              <h4 className="font-bold text-slate-800 mt-4">1. 個人情報の管理</h4>
              <p>当事務所は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。</p>
              
              <h4 className="font-bold text-slate-800 mt-4">2. 個人情報の利用目的</h4>
              <p>お客さまからお預かりした個人情報は、当事務所からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。</p>
              
              <h4 className="font-bold text-slate-800 mt-4">3. 個人情報の第三者への開示・提供の禁止</h4>
              <p>当事務所は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>お客さまの同意がある場合</li>
                <li>お客さまが希望されるサービスを行なうために当事務所が業務を委託する業者に対して開示する場合</li>
                <li>法令に基づき開示することが必要である場合</li>
              </ul>

              <h4 className="font-bold text-slate-800 mt-4">4. ご本人の照会</h4>
              <p>お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。</p>

              <h4 className="font-bold text-slate-800 mt-4">5. 法令、規範の遵守と見直し</h4>
              <p>当事務所は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。</p>

              <h4 className="font-bold text-slate-800 mt-4">6. お問い合わせ</h4>
              <p>当事務所の個人情報の取扱に関するお問い合せは下記までご連絡ください。</p>
              <p className="mt-2 text-sm">
                税務会計フラットパートナーズ<br />
                〒162-0825 東京都新宿区神楽坂2-17 中央ビル7F<br />
                Mail: <a href="mailto:info@flatpartners.net?subject=%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B&body=%E3%81%8A%E5%90%8D%E5%89%8D%EF%BC%9A%0D%0A%E9%9B%BB%E8%A9%B1%E7%95%AA%E5%8F%B7%EF%BC%9A%0D%0A%E3%83%A1%E3%83%BC%E3%83%AB%E3%82%A2%E3%83%89%E3%83%AC%E3%82%B9%EF%BC%9A%0D%0A%E3%81%94%E7%9B%B8%E8%AB%87%E5%86%85%E5%AE%B9%EF%BC%9A" className="text-blue-600 hover:underline">info@flatpartners.net</a>
              </p>
            </div>
          ) : (
            <div className="space-y-4 text-left">
              <h4 className="font-bold text-slate-800">1. 情報の正確性について</h4>
              <p>当サイトのコンテンツや情報において、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなったりすることもあり、必ずしもその正確性を保証するものではありません。また、合法性や安全性なども保証しません。</p>

              <h4 className="font-bold text-slate-800 mt-4">2. 損害等の責任について</h4>
              <p>当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますので、ご了承ください。また、当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。</p>

              <h4 className="font-bold text-slate-800 mt-4">3. 著作権について</h4>
              <p>当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。当サイトは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、お問い合わせフォームよりご連絡ください。迅速に対応いたします。</p>

              <h4 className="font-bold text-slate-800 mt-4">4. リンクについて</h4>
              <p>当サイトは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。</p>
            </div>
          )
        }
      />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-40 right-4 md:bottom-28 md:right-8 z-40 p-3 bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-800 transition-colors"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
