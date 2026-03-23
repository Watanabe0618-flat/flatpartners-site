import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AchievementSummary from './components/AchievementSummary';
import Services from './components/Services';
import Knowledge from './components/Knowledge';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import LineFloatingButton from './components/LineFloatingButton';
import LegalModal from './components/LegalModal';
import MVV from './components/MVV';
import { ChevronUp } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeModal, setActiveModal] = useState<'privacy' | 'disclaimer' | null>(null);

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

  const privacyContent = (
    <div className="space-y-4">
      <h4 className="font-bold text-lg mb-2">1. 個人情報の取得</h4>
      <p>当事務所は、適法かつ公正な手段によって、個人情報を取得いたします。</p>
      
      <h4 className="font-bold text-lg mb-2 mt-6">2. 個人情報の利用</h4>
      <p>当事務所は、個人情報を、取得の際に示した利用目的の範囲内で、業務の遂行上必要な限りにおいて利用します。</p>
      
      <h4 className="font-bold text-lg mb-2 mt-6">3. 個人情報の第三者提供</h4>
      <p>当事務所は、法令に定める場合を除き、個人情報を、事前に本人の同意を得ることなく、第三者に提供しません。</p>
      
      <h4 className="font-bold text-lg mb-2 mt-6">4. 個人情報の管理</h4>
      <p>当事務所は、個人情報の正確性を保ち、これを安全に管理致します。</p>
    </div>
  );

  const disclaimerContent = (
    <div className="space-y-4">
      <p>当ウェブサイトに掲載されている情報の正確性については万全を期しておりますが、当事務所は利用者が当ウェブサイトの情報を用いて行う一切の行為について、何ら責任を負うものではありません。</p>
      <p>当ウェブサイトの利用により発生した利用者の損害及び利用者が第三者に与えた損害については、当事務所は一切の責任を負わないものとします。</p>
      <p>当ウェブサイトからリンクされている他サイトの情報、サービス等について、当事務所は一切の責任を負いません。</p>
      <p>当ウェブサイトに掲載されている情報は、予告なしに変更または削除されることがありますので、あらかじめご了承ください。</p>
    </div>
  );

  return (
    // スマホ用固定CTAバーの高さ分（約72px）の余白を最下部に設ける
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-[72px] md:pb-0">
      <Header />
      
      <main>
        <Hero />
        <AchievementSummary />
        <Services />
        <MVV />
        <Knowledge />
        <About />
        <Contact />
      </main>

      <Footer 
        onOpenPrivacy={() => setActiveModal('privacy')}
        onOpenDisclaimer={() => setActiveModal('disclaimer')}
      />

      <FloatingCTA />
      <LineFloatingButton />

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 p-3 bg-slate-800 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-slate-700 focus:outline-none z-40 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        } bottom-[100px] md:bottom-6`}
        aria-label="ページトップへ戻る"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Modals */}
      <LegalModal
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        title="プライバシーポリシー"
        content={privacyContent}
      />
      <LegalModal
        isOpen={activeModal === 'disclaimer'}
        onClose={() => setActiveModal(null)}
        title="免責事項"
        content={disclaimerContent}
      />
    </div>
  );
}

export default App;
