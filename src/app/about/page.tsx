import Link from "next/link";
import Image from "next/image";
import { 
  Award, Users, Shield, Clock, CheckCircle2, Target, 
  Heart, Sparkles, Phone, MessageCircle, MapPin,
  TrendingUp, Star, Crown
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = buildMetadata({
  title: "من نحن | شركة البركة لنقل الأثاث - خبرة 10+ سنوات",
  description: "تعرف على شركة البركة لنقل الأثاث، خبرتنا أكثر من 10 سنوات في خدمة عملائنا في جميع محافظات مصر بفرق مدربة ومعدات حديثة.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1B2A41] via-[#0F1A2B] to-[#1B2A41] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9A961] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C9A961] rounded-full blur-3xl" />
        </div>
        
        <div className="relative container-custom py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-[#C9A961]/20 text-[#C9A961] border-[#C9A961]/30 mb-5 px-4 py-1.5">
              <Sparkles className="w-3 h-3 ml-1.5" />
              قصتنا
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight">
              عشر سنوات من <span className="text-[#C9A961]">الثقة والاحترافية</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              منذ تأسيسنا عام {siteConfig.foundingYear}، التزمنا بتقديم أفضل خدمات نقل الأثاث في مصر بفرق مدربة وأعلى معايير الجودة
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Badge variant="outline" className="border-[#C9A961] text-[#C9A961] mb-4">
                قصتنا
              </Badge>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1B2A41] mb-5 leading-tight">
                رحلتنا من <span className="text-[#C9A961]">{siteConfig.foundingYear}</span> حتى اليوم
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  بدأت شركة <strong className="text-[#1B2A41]">البركة لنقل الأثاث</strong> رحلتها في عام {siteConfig.foundingYear} من مقرها في العباسية - ميدان الجيش، بفريق صغير وحلم كبير لتقديم خدمة نقل أثاث تليق بالعملاء.
                </p>
                <p>
                  على مدار أكثر من <strong className="text-[#C9A961]">10 سنوات</strong>، نمت الشركة لتصبح من أبرز شركات نقل الأثاث في مصر، نخدم آلاف العملاء في جميع المحافظات بأسطول حديث من السيارات وفرق متخصصة.
                </p>
                <p>
                  تخصصنا في خدمة <strong className="text-[#1B2A41]">الكمبوندات الفاخرة والمدن الجديدة</strong> مثل الشيخ زايد، التجمع الخامس، مدينتي، و6 أكتوبر، حيث نقدم خدمة VIP تليق بمقتنياتكم الثمينة.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
                <div>
                  <div className="text-3xl font-black text-[#C9A961] mb-1">+10</div>
                  <div className="text-xs text-gray-500">سنوات خبرة</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#C9A961] mb-1">5000+</div>
                  <div className="text-xs text-gray-500">عميل سعيد</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#C9A961] mb-1">27</div>
                  <div className="text-xs text-gray-500">محافظة</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85"
                  alt="شركة البركة لنقل الأثاث"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A41]/80 via-[#1B2A41]/20 to-transparent" />
                
                <div className="absolute bottom-6 right-6 left-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-[#C9A961] rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold">مقرنا الرئيسي</div>
                        <div className="text-xs text-white/80">العباسية - ميدان الجيش</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#C9A961] rounded-2xl flex items-center justify-center shadow-xl rotate-12">
                <div className="text-white text-center">
                  <div className="text-2xl font-black">10+</div>
                  <div className="text-[10px] font-bold">سنوات</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission - Vision - Values */}
      <section className="section-padding bg-[#F8F6F2]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <Badge variant="outline" className="border-[#C9A961] text-[#C9A961] mb-4">
              قيمنا
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1B2A41] mb-4">
              ما نؤمن به
            </h2>
            <p className="text-gray-600">
              قيمنا الأساسية هي ما يميزنا ويصنع الفارق في خدماتنا
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "رسالتنا",
                desc: "تقديم خدمات نقل أثاث احترافية تجمع بين الجودة العالية والأسعار المنافسة، مع الحفاظ على ثقة عملائنا بكل تعامل.",
              },
              {
                icon: Crown,
                title: "رؤيتنا",
                desc: "أن نكون الشركة الرائدة والأكثر ثقة في نقل الأثاث في مصر، خاصة في المدن الجديدة والكمبوندات الفاخرة.",
              },
              {
                icon: Heart,
                title: "قيمنا",
                desc: "الأمانة، الاحترافية، الالتزام بالمواعيد، واحترام كل قطعة أثاث كأنها ملكنا الشخصي.",
              },
            ].map((item, i) => (
              <Card key={i} className="hover:border-[#C9A961] hover:shadow-xl transition-all border-gray-200 group">
                <CardContent className="p-7">
                  <div className="w-14 h-14 bg-[#1B2A41] group-hover:bg-[#C9A961] text-[#C9A961] group-hover:text-white rounded-2xl flex items-center justify-center mb-5 transition-all">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-black text-[#1B2A41] mb-3 group-hover:text-[#C9A961] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <Badge variant="outline" className="border-[#C9A961] text-[#C9A961] mb-4">
              مميزاتنا
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1B2A41] mb-4">
              لماذا يختارنا <span className="text-[#C9A961]">5000+ عميل</span>؟
            </h2>
            <p className="text-gray-600">
              نقدم لعملائنا ما يستحقونه من خدمة احترافية متكاملة
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Award, title: "خبرة 10+ سنوات", desc: "في مجال نقل الأثاث" },
              { icon: Users, title: "فرق متخصصة", desc: "مدربة على أعلى مستوى" },
              { icon: Shield, title: "ضمان كامل", desc: "على جميع المقتنيات" },
              { icon: Clock, title: "خدمة 24/7", desc: "متاحون طوال الأسبوع" },
              { icon: TrendingUp, title: "أسطول حديث", desc: "سيارات مجهزة بالكامل" },
              { icon: CheckCircle2, title: "أسعار شفافة", desc: "بدون رسوم خفية" },
              { icon: Crown, title: "خدمة VIP", desc: "للكمبوندات الفاخرة" },
              { icon: MapPin, title: "تغطية شاملة", desc: "جميع محافظات مصر" },
            ].map((item, i) => (
              <Card key={i} className="hover:border-[#C9A961] hover:shadow-md transition-all border-gray-200">
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#C9A961]/10 text-[#C9A961] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="font-bold text-[#1B2A41] text-sm md:text-base mb-1">
                    {item.title}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500">
                    {item.desc}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-[#F8F6F2]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <Badge variant="outline" className="border-[#C9A961] text-[#C9A961] mb-4">
              خطوات العمل
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1B2A41] mb-4">
              كيف نعمل؟
            </h2>
            <p className="text-gray-600">
              عملية احترافية مدروسة من البداية حتى النهاية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "التواصل والاستفسار",
                desc: "اتصل بنا أو راسلنا على واتساب وأخبرنا باحتياجاتك",
              },
              {
                step: "02",
                title: "المعاينة المجانية",
                desc: "فريقنا يحضر للمعاينة وتقديم عرض سعر شفاف",
              },
              {
                step: "03",
                title: "التغليف والنقل",
                desc: "تغليف احترافي ونقل آمن بأحدث السيارات",
              },
              {
                step: "04",
                title: "التركيب والتسليم",
                desc: "تركيب الأثاث وتسليم المنزل جاهزاً",
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <Card className="bg-white border-gray-200 hover:border-[#C9A961] hover:shadow-xl transition-all h-full group">
                  <CardContent className="p-6">
                    <div className="text-5xl font-black text-[#C9A961]/20 group-hover:text-[#C9A961]/40 transition-colors mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-[#1B2A41] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Card className="bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] border-0 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A961] rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A961] rounded-full blur-3xl" />
            </div>
            
            <CardContent className="p-8 md:p-12 relative">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="bg-[#C9A961]/20 text-[#C9A961] border-[#C9A961]/30 mb-5 px-4 py-1.5">
                    <Star className="w-3 h-3 ml-1.5 fill-[#C9A961]" />
                    تقييم عملائنا
                  </Badge>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 leading-tight">
                    ثقة <span className="text-[#C9A961]">5000+ عميل</span> هي شهادتنا
                  </h2>
                  
                  <p className="text-white/70 mb-6 leading-relaxed">
                    أرقامنا تتحدث عن جودة خدماتنا واحترافية فرقنا
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-6 h-6 fill-[#C9A961] text-[#C9A961]" />
                    ))}
                    <span className="text-2xl font-black text-[#C9A961] mr-2">4.9</span>
                    <span className="text-sm text-white/70">/ 5</span>
                  </div>
                  <div className="text-sm text-white/60">
                    متوسط تقييم العملاء
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "5000+", label: "عميل سعيد" },
                    { value: "98%", label: "معدل الرضا" },
                    { value: "10+", label: "سنوات خبرة" },
                    { value: "27", label: "محافظة" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur p-5 rounded-xl border border-white/10 text-center">
                      <div className="text-3xl md:text-4xl font-black text-[#C9A961] mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-[#1B2A41] via-[#0F1A2B] to-[#1B2A41] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A961] rounded-full blur-3xl" />
        </div>

        <div className="relative container-custom py-12 md:py-20 text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-5">
            جاهزون لخدمتك <span className="text-[#C9A961]">في أي وقت</span>
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            انضم لآلاف العملاء الذين وثقوا بنا في نقل أثاثهم
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild size="lg" className="bg-[#C9A961] hover:bg-[#A8893F] text-white h-12 px-8 shadow-xl">
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
        </div>
      </section>
    </>
  );
}
