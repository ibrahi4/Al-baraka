"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Crown, MapPin, Phone, MessageCircle, Star, Search, 
  Sparkles, ArrowLeft 
} from "lucide-react";
import { governorates, featuredAreas, newCitiesSlugs } from "@/config/governorates";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function AreasPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const featured = useMemo(
    () => governorates.filter((g) => featuredAreas.includes(g.slug)),
    []
  );

  const otherNewCities = useMemo(
    () => governorates.filter(
      (g) => newCitiesSlugs.includes(g.slug) && !featuredAreas.includes(g.slug)
    ),
    []
  );

  const regularGovernorates = useMemo(
    () => governorates.filter((g) => !newCitiesSlugs.includes(g.slug)),
    []
  );

  // البحث الفوري
  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    return governorates.filter((g) =>
      g.name.includes(searchQuery.trim())
    );
  }, [searchQuery]);

  return (
    <>
      {/* Hero with Search */}
      <section className="relative bg-gradient-to-br from-[#1B2A41] via-[#0F1A2B] to-[#1B2A41] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9A961] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C9A961] rounded-full blur-3xl" />
        </div>
        
        <div className="relative container-custom py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-[#C9A961]/20 text-[#C9A961] border-[#C9A961]/30 mb-5 px-4 py-1.5">
              <MapPin className="w-3 h-3 ml-1.5" />
              نخدمكم في كل مصر
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight">
              ابحث عن <span className="text-[#C9A961]">منطقتك</span>
            </h1>
            
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">
              فرقنا تصل إليك في جميع محافظات ومدن مصر بسرعة واحترافية
            </p>

            {/* Search Box */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="ابحث عن منطقتك... (مثال: الشيخ زايد، التجمع، القاهرة)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white text-[#1B2A41] h-14 pr-12 pl-4 text-base rounded-xl border-0 shadow-2xl placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {filteredResults !== null && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-[#1B2A41] mb-2">
                نتائج البحث 
                <span className="text-[#C9A961] mr-2">({filteredResults.length})</span>
              </h2>
              <p className="text-gray-600">
                النتائج المطابقة لبحثك عن &quot;{searchQuery}&quot;
              </p>
            </div>

            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {filteredResults.map((g, i) => {
                  const isNew = newCitiesSlugs.includes(g.slug);
                  return (
                    <motion.div
                      key={g.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link href={`/areas/${g.slug}`}>
                        <Card className="hover:border-[#C9A961] hover:shadow-md transition-all group cursor-pointer border-gray-200 h-full">
                          <CardContent className="p-4 md:p-5 text-center relative">
                            {isNew && (
                              <Badge className="absolute top-2 left-2 bg-[#C9A961] text-white border-0 text-[10px]">
                                <Crown className="w-2.5 h-2.5 ml-0.5" />
                                VIP
                              </Badge>
                            )}
                            <div className={`w-10 h-10 md:w-12 md:h-12 ${isNew ? 'bg-[#C9A961]' : 'bg-[#1B2A41]/5 group-hover:bg-[#C9A961]'} ${isNew ? 'text-white' : 'text-[#1B2A41] group-hover:text-white'} rounded-lg flex items-center justify-center mx-auto mb-3 transition-all`}>
                              <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div className="font-bold text-sm md:text-base text-[#1B2A41] group-hover:text-[#C9A961] transition-colors">
                              {g.name}
                            </div>
                            <div className="text-[10px] md:text-xs text-gray-500 mt-1">نقل أثاث</div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <Card className="border-gray-200">
                <CardContent className="p-12 text-center">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#1B2A41] mb-2">لا توجد نتائج</h3>
                  <p className="text-gray-600 mb-6">
                    لم نجد منطقة بهذا الاسم. تواصل معنا مباشرة وسنخدمك في أي مكان في مصر.
                  </p>
                  <Button asChild className="bg-[#C9A961] hover:bg-[#A8893F] text-white">
                    <a href={`tel:${siteConfig.phone}`}>
                      <Phone className="w-4 h-4 ml-2" />
                      اتصل بنا
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      )}

      {/* Featured Cities (VIP) */}
      {filteredResults === null && (
        <>
          <section className="section-padding bg-white">
            <div className="container-custom">
              <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
                <Badge className="bg-[#C9A961] text-white border-0 mb-4 px-4 py-1.5">
                  <Crown className="w-3 h-3 ml-1.5" />
                  خدمة VIP - الأكثر طلباً
                </Badge>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1B2A41] mb-3">
                  متخصصون في <span className="text-[#C9A961]">المدن الجديدة</span>
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  خبرة سنوات في خدمة الكمبوندات الفاخرة والفلل
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {featured.map((g, i) => (
                  <motion.div
                    key={g.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link href={`/areas/${g.slug}`}>
                      <Card className="h-full hover:border-[#C9A961] hover:shadow-xl transition-all duration-300 group cursor-pointer border-gray-200 overflow-hidden relative">
                        <div className="absolute top-0 right-0 bg-gradient-to-bl from-[#C9A961] to-transparent w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity" />
                        
                        <CardContent className="p-6 relative">
                          <div className="flex items-start justify-between mb-5">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#C9A961] to-[#A8893F] text-white rounded-xl flex items-center justify-center shadow-lg">
                              <Crown className="w-7 h-7" />
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              <Badge className="bg-[#C9A961]/10 text-[#C9A961] border-0">VIP</Badge>
                              <div className="flex gap-0.5">
                                {[1,2,3,4,5].map((s) => (
                                  <Star key={s} className="w-3 h-3 fill-[#C9A961] text-[#C9A961]" />
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-[#1B2A41] mb-2 group-hover:text-[#C9A961] transition-colors">
                            نقل أثاث في {g.name}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            خدمة احترافية للكمبوندات والفلل في {g.name} بأعلى معايير الجودة
                          </p>
                          
                          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <span className="text-[#C9A961] font-bold text-sm flex items-center gap-2">
                              اعرف المزيد
                              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            </span>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-[#C9A961]" />
                              الأكثر طلباً
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Other New Cities */}
          {otherNewCities.length > 0 && (
            <section className="section-padding bg-[#F8F6F2]">
              <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <Badge variant="outline" className="border-[#C9A961] text-[#C9A961] mb-4">
                    مدن جديدة أخرى
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-black text-[#1B2A41] mb-3">
                    خدماتنا في باقي المدن الجديدة
                  </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                  {otherNewCities.map((g, i) => (
                    <motion.div
                      key={g.slug}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link href={`/areas/${g.slug}`}>
                        <Card className="h-full hover:border-[#C9A961] hover:shadow-md transition-all group cursor-pointer border-gray-200 bg-white relative">
                          <Badge className="absolute top-2 left-2 bg-[#C9A961] text-white border-0 text-[10px]">
                            <Crown className="w-2.5 h-2.5 ml-0.5" />
                            VIP
                          </Badge>
                          <CardContent className="p-4 md:p-5 text-center">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#C9A961]/10 group-hover:bg-[#C9A961] text-[#C9A961] group-hover:text-white rounded-lg flex items-center justify-center mx-auto mb-3 transition-all">
                              <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div className="font-bold text-sm md:text-base text-[#1B2A41] group-hover:text-[#C9A961] transition-colors">
                              {g.name}
                            </div>
                            <div className="text-[10px] md:text-xs text-gray-500 mt-1">نقل أثاث VIP</div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* All Governorates */}
          <section className="section-padding bg-white">
            <div className="container-custom">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <Badge variant="outline" className="border-[#1B2A41] text-[#1B2A41] mb-4">
                  جميع المحافظات
                </Badge>
                <h2 className="text-2xl md:text-3xl font-black text-[#1B2A41] mb-3">
                  نخدم جميع <span className="text-[#C9A961]">محافظات مصر</span>
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  تغطية شاملة من الإسكندرية إلى أسوان
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {regularGovernorates.map((g, i) => (
                  <motion.div
                    key={g.slug}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <Link href={`/areas/${g.slug}`}>
                      <Card className="h-full hover:border-[#C9A961] hover:shadow-md transition-all group cursor-pointer border-gray-200">
                        <CardContent className="p-4 md:p-5 text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1B2A41]/5 group-hover:bg-[#C9A961] text-[#1B2A41] group-hover:text-white rounded-lg flex items-center justify-center mx-auto mb-3 transition-all">
                            <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                          </div>
                          <div className="font-bold text-sm md:text-base text-[#1B2A41] group-hover:text-[#C9A961] transition-colors">
                            {g.name}
                          </div>
                          <div className="text-[10px] md:text-xs text-gray-500 mt-1">نقل أثاث</div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA */}
      <section className="bg-[#F8F6F2] py-12 md:py-16">
        <div className="container-custom">
          <Card className="bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] border-0 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A961] rounded-full blur-3xl" />
            </div>
            <CardContent className="p-8 md:p-12 text-center relative">
              <h2 className="text-2xl md:text-3xl font-black mb-4">
                لم تجد منطقتك؟ <span className="text-[#C9A961]">نخدمك في أي مكان</span>
              </h2>
              <p className="text-white/70 mb-6 max-w-xl mx-auto">
                نخدم جميع محافظات مصر بدون استثناء، اتصل بنا الآن للحصول على عرض سعر
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
