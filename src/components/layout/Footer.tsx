import Link from "next/link";
import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { governorates } from "@/config/governorates";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-[#1B2A41] text-white mt-16 lg:mt-24">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#C9A961] rounded-lg flex items-center justify-center">
                  <span className="text-[#1B2A41] font-black text-2xl">ب</span>
                </div>
                <div>
                  <div className="font-bold text-lg">شركة البركة</div>
                  <div className="text-xs text-white/60">لنقل الأثاث</div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                خبرة تزيد عن {siteConfig.yearsOfExperience} سنوات في تقديم خدمات نقل الأثاث الاحترافية في جميع محافظات مصر.
              </p>
            </div>

            {/* Quick Services */}
            <div>
              <h4 className="font-bold text-[#C9A961] mb-4">خدماتنا</h4>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link 
                      href={`/services/${s.slug}`} 
                      className="text-sm text-white/70 hover:text-[#C9A961] transition-colors"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Areas */}
            <div>
              <h4 className="font-bold text-[#C9A961] mb-4">المحافظات</h4>
              <ul className="space-y-2.5">
                {governorates.slice(0, 6).map((g) => (
                  <li key={g.slug}>
                    <Link 
                      href={`/areas/${g.slug}`} 
                      className="text-sm text-white/70 hover:text-[#C9A961] transition-colors"
                    >
                      نقل أثاث {g.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-[#C9A961] mb-4">تواصل معنا</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin className="w-4 h-4 text-[#C9A961] shrink-0 mt-1" />
                  <span>{siteConfig.address}</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/70">
                  <Phone className="w-4 h-4 text-[#C9A961] shrink-0" />
                  <a 
                    href={`tel:${siteConfig.phone}`} 
                    dir="ltr" 
                    className="hover:text-[#C9A961] transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/70">
                  <MessageCircle className="w-4 h-4 text-[#C9A961] shrink-0" />
                  <a 
                    href={`https://wa.me/${siteConfig.whatsapp}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#C9A961] transition-colors"
                  >
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

        {/* Bottom Bar */}
        <div className="py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} {siteConfig.name} - جميع الحقوق محفوظة</div>
          <div>نخدم جميع محافظات مصر</div>
        </div>
      </div>
    </footer>
  );
}
