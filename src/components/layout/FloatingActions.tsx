"use client";

import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // إخفاء الـ pulse بعد 10 ثواني
    const timer = setTimeout(() => setShowPulse(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickMessages = [
    "أحتاج عرض سعر لنقل أثاث",
    "أريد معرفة المزيد عن خدماتكم",
    "أحتاج خدمة فك وتركيب",
    "أريد حجز موعد للمعاينة",
  ];

  return (
    <>
      {/* WhatsApp Floating Widget */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
        <AnimatePresence>
          {whatsappOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-[300px] sm:w-[340px] overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-black text-xl">ب</span>
                      </div>
                      <div className="absolute -bottom-0.5 -left-0.5 w-4 h-4 bg-green-400 border-2 border-white rounded-full" />
                    </div>
                    <div>
                      <div className="font-bold">شركة البركة</div>
                      <div className="text-xs text-white/90 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse" />
                        متصل الآن
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setWhatsappOpen(false)}
                    className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  مرحباً! 👋 كيف يمكننا مساعدتك اليوم؟
                </p>
              </div>

              {/* Quick Messages */}
              <div className="p-4 bg-gray-50 max-h-[280px] overflow-y-auto">
                <div className="text-xs text-gray-500 mb-3 font-semibold">رسائل سريعة:</div>
                <div className="space-y-2">
                  {quickMessages.map((msg, i) => (
                    <a
                      key={i}
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white hover:bg-green-50 border border-gray-200 hover:border-green-500 p-3 rounded-xl text-sm text-gray-700 hover:text-green-700 transition-all"
                    >
                      {msg}
                    </a>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  ابدأ المحادثة
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 mt-2 text-[#1B2A41] hover:text-[#C9A961] py-2 text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  أو اتصل الآن
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <div className="relative">
          {showPulse && !whatsappOpen && (
            <>
              <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
              <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse" />
            </>
          )}
          <button
            onClick={() => setWhatsappOpen(!whatsappOpen)}
            className="relative w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            aria-label="تواصل عبر واتساب"
          >
            {whatsappOpen ? (
              <X className="w-6 h-6 sm:w-7 sm:h-7" />
            ) : (
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            )}
          </button>
          
          {/* Notification Badge */}
          {!whatsappOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
              1
            </span>
          )}
        </div>
      </div>

      {/* Call Button - Mobile Only Floating */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <a
          href={`tel:${siteConfig.phone}`}
          className="w-14 h-14 bg-[#C9A961] hover:bg-[#A8893F] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          aria-label="اتصل الآن"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 lg:bottom-6 lg:right-6 z-40 w-12 h-12 bg-[#1B2A41] hover:bg-[#0F1A2B] text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            aria-label="العودة للأعلى"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
