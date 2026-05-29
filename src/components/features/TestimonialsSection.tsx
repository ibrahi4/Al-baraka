"use client";

import { motion } from "framer-motion";
import { Star, Quote, MapPin, Crown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    id: 1,
    name: "أحمد محمد",
    location: "الشيخ زايد",
    role: "صاحب فيلا",
    rating: 5,
    comment: "خدمة استثنائية! نقلوا فيلتي بالكامل من الشيخ زايد للتجمع الخامس بكل احترافية. الفريق مدرب جداً والتغليف كان ممتاز. أنصح بهم بشدة لأصحاب الكمبوندات.",
    isVIP: true,
  },
  {
    id: 2,
    name: "د. سارة عبدالله",
    location: "التجمع الخامس",
    role: "طبيبة",
    rating: 5,
    comment: "تعاملت معهم في نقل أثاث عيادتي والمنزل. الالتزام بالمواعيد ممتاز والأسعار شفافة. الأهم أنهم اهتموا بالأجهزة الطبية الحساسة بشكل احترافي جداً.",
    isVIP: true,
  },
  {
    id: 3,
    name: "م. خالد إبراهيم",
    location: "مدينتي",
    role: "مهندس",
    rating: 5,
    comment: "أفضل شركة نقل تعاملت معها على الإطلاق. نقلوا أثاث منزلي في مدينتي بسرعة وأمان تام. الونش جاء في الموعد وخدمة فك وتركيب التكييفات كانت احترافية.",
    isVIP: true,
  },
  {
    id: 4,
    name: "نورا حسن",
    location: "6 أكتوبر",
    role: "ربة منزل",
    rating: 5,
    comment: "ما شاء الله، شركة محترمة ومتعاونة. غلفوا كل قطعة بعناية وكأنها قطعتهم. لا توجد أي خدوش أو أضرار. سعرهم مناسب جداً مقارنة بجودة الخدمة.",
    isVIP: false,
  },
  {
    id: 5,
    name: "أ. محمود سعيد",
    location: "القاهرة الجديدة",
    role: "أستاذ جامعي",
    rating: 5,
    comment: "خبرة سنين في الخدمة واضحة من أول لحظة. تعاملوا مع مكتبتي الضخمة ولوحاتي الفنية بمنتهى الحرص. شركة موثوقة تستحق التقدير.",
    isVIP: true,
  },
  {
    id: 6,
    name: "ياسمين أحمد",
    location: "الرحاب",
    role: "محاسبة",
    rating: 5,
    comment: "نقلت بيتي معاهم 3 مرات في 5 سنين، وكل مرة بنفس الجودة والاحترافية. فريق محترم والمدير شخصياً بيتابع الشغل. أنصح بهم لكل من يبحث عن الجودة.",
    isVIP: false,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#F8F6F2] to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <Badge variant="outline" className="border-[#C9A961] text-[#C9A961] mb-4">
            <Quote className="w-3 h-3 ml-1.5" />
            آراء عملائنا
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1B2A41] mb-4">
            ماذا يقول عملاؤنا عنا؟
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
            آلاف العملاء وثقوا بنا في نقل أثاثهم. اقرأ بعض تجاربهم الحقيقية
          </p>

          {/* Overall Rating */}
          <div className="inline-flex items-center gap-3 bg-white border border-[#C9A961] rounded-2xl px-6 py-4 shadow-lg">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-[#C9A961] text-[#C9A961]" />
              ))}
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-[#1B2A41]">4.9 / 5</div>
              <div className="text-xs text-gray-500">من 5000+ تقييم</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl hover:border-[#C9A961] transition-all duration-300 group border-gray-200 relative overflow-hidden">
                {t.isVIP && (
                  <div className="absolute top-0 left-0 bg-gradient-to-br from-[#C9A961] to-[#A8893F] text-white px-3 py-1.5 rounded-br-2xl flex items-center gap-1.5 text-xs font-bold shadow-lg z-10">
                    <Crown className="w-3 h-3" />
                    عميل VIP
                  </div>
                )}

                <CardContent className="p-6 md:p-7 relative">
                  <Quote className="absolute top-4 left-4 w-16 h-16 text-[#C9A961]/10 group-hover:text-[#C9A961]/20 transition-colors" />
                  
                  <div className="relative">
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" />
                      ))}
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base line-clamp-5">
                      &ldquo;{t.comment}&rdquo;
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] text-[#C9A961] rounded-full flex items-center justify-center font-black text-lg">
                        {t.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-[#1B2A41] text-sm md:text-base">{t.name}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1.5">
                          <MapPin className="w-3 h-3" />
                          {t.location} • {t.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "5000+", label: "عميل سعيد" },
            { value: "4.9/5", label: "تقييم العملاء" },
            { value: "98%", label: "معدل الرضا" },
            { value: "95%", label: "عملاء متكررون" },
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-gray-200 hover:border-[#C9A961] rounded-xl p-4 md:p-5 text-center transition-all hover:shadow-md">
              <div className="text-2xl md:text-3xl font-black text-[#C9A961] mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
