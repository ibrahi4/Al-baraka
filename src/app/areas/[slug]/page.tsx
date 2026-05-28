import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  Truck, Wrench, Wind, Box, ArrowUpToLine, Gem,
  MapPin, Phone, MessageCircle, CheckCircle2, Shield,
  Clock, Users, Award, ChevronLeft
} from "lucide-react";
import { governorates } from "@/config/governorates";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const serviceIcons: Record<string, React.ElementType> = {
  "naql-athath": Truck,
  "fak-tarkeeb-athath": Wrench,
  "fak-tarkeeb-takyifat": Wind,
  "taghleef-athath": Box,
  "wensh-raf3-athath": ArrowUpToLine,
  "naql-moqtaniat-hassasa": Gem,
};

export async function generateStaticParams() {
  return governorates.map((gov) => ({ slug: gov.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gov = governorates.find((g) => g.slug === slug);
  if (!gov) return {};
  return buildMetadata({
    title: gov.metaTitle,
    description: gov.metaDescription,
    path: `/areas/${gov.slug}`,
  });
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gov = governorates.find((g) => g.slug === slug);
  if (!gov) notFound();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: siteConfig.url },
    { name: "مناطق الخدمة", url: `${siteConfig.url}/areas` },
    { name: gov.name, url: `${siteConfig.url}/areas/${gov.slug}` },
  ]);

  const faqs = [
    { question: `هل تقدمون خدمات نقل الأثاث في ${gov.name}؟`, answer: `نعم، شركة البركة تقدم جميع خدمات نقل الأثاث في ${gov.name} بفرق متخصصة ومدربة على أعلى مستوى.` },
    { question: `كم تكلفة نقل الأثاث في ${gov.name}؟`, answer: `تعتمد تكلفة النقل على حجم المنقولات والمسافة. تواصل معنا للحصول على عرض سعر مجاني ومخصص لاحتياجاتك.` },
    { question: `هل توفرون خدمة ونش رفع الأثاث في ${gov.name}؟`, answer: `نعم، نوفر خدمة ونش رفع الأثاث للأدوار العالية والأماكن الضيقة في جميع مناطق ${gov.name}.` },
    { question: `كم تستغرق عملية النقل في ${gov.name}؟`, answer: `تختلف المدة حسب حجم المنقولات. عادة من 4-8 ساعات للشقة المتوسطة داخل ${gov.name}.` },
  ];

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#F8F6F2] border-b border-gray-100">
        <div className="container-custom py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#C9A961] transition-colors">الرئيسية</Link>
            <ChevronLeft className="w-4 h-4" />
            <Link href="/areas" className="hover:text-[#C9A961] transition-colors">مناطق الخدمة</Link>
            <ChevronLeft className="w-4 h-4" />
            <span className="text-[#1B2A41] font-semibold">{gov.name}</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#1B2A41] via-[#0F1A2B] to-[#1B2A41] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9A961] rounded-full blur-3xl" />
        </div>
        <div className="relative container-custom py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-right">
              <div className="inline-flex w-16 h-16 md:w-20 md:h-20 bg-[#C9A961] text-white rounded-2xl items-center justify-center mb-5 shadow-xl">
                <MapPin className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight">
                نقل أثاث في <span className="text-[#C9A961]">{gov.name}</span>
              </h1>
              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                شركة البركة لنقل الأثاث في {gov.name} - فرق متخصصة، أسطول حديث، خدمة احترافية على مدار الساعة بأسعار منافسة.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-[#C9A961] hover:bg-[#A8893F] text-white h-12 px-8 shadow-xl">
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="w-4 h-4 ml-2" />اتصل الآن
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30 text-white hover:text-white h-12 px-8 backdrop-blur">
                  <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 ml-2" />طلب عرض سعر
                  </a>
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 text-white">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-6 text-[#C9A961]">خدماتنا في {gov.name}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {services.slice(0, 4).map((s) => {
                      const Icon = serviceIcons[s.slug] || Truck;
                      return (
                        <div key={s.slug} className="bg-white/5 hover:bg-[#C9A961]/10 border border-white/10 hover:border-[#C9A961]/30 rounded-xl p-4 transition-all">
                          <div className="w-10 h-10 bg-[#C9A961]/20 text-[#C9A961] rounded-lg flex items-center justify-center mb-2">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="font-bold text-sm">{s.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <Badge variant="outline" className="border-[#C9A961] text-[#C9A961] mb-4">خدماتنا</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1B2A41] mb-4">
              جميع خدماتنا متاحة في <span className="text-[#C9A961]">{gov.name}</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              نقدم باقة شاملة من الخدمات الاحترافية في {gov.name} وجميع مناطقها
            </p>
          </div>

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
                        <span className="text-3xl font-black text-gray-100 group-hover:text-[#C9A961]/20 transition-colors">0{i + 1}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#1B2A41] mb-2 group-hover:text-[#C9A961] transition-colors">
                        {s.name} في {gov.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {s.shortDescription}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8F6F2]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <Badge variant="outline" className="border-[#C9A961] text-[#C9A961] mb-4">لماذا نحن</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1B2A41] mb-4">
              لماذا تختار البركة لنقل الأثاث في {gov.name}؟
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Shield, title: "ضمان كامل", desc: "على جميع المقتنيات" },
              { icon: Clock, title: "خدمة 24/7", desc: "متاحون دائماً" },
              { icon: Users, title: "فرق مدربة", desc: "محترفون متخصصون" },
              { icon: Award, title: "خبرة 10+ سنوات", desc: "في خدمتكم" },
            ].map((item, i) => (
              <Card key={i} className="hover:border-[#C9A961] hover:shadow-md transition-all border-gray-200">
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#C9A961]/10 text-[#C9A961] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="font-bold text-[#1B2A41] text-sm md:text-base mb-1">{item.title}</div>
                  <div className="text-xs md:text-sm text-gray-500">{item.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <Badge variant="outline" className="border-[#C9A961] text-[#C9A961] mb-4">الأسئلة الشائعة</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1B2A41] mb-4">
              أسئلة شائعة عن خدماتنا في {gov.name}
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-[#F8F6F2] rounded-xl border border-gray-100 px-5">
                <AccordionTrigger className="text-right font-bold text-[#1B2A41] hover:text-[#C9A961] py-5">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-[#1B2A41] via-[#0F1A2B] to-[#1B2A41] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A961] rounded-full blur-3xl" />
        </div>
        <div className="relative container-custom py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-5">
            احجز خدمتك في <span className="text-[#C9A961]">{gov.name}</span> الآن
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            تواصل معنا للحصول على عرض سعر مجاني ومعاينة فورية في {gov.name}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild size="lg" className="bg-[#C9A961] hover:bg-[#A8893F] text-white h-12 px-8 shadow-xl">
              <a href={`tel:${siteConfig.phone}`}><Phone className="w-4 h-4 ml-2" />اتصل الآن</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30 text-white hover:text-white h-12 px-8 backdrop-blur">
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 ml-2" />واتساب
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
