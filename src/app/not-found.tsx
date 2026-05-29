import Link from "next/link";
import { Home, Search, Phone, MessageCircle, ArrowLeft, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "الصفحة غير موجودة | شركة البركة لنقل الأثاث",
  description: "الصفحة التي تبحث عنها غير موجودة. عد إلى الصفحة الرئيسية أو تواصل معنا.",
};

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center bg-gradient-to-br from-[#1B2A41] via-[#0F1A2B] to-[#1B2A41] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9A961] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C9A961] rounded-full blur-3xl" />
      </div>

      <div className="relative container-custom py-12 md:py-20 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* 404 Number */}
          <div className="relative mb-8">
            <div className="text-[120px] md:text-[200px] font-black text-[#C9A961]/10 leading-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-[#C9A961] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <Search className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5">
            عذراً، <span className="text-[#C9A961]">الصفحة غير موجودة</span>
          </h1>
          
          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            الصفحة التي تبحث عنها غير متوفرة أو تم نقلها. يمكنك العودة للصفحة الرئيسية أو التواصل معنا مباشرة
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            <Button asChild size="lg" className="bg-[#C9A961] hover:bg-[#A8893F] text-white h-14 text-base shadow-xl">
              <Link href="/">
                <Home className="w-5 h-5 ml-2" />
                العودة للرئيسية
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30 text-white hover:text-white h-14 text-base backdrop-blur">
              <Link href="/contact">
                <MessageCircle className="w-5 h-5 ml-2" />
                تواصل معنا
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 text-white max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="font-bold mb-4 text-[#C9A961]">روابط قد تهمك</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { href: "/services", label: "خدماتنا", icon: ArrowLeft },
                  { href: "/areas", label: "مناطق الخدمة", icon: MapPin },
                  { href: "/about", label: "من نحن", icon: ArrowLeft },
                  { href: "/faq", label: "الأسئلة الشائعة", icon: ArrowLeft },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 bg-white/5 hover:bg-[#C9A961]/20 p-3 rounded-lg text-sm transition-colors"
                  >
                    <link.icon className="w-4 h-4 text-[#C9A961]" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Contact */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-white/70 hover:text-[#C9A961] transition-colors">
              <Phone className="w-4 h-4" />
              <span dir="ltr">{siteConfig.phone}</span>
            </a>
            <span className="text-white/30">|</span>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-[#C9A961] transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>واتساب</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
