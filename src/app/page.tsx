"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone, MessageCircle, ArrowLeft, CheckCircle2, Shield,
  Clock, Users, Truck, MapPin, Star, Award, Sparkles,
  Wrench, Wind, Box, ArrowUpToLine, Gem, Crown
} from "lucide-react";
import { services } from "@/config/services";
import { featuredAreas } from "@/config/areas";
import { siteConfig } from "@/config/site";
import { serviceBackgrounds } from "@/config/media";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GallerySection } from "@/components/features/GallerySection";
import { VideosSection } from "@/components/features/VideosSection";
import { TestimonialsSection } from "@/components/features/TestimonialsSection";

const serviceIcons: Record<string, React.ElementType> = {
  "naql-athath": Truck,
  "fak-tarkeeb-athath": Wrench,
  "fak-tarkeeb-takyifat": Wind,
  "taghleef-athath": Box,
  "wensh-raf3-athath": ArrowUpToLine,
  "naql-moqtaniat-hassasa": Gem,
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#1B2A41] via-[#0F1A2B] to-[#1B2A41] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9A961] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C9A961] rounded-full blur-3xl" />
        </div>

        <div className="relative container-custom py-12 md:py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-right order-2 lg:order-1"
            >
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-5">
                <Badge className="bg-[#C9A961]/20 text-[#C9A961] border-[#C9A961]/30 hover:bg-[#C9A961]/30 px-4 py-1.5">
                  <Sparkles className="w-3 h-3 ml-1.5" />
                  خبرة أكثر من {siteConfig.yearsOfExperience} سنوات
                </Badge>

                <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A961] text-white px-4 py-2 shadow-xl">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                  </span>
                  <span className="text-sm font-bold">خصم ترحيبي 30% على أول طلب</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.2] mb-5">
                شركة البركة
                <br />
                <span className="text-[#C9A961]">لنقل الأثاث في مصر</span>
              </h1>

              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                خدمات نقل أثاث احترافية بفرق مدربة ومعدات حديثة في القاهرة والجيزة وجميع المدن الجديدة.
                <span className="text-white font-semibold"> احجز الآن واحصل على خصم 30% على أول طلب </span>
                لفترة محدودة عند الحجز المسبق عبر الاتصال أو الواتساب.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#C9A961] hover:bg-[#A8893F] text-white font-bold shadow-xl h-12 px-8"
                >
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="w-4 h-4 ml-2" />
                    احصل على الخصم الآن
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 border-white/30 text-white hover:text-white h-12 px-8 backdrop-blur"
                >
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 ml-2" />
                    احجز عبر واتساب
                  </a>
                </Button>
              </div>

              <div className="rounded-2xl border border-[#C9A961]/30 bg-gradient-to-r from-[#C9A961]/15 to-white/5 backdrop-blur-sm p-4 md:p-5 mb-8 text-right">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#C9A961] text-white flex items-center justify-center shadow-lg shrink-0">
                    <span className="text-2xl font-black">30%</span>
                  </div>

                  <div className="flex-1">
                    <div className="font-black text-lg text-white mb-1">
                      عرض ترحيبي خاص لأول مرة مع البركة
                    </div>
                    <p className="text-sm text-white/75 leading-relaxed">
                      خصم 30% على أول أوردر مع خدمة احترافية كاملة، تغليف آمن، وفريق متخصص.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {["أول طلب", "لفترة محدودة", "حجز سريع", "خدمة احترافية"].map((item) => (
                        <span
                          key={item}
                          className="text-xs bg-white/10 border border-white/10 text-white/85 px-3 py-1 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                {[
                  { value: "+10", label: "سنوات خبرة" },
                  { value: "20+", label: "منطقة مخدومة" },
                  { value: "5000+", label: "عميل سعيد" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="text-2xl md:text-3xl font-black text-[#C9A961] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-white/60">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="absolute -top-4 -left-3 md:-top-5 md:-left-5 z-20 rounded-2xl bg-[#C9A961] text-white shadow-2xl px-4 py-3 border border-white/20">
                  <div className="text-2xl md:text-3xl font-black leading-none">30%</div>
                  <div className="text-[11px] md:text-xs font-semibold mt-1">خصم أول طلب</div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl">
                  <div className="grid grid-cols-2 gap-3">
                    {services.slice(0, 4).map((s, i) => {
                      const Icon = serviceIcons[s.slug] || Truck;
                      return (
                        <motion.div
                          key={s.slug}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="bg-white/5 hover:bg-[#C9A961]/10 border border-white/10 hover:border-[#C9A961]/30 rounded-xl p-4 transition-all cursor-pointer group"
                        >
                          <div className="w-10 h-10 bg-[#C9A961]/20 group-hover:bg-[#C9A961] text-[#C9A961] group-hover:text-white rounded-lg flex items-center justify-center mb-3 transition-all">
                            <Icon className="w-5 h-5" />
                          </div>
                          <h4 className="font-bold text-sm mb-1">{s.name}</h4>
                          <p className="text-[11px] text-white/60 line-clamp-2 leading-relaxed">
                            {s.shortDescription}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="mt-4 bg-gradient-to-r from-[#C9A961]/20 to-[#C9A961]/5 border border-[#C9A961]/30 rounded-xl p-4 flex items-center gap-3">
                    <div className="w-11 h-11 bg-[#C9A961] rounded-full flex items-center justify-center shrink-0 shadow-lg">
                      <Shield className="w-5 h-5 text-[#1B2A41]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#C9A961] text-sm">ضمان كامل على المقتنيات</div>
                      <div className="text-xs text-white/70">تأمين شامل أثناء النقل</div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl bg-white/5 border border-white/10 p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#C9A961] text-white flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm mb-1">عرض لفترة محدودة</div>
                      <div className="text-xs text-white/65 leading-relaxed">
                        احجز أول خدمة الآن واستفد من الخصم الترحيبي مع نفس الجودة الاحترافية المعتادة من البركة.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES BAR */}
      <section className="bg-[#F8F6F2] border-b border-gray-100">
        <div className="container-custom py-8 md:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Shield, title: "ضمان كامل", desc: "على جميع المقتنيات" },
              { icon: Clock, title: "خدمة 24/7", desc: "متاحون طوال الأسبوع" },
              { icon: Users, title: "فرق مدربة", desc: "متخصصون محترفون" },
              { icon: Crown, title: "خدمة VIP", desc: "للكمبوندات والفلل" },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 md:gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 md:w-14 md:h-14 bg-[#C9A961]/10 text-[#C9A961] rounded-lg flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-[#1B2A41] text-sm md:text-base">{f.title}</div>
                  <div className="text-xs md:text-sm text-gray-500">{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-gradient-to-b from-white to-[#F8F6F2]">
        <div className="container-custom">
          <motion.div
            {...fadeUp}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
          >
            <Badge variant="outline" className="border-[#C9A961] text-[#C9A961] mb-4">
              <Sparkles className="w-3 h-3 ml-1.5" />
              خدماتنا
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1B2A41] mb-4">
              حلول متكاملة لنقل الأثاث
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              باقة شاملة من الخدمات الاحترافية تغطي جميع احتياجاتك
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.slug] || Truck;
              const bgImage = serviceBackgrounds[s.slug];

              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link href={`/services/${s.slug}`} className="block group">
                    <div className="relative h-[420px] md:h-[460px] rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500">
                      <Image
                        src={bgImage}
                        alt={s.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A2B] via-[#1B2A41]/80 to-[#1B2A41]/30 group-hover:from-[#0F1A2B] group-hover:via-[#1B2A41]/70 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#C9A961]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="absolute top-5 left-5 z-10">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center">
                          <span className="text-white font-black text-lg">0{i + 1}</span>
                        </div>
                      </div>

                      <div className="absolute top-5 right-5 z-10">
                        <div className="w-14 h-14 bg-[#C9A961] group-hover:bg-white rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500">
                          <Icon className="w-7 h-7 text-white group-hover:text-[#C9A961] transition-colors duration-500" />
                        </div>
                      </div>

                      <div className="absolute bottom-0 right-0 left-0 p-6 md:p-7 z-10">
                        <div className="w-12 h-1 bg-[#C9A961] mb-4 group-hover:w-20 transition-all duration-500" />

                        <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight group-hover:text-[#C9A961] transition-colors duration-500">
                          {s.name}
                        </h3>

                        <p className="text-white/80 text-sm leading-relaxed mb-5 line-clamp-2">
                          {s.shortDescription}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-white/20">
                          <span className="text-white font-bold text-sm flex items-center gap-2 group-hover:text-[#C9A961] transition-colors">
                            اكتشف الخدمة
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-300" />
                          </span>

                          <div className="flex items-center gap-1 text-xs text-white/70">
                            <Star className="w-3 h-3 fill-[#C9A961] text-[#C9A961]" />
                            <span>خدمة مميزة</span>
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 rounded-2xl ring-2 ring-[#C9A961]/0 group-hover:ring-[#C9A961]/50 transition-all duration-500 pointer-events-none" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <GallerySection />

      {/* WHY US */}
      <section className="section-padding bg-[#F8F6F2]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="border-[#C9A961] text-[#C9A961] mb-4">
                لماذا البركة
              </Badge>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1B2A41] mb-5 leading-tight">
                أكثر من 10 سنوات من <span className="text-[#C9A961]">الثقة</span>
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8">
                نؤمن أن كل قطعة أثاث تحمل ذكريات وقيمة. لذلك نتعامل مع مقتنياتكم بالعناية التي تستحقها، مع الالتزام الكامل بالمواعيد وأعلى معايير الجودة.
              </p>

              <div className="space-y-3">
                {[
                  { title: "فرق مدربة على أعلى مستوى", desc: "خبراء في فك وتركيب جميع أنواع الأثاث" },
                  { title: "تغليف احترافي بمواد عالية الجودة", desc: "حماية كاملة للأثاث والمقتنيات" },
                  { title: "أسطول حديث من السيارات المجهزة", desc: "نقل آمن وسريع في القاهرة الكبرى والمدن الجديدة" },
                  { title: "أسعار شفافة ومنافسة", desc: "بدون رسوم خفية أو مفاجآت" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:border-[#C9A961] hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 bg-[#C9A961]/10 text-[#C9A961] rounded-lg flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-[#1B2A41] text-sm md:text-base mb-1">{item.title}</h4>
                      <p className="text-xs md:text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28"
            >
              <Card className="bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] border-0 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A961]/20 rounded-full blur-3xl" />

                <CardContent className="p-8 md:p-10 relative">
                  <Award className="w-12 h-12 text-[#C9A961] mb-4" />
                  <div className="text-5xl md:text-7xl font-black text-[#C9A961] mb-3">+10</div>
                  <div className="text-xl md:text-2xl font-bold mb-2">سنوات من التميز</div>
                  <p className="text-white/70 text-sm md:text-base mb-8 leading-relaxed">
                    رحلة طويلة من الالتزام والاحترافية في خدمة آلاف العملاء في القاهرة والجيزة والمدن الجديدة
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10">
                      <div className="text-2xl md:text-3xl font-black text-[#C9A961] mb-1">5000+</div>
                      <div className="text-xs md:text-sm text-white/70">عميل راضي</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10">
                      <div className="text-2xl md:text-3xl font-black text-[#C9A961] mb-1">98%</div>
                      <div className="text-xs md:text-sm text-white/70">معدل الرضا</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" />
                    ))}
                    <span className="text-sm text-white/70 mr-2">تقييم 4.9 من 5</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* VIDEOS */}
      <VideosSection />

      {/* AREAS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            {...fadeUp}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
          >
            <Badge variant="outline" className="border-[#C9A961] text-[#C9A961] mb-4">
              مناطق الخدمة
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1B2A41] mb-4">
              متخصصون في <span className="text-[#C9A961]">القاهرة الكبرى والمدن الجديدة</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              فرقنا المتخصصة تخدم الكمبوندات والفلل والأحياء الراقية في القاهرة والجيزة
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {featuredAreas.map((area, i) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/areas/${area.slug}`}>
                  <Card className="hover:border-[#C9A961] hover:shadow-md transition-all duration-300 group cursor-pointer border-gray-200 relative">
                    <Badge className="absolute top-2 left-2 bg-[#C9A961] text-white border-0 text-[10px]">
                      <Crown className="w-2.5 h-2.5 ml-0.5" />
                      VIP
                    </Badge>
                    <CardContent className="p-4 md:p-5 text-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#C9A961]/10 group-hover:bg-[#C9A961] text-[#C9A961] group-hover:text-white rounded-lg flex items-center justify-center mx-auto mb-3 transition-all">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="font-bold text-sm md:text-base text-[#1B2A41] group-hover:text-[#C9A961] transition-colors">
                        {area.name}
                      </div>
                      <div className="text-[10px] md:text-xs text-gray-500 mt-1">نقل أثاث VIP</div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-10">
            <Button asChild className="bg-[#1B2A41] hover:bg-[#0F1A2B] text-white h-12 px-8">
              <Link href="/areas">
                عرض جميع المناطق
                <ArrowLeft className="w-4 h-4 mr-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-[#1B2A41] via-[#0F1A2B] to-[#1B2A41] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A961] rounded-full blur-3xl" />
        </div>

        <div className="relative container-custom py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge className="bg-[#C9A961]/20 text-[#C9A961] border-[#C9A961]/30 mb-5 px-4 py-1.5">
              <Sparkles className="w-3 h-3 ml-1.5" />
              ابدأ معنا اليوم
            </Badge>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight">
              احصل على <span className="text-[#C9A961]">عرض سعر مجاني</span>
            </h2>
            <p className="text-sm md:text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              تواصل معنا للحصول على معاينة مجانية واستشارة كاملة لجميع احتياجاتك
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[#C9A961] hover:bg-[#A8893F] text-white font-bold h-12 px-8 shadow-xl"
              >
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="w-4 h-4 ml-2" />
                  اتصل الآن
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 border-white/30 text-white hover:text-white h-12 px-8 backdrop-blur"
              >
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 ml-2" />
                  تواصل واتساب
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
