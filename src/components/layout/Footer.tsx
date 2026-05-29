import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { featuredAreas } from "@/config/areas";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-[#1B2A41] text-white mt-16 lg:mt-24">
      <div className="container-custom">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 bg-white rounded-lg p-1.5">
                  <Image src="/icon-512.png" alt={siteConfig.name} fill className="object-contain p-1" sizes="56px" />
                </div>
                <div>
                  <div className="font-bold text-lg">شركة البركة</div>
                  <div className="text-xs text-white/60">لنقل الأثاث</div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                خبرة تزيد عن {siteConfig.yearsOfExperience} سنوات في تقديم خدمات نقل الأثاث الاحترافية في القاهرة والجيزة والمدن الجديدة.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#C9A961] mb-4">خدماتنا</h4>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="text-sm text-white/70 hover:text-[#C9A961] transition-colors">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#C9A961] mb-4">مناطق الخدمة</h4>
              <ul className="space-y-2.5">
                {featuredAreas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/areas/${area.slug}`}
                      className="text-sm text-white/70 hover:text-[#C9A961] transition-colors"
                    >
                      نقل أثاث {area.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/areas"
                    className="text-sm text-[#C9A961] hover:text-[#A8893F] transition-colors font-semibold"
                  >
                    عرض كل المناطق ←
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#C9A961] mb-4">تواصل معنا</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin className="w-4 h-4 text-[#C9A961] shrink-0 mt-1" />
                  <span>{siteConfig.address}</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/70">
                  <Phone className="w-4 h-4 text-[#C9A961] shrink-0" />
                  <a href={`tel:${siteConfig.phone}`} dir="ltr" className="hover:text-[#C9A961] transition-colors">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/70">
                  <MessageCircle className="w-4 h-4 text-[#C9A961] shrink-0" />
                  <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A961] transition-colors">
                    تواصل عبر واتساب
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/70">
                  <Clock className="w-4 h-4 text-[#C9A961] shrink-0" />
                  <span>متاحون 24 ساعة / 7 أيام</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <Separator className="bg-white/10" />

        <div className="py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} {siteConfig.name} - جميع الحقوق محفوظة</div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[#C9A961] transition-colors">سياسة الخصوصية</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-[#C9A961] transition-colors">شروط الاستخدام</Link>
            <span>|</span>
            <Link href="/faq" className="hover:text-[#C9A961] transition-colors">الأسئلة الشائعة</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
