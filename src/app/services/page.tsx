import Link from "next/link";
import { 
  Truck, Wrench, Wind, Box, ArrowUpToLine, Gem, 
  ArrowLeft, Phone, MessageCircle, CheckCircle2
} from "lucide-react";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = buildMetadata({
  title: "خدماتنا | شركة البركة لنقل الأثاث",
  description: "تعرف على جميع خدمات شركة البركة لنقل الأثاث: نقل، فك وتركيب، تغليف، ونش رفع، ونقل المقتنيات الحساسة في جميع محافظات مصر.",
  path: "/services",
});

const serviceIcons: Record<string, React.ElementType> = {
  "naql-athath": Truck,
  "fak-tarkeeb-athath": Wrench,
  "fak-tarkeeb-takyifat": Wind,
  "taghleef-athath": Box,
  "wensh-raf3-athath": ArrowUpToLine,
  "naql-moqtaniat-hassasa": Gem,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1B2A41] via-[#0F1A2B] to-[#1B2A41] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9A961] rounded-full blur-3xl" />
        </div>
        
        <div className="relative container-custom py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-[#C9A961]/20 text-[#C9A961] border-[#C9A961]/30 mb-5 px-4 py-1.5">
              خدماتنا
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight">
              حلول متكاملة <span className="text-[#C9A961]">لنقل الأثاث</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              نقدم باقة شاملة من الخدمات الاحترافية لتلبية جميع احتياجاتك في نقل وتركيب الأثاث في جميع محافظات مصر
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.slug] || Truck;
              return (
                <Link key={s.slug} href={`/services/${s.slug}`} className="block h-full">
                  <Card className="h-full hover:shadow-xl hover:border-[#C9A961] transition-all duration-300 group cursor-pointer border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 bg-[#1B2A41] group-hover:bg-[#C9A961] text-[#C9A961] group-hover:text-white rounded-xl flex items-center justify-center transition-all">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-3xl font-black text-gray-100 group-hover:text-[#C9A961]/20 transition-colors">
                          0{i + 1}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-[#1B2A41] mb-2 group-hover:text-[#C9A961] transition-colors">
                        {s.name}
                      </h2>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {s.shortDescription}
                      </p>
                      <div className="flex items-center gap-2 text-[#C9A961] font-bold text-sm pt-3 border-t border-gray-100">
                        اعرف المزيد
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F6F2] py-12 md:py-16">
        <div className="container-custom">
          <Card className="bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] border-0 text-white overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-black mb-4">
                هل تحتاج لخدمة <span className="text-[#C9A961]">مخصصة</span>؟
              </h2>
              <p className="text-white/70 mb-6 max-w-xl mx-auto">
                تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر يناسب احتياجاتك
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Button asChild size="lg" className="bg-[#C9A961] hover:bg-[#A8893F] text-white h-12 px-8">
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="w-4 h-4 ml-2" />
                    اتصل الآن
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30 text-white hover:text-white h-12 px-8 backdrop-blur">
                  <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 ml-2" />
                    واتساب
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
