import React from 'react';
import BrandLogo from './BrandLogo';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenDisclaimer: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenDisclaimer }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <BrandLogo theme="light" className="w-12 h-12 opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight leading-none mb-1 font-serif">税務会計フラットパートナーズ</span>
                <span className="text-[10px] text-teal-400 font-medium tracking-[0.15em] uppercase leading-none">Flat Partners Tax & Accounting</span>
                <span className="text-[8px] text-slate-500 font-normal tracking-wider mt-1">Certified Public Accountant · Tax Advisor</span>
              </div>
            </a>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              経営の次の一手を、確かな数字と戦略で導く。<br />
              高度なM&A・財務アドバイザリーから社外CFOまで、企業価値最大化を支援します。
            </p>
            <div className="mt-6 text-sm text-slate-400 space-y-1">
              <p>〒162-0825 東京都新宿区神楽坂2-17 中央ビル7F</p>
              <p>Email: info@flatpartners.net</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">リンク</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">ホーム</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">事業内容</a></li>
              <li><a href="#mvv" className="hover:text-white transition-colors">MVV</a></li>
              <li><a href="#knowledge" className="hover:text-white transition-colors">分野別豆知識</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">代表プロフィール</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">その他</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  プライバシーポリシー
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenDisclaimer}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  免責事項
                </button>
              </li>
              <li><a href="#contact" className="hover:text-white transition-colors">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Tax & Accounting Flat Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
