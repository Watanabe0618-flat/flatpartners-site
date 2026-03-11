import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'M&A（投資・PMI・EXIT）',
    details: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const formDataObj = new URLSearchParams();
      formDataObj.append('form-name', 'contact');
      formDataObj.append('bot-field', ''); // ハニーポットフィールド（空で送信）
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('phone', formData.phone);
      formDataObj.append('category', formData.category);
      formDataObj.append('details', formData.details);

      await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataObj.toString(),
      });

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: 'M&A（投資・PMI・EXIT）',
        details: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">無料相談・お問い合わせ</h3>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            まずは、お気軽にお問合せください。「こんなことを相談してもいいのかな？」という内容でも大丈夫です。<br />
            料金は、案件の内容や企業規模、ご状況に合わせて柔軟に対応させて頂きます。まずはお気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            <div className="bg-blue-900 text-white p-8 lg:p-10 rounded-3xl shadow-xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl -mr-20 -mt-20 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-700 rounded-full blur-3xl -ml-20 -mb-20 opacity-50"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <h4 className="text-2xl font-bold mb-8 flex items-center">
                  <MessageSquare className="mr-3 h-6 w-6 text-blue-300" />
                  Contact Info
                </h4>
                
                <div className="space-y-12 flex-grow flex flex-col justify-center">
                  <div className="flex items-start">
                    <Mail className="h-8 w-8 text-blue-300 mr-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-blue-200 mb-1">メールでのお問い合わせ</p>
                      <p className="text-2xl font-medium">
                        <a href="mailto:info@flatpartners.net?subject=%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B&body=%E3%81%8A%E5%90%8D%E5%89%8D%EF%BC%9A%0D%0A%E9%9B%BB%E8%A9%B1%E7%95%AA%E5%8F%B7%EF%BC%9A%0D%0A%E3%83%A1%E3%83%BC%E3%83%AB%E3%82%A2%E3%83%89%E3%83%AC%E3%82%B9%EF%BC%9A%0D%0A%E3%81%94%E7%9B%B8%E8%AB%87%E5%86%85%E5%AE%B9%EF%BC%9A" className="hover:text-white transition-colors underline decoration-blue-400/50 underline-offset-4">
                          info@flatpartners.net
                        </a>
                      </p>
                      <p className="text-sm text-blue-200 mt-1">24時間受付</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-8 w-8 text-blue-300 mr-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-blue-200 mb-1">所在地</p>
                      <p className="text-xl leading-relaxed">
                        〒162-0825<br />
                        東京都新宿区神楽坂2-17<br />
                        中央ビル7F
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-slate-100 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center h-full text-center py-10"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">送信が完了しました</h4>
                  <p className="text-slate-600 mb-8 max-w-sm">
                    お問い合わせありがとうございます。内容を確認次第、担当者よりご連絡させていただきます。
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    フォームに戻る
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">お問い合わせフォーム</h4>
                  <p className="text-[13px] sm:text-[14px] text-[#6e7891] mb-6">
                    まずはお気軽にご相談ください。内容が固まっていなくても大丈夫です。
                  </p>
                  <p className="text-sm text-slate-600 mb-4 text-right">
                    <span className="text-red-500">*</span> は必須項目です
                  </p>
                  <form className="space-y-5" onSubmit={handleSubmit} data-netlify="true" name="contact">
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden"><label>Don’t fill this out if you’re human: <input name="bot-field" /></label></p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                          お名前 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors outline-none text-base"
                          placeholder="山田 太郎"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                          電話番号 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors outline-none text-base"
                          placeholder="090-XXXX-XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors outline-none text-base"
                        placeholder="yamada@flatpartners.net"
                      />
                    </div>

                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-1">
                        ご相談内容のカテゴリ <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors outline-none bg-white text-base"
                      >
                        <option>M&A（投資・PMI・EXIT）</option>
                        <option>社外CFO</option>
                        <option>管理体制構築</option>
                        <option>税務・会計顧問</option>
                        <option>その他</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="details" className="block text-sm font-medium text-slate-700 mb-1">
                        ご相談内容の詳細（任意）
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        rows={4}
                        value={formData.details}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors outline-none text-base resize-y"
                        placeholder="例：利益は出ているのに資金繰りが厳しく、原因がわからない"
                      ></textarea>
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>送信中にエラーが発生しました。時間をおいて再度お試しください。</span>
                      </div>
                    )}

                    <div>
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-lg shadow-md text-base font-bold text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            送信中...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            送信する
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
