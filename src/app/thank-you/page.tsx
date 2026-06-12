import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, MessageCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "تم استلام طلبك بنجاح",
  description: "شكراً لتواصلك مع شركة البركة لنقل الأثاث. سنتواصل معك قريباً.",
  robots: {
    index: false, // مهم: عشان جوجل ميفهرسش الصفحة دي
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#F8F6F2] to-white py-16">
      <div className="container-custom max-w-2xl text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          {/* أيقونة النجاح */}
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={2.5} />
          </div>

          {/* العنوان */}
          <h1 className="text-3xl md:text-4xl font-black text-[#1B2A41] mb-4">
            تم استلام طلبك <span className="text-[#C9A961]">بنجاح!</span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            شكراً لاختيارك <strong className="text-[#1B2A41]">{siteConfig.name}</strong>
            <br />
            سيتواصل معك أحد ممثلي خدمة العملاء خلال دقائق على الواتساب
          </p>

          {/* خطوات التواصل */}
          <div className="bg-[#F8F6F2] rounded-2xl p-6 mb-8 text-right">
            <h3 className="font-bold text-[#1B2A41] mb-4 text-center">
              ماذا يحدث الآن؟
            </h3>
            <div className="space-y-3">
              {[
                "سيتم مراجعة طلبك خلال دقائق",
                "سنتواصل معك على الواتساب لتأكيد التفاصيل",
                "نرسل لك عرض سعر مفصل ومناسب",
                "نحدد موعد المعاينة أو النقل حسب رغبتك",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-[#C9A961] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm md:text-base text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* للتواصل العاجل */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600 mb-4">
              للتواصل العاجل أو الاستفسار:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                asChild
                className="bg-[#C9A961] hover:bg-[#A8893F] text-white font-bold h-12"
              >
                <a href={`tel:${siteConfig.phone}`} dir="ltr">
                  <Phone className="w-4 h-4 ml-2" />
                  {siteConfig.phone}
                </a>
              </Button>
              <Button
                asChild
                className="bg-green-500 hover:bg-green-600 text-white font-bold h-12"
              >
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 ml-2" />
                  واتساب
                </a>
              </Button>
            </div>

            <Button
              asChild
              variant="ghost"
              className="mt-4 text-gray-600 hover:text-[#C9A961]"
            >
              <Link href="/">
                <Home className="w-4 h-4 ml-2" />
                العودة للصفحة الرئيسية
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}