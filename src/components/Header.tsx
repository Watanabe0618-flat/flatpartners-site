import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ホーム', href: '#home' },
    { name: '事業内容', href: '#services' },
    { name: 'MVV', href: '#mvv' },
    { name: '分野別豆知識', href: '#knowledge' },
    { name: '代表プロフィール', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-slate-100 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3 group">
              <BrandLogo theme="dark" className="w-10 h-10 group-hover:scale-105 transition-transform" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-blue-900 tracking-tight leading-none mb-1 font-serif">税務会計フラットパートナーズ</span>
                <span className="text-[9px] text-teal-600 font-bold tracking-[0.15em] uppercase leading-none">Flat Partners Tax & Accounting</span>
                <span className="text-[7px] text-slate-500 font-medium tracking-wider mt-0.5">Certified Public Accountant · Tax Advisor</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-700 hover:text-blue-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col items-end border-l border-slate-200 pl-6 lg:pl-8">
              <div className="text-[10px] text-slate-500 font-bold mb-0.5">【初回無料】経営・財務の壁打ち相談専用ダイヤル</div>
              <a href="tel:05017201202" className="flex items-center text-blue-700 font-bold text-lg hover:text-orange-500 transition-colors leading-none">
                <Phone className="w-4 h-4 mr-1" />
                050-1720-1202
              </a>
              <div className="text-[10px] text-slate-500 mt-0.5">受付：平日 10:00〜18:00</div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-colors shadow-sm whitespace-nowrap"
            >
              無料相談・お問い合わせ
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <a href="tel:05017201202" className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-bold text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full text-center mt-4 px-5 py-3 border border-transparent text-base font-bold rounded-md text-white bg-blue-700 hover:bg-blue-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              無料相談・お問い合わせ
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
