"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, MessageCircle, MapPin, Clock, Mail, Send,
  CheckCircle2, Loader2, User, Building
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { governorates } from "@/config/governorates";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    area: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // إرسال البيانات عبر WhatsApp
    const whatsappMessage = `
*طلب جديد من الموقع*

*الاسم:* ${formData.name}
*الهاتف:* ${formData.phone}
*الخدمة:* ${formData.service}
*المنطقة:* ${formData.area}
*التفاصيل:* ${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", phone: "", service: "", area: "", message: "" });
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1B2A41] via-[#0F1A2B] to-[#1B2A41] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9A961] rounded-full blur-3xl" />
        </div>
        <div className="relative container-custom py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-[#C9A961]/20 text-[#C9A961] border-[#C9A961]/30 mb-5 px-4 py-1.5">
              <MessageCircle className="w-3 h-3 ml-1.5" />
              نحن في خدمتك
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight">
              تواصل <span className="text-[#C9A961]">معنا</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              نحن متاحون على مدار الساعة لخدمتك. اختر الطريقة الأنسب للتواصل
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <a href={`tel:${siteConfig.phone}`} className="block h-full">
                <Card className="h-full hover:border-[#C9A961] hover:shadow-xl transition-all group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#1B2A41] group-hover:bg-[#C9A961] text-[#C9A961] group-hover:text-white rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all">
                      <Phone className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1B2A41] mb-2">اتصل بنا</h3>
                    <p className="text-gray-600 text-sm mb-3">للحجز السريع والاستفسارات</p>
                    <p className="text-[#C9A961] font-bold text-lg" dir="ltr">{siteConfig.phone}</p>
                  </CardContent>
                </Card>
              </a>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <a 
                href={`https://wa.me/${siteConfig.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full hover:border-[#C9A961] hover:shadow-xl transition-all group cursor-pointer bg-gradient-to-br from-green-50 to-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-500 group-hover:bg-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all">
                      <MessageCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1B2A41] mb-2">واتساب</h3>
                    <p className="text-gray-600 text-sm mb-3">رد فوري على رسائلك</p>
                    <p className="text-green-600 font-bold text-base">تواصل عبر واتساب</p>
                  </CardContent>
                </Card>
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full hover:border-[#C9A961] hover:shadow-xl transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#1B2A41] text-[#C9A961] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1B2A41] mb-2">مقرنا</h3>
                  <p className="text-gray-600 text-sm mb-3">زورنا في مقرنا الرئيسي</p>
                  <p className="text-[#C9A961] font-bold text-sm">{siteConfig.address}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Form + Info */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-gray-200 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-6">
                    <Badge variant="outline" className="border-[#C9A961] text-[#C9A961] mb-3">
                      احصل على عرض سعر
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-black text-[#1B2A41] mb-2">
                      اطلب خدمتك الآن
                    </h2>
                    <p className="text-gray-600 text-sm">
                      املأ النموذج وسنتواصل معك خلال دقائق
                    </p>
                  </div>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                    >
                      <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1B2A41] mb-2">
                        تم إرسال طلبك بنجاح!
                      </h3>
                      <p className="text-gray-600">
                        سنتواصل معك على الواتساب خلال دقائق
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#1B2A41] mb-2">
                            الاسم <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="اسمك الكامل"
                              className="pr-10 h-12"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-[#1B2A41] mb-2">
                            رقم الهاتف <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                              required
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="01xxxxxxxxx"
                              className="pr-10 h-12"
                              dir="ltr"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#1B2A41] mb-2">
                            الخدمة المطلوبة <span className="text-red-500">*</span>
                          </label>
                          <Select 
                            value={formData.service} 
                            onValueChange={(value: string | null) => setFormData({ ...formData, service: value ?? "" })}
                            required
                          >
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="اختر الخدمة" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((s) => (
                                <SelectItem key={s.slug} value={s.name}>
                                  {s.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-[#1B2A41] mb-2">
                            المنطقة <span className="text-red-500">*</span>
                          </label>
                          <Select 
                            value={formData.area} 
                            onValueChange={(value: string | null) => setFormData({ ...formData, area: value ?? "" })}
                            required
                          >
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="اختر منطقتك" />
                            </SelectTrigger>
                            <SelectContent>
                              {governorates.map((g) => (
                                <SelectItem key={g.slug} value={g.name}>
                                  {g.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#1B2A41] mb-2">
                          تفاصيل إضافية
                        </label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="اخبرنا عن تفاصيل المنقولات (عدد الغرف، الدور، أي تفاصيل مهمة...)"
                          rows={4}
                          className="resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={loading}
                        className="w-full bg-[#C9A961] hover:bg-[#A8893F] text-white font-bold h-14 text-base shadow-xl"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                            جاري الإرسال...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 ml-2" />
                            إرسال الطلب عبر واتساب
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-center text-gray-500">
                        بإرسال النموذج، أنت توافق على التواصل معك عبر واتساب أو الهاتف
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              {/* Hours */}
              <Card className="bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] border-0 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#C9A961] rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">ساعات العمل</h3>
                      <p className="text-xs text-white/70">متاحون لخدمتك</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between bg-white/5 p-3 rounded-lg">
                      <span className="text-white/80">السبت - الخميس</span>
                      <span className="font-bold text-[#C9A961]">24 ساعة</span>
                    </div>
                    <div className="flex justify-between bg-white/5 p-3 rounded-lg">
                      <span className="text-white/80">الجمعة</span>
                      <span className="font-bold text-[#C9A961]">24 ساعة</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Us */}
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-[#1B2A41] mb-4">
                    لماذا تختار البركة؟
                  </h3>
                  <div className="space-y-3">
                    {[
                      "خبرة 10+ سنوات",
                      "فرق مدربة ومتخصصة",
                      "تغليف احترافي",
                      "ضمان كامل على المقتنيات",
                      "أسعار شفافة بدون رسوم خفية",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#C9A961]/10 text-[#C9A961] rounded-lg flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-sm text-[#1B2A41]">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Call */}
              <Card className="bg-[#C9A961] border-0 text-white">
                <CardContent className="p-6 text-center">
                  <Phone className="w-10 h-10 mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">للحجز السريع</h3>
                  <p className="text-white/90 text-sm mb-4">اتصل الآن واحصل على خصم</p>
                  <Button 
                    asChild 
                    className="w-full bg-white text-[#C9A961] hover:bg-white/90 font-bold h-12"
                  >
                    <a href={`tel:${siteConfig.phone}`} dir="ltr">
                      {siteConfig.phone}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


