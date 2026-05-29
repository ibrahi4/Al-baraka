import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  Truck, Wrench, Wind, Box, ArrowUpToLine, Gem, 
  Phone, MessageCircle, CheckCircle2, Shield, 
  Clock, Users, Award, ChevronLeft, MapPin, Crown
} from "lucide-react";
import { services } from "@/config/services";
import { areas } from "@/config/areas";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo/schema";
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

const serviceFeatures: Record<string, string[]> = {
  "naql-athath": [
    "فرق متخصصة في نقل جميع أنواع الأثاث",
    "سيارات حديثة ومجهزة لحماية المقتنيات",
    "تغليف احترافي قبل النقل",
    "ضمان كامل أثناء عملية النقل",
    "خدمة في القاهرة والجيزة وجميع المدن الجديدة",
    "أسعار شفافة بدون رسوم خفية",
  ],
  "fak-tarkeeb-athath": [
    "فنيون متخصصون في جميع أنواع الأثاث",
    "أدوات احترافية حديثة",
    "خبرة في غرف النوم والمطابخ",
    "تركيب أثاث IKEA وغيره",
    "ضمان على عمليات التركيب",
    "سرعة في التنفيذ",
  ],
  "fak-tarkeeb-takyifat": [
    "خبراء في جميع أنواع التكييفات",
    "فك آمن دون إتلاف الجهاز",
    "إعادة تركيب احترافي",
    "شحن فريون عند الحاجة",
    "اختبار الجهاز بعد التركيب",
    "ضمان على الخدمة",
  ],
  "taghleef-athath": [
    "مواد تغليف عالية الجودة",
    "تغليف خاص للزجاج والمرايا",
    "حماية الأجهزة الإلكترونية",
    "تغليف الأثاث الخشبي بعناية",
    "حماية كاملة من الخدوش",
    "تغليف يناسب طول مسافة النقل",
  ],
  "wensh-raf3-athath": [
    "ونش رفع حديث ومجهز",
    "مناسب للأدوار المرتفعة",
    "حل مثالي للشوارع الضيقة",
    "فنيون مدربون على التشغيل",
    "ضمان الأمان أثناء الرفع",
    "سرعة في الإنجاز",
  ],
  "naql-moqtaniat-hassasa": [
    "تخصص في الزجاج والمرايا",
    "نقل النجف الكريستالي",
    "حماية التحف والأنتيكات",
    "تغليف خاص للقطع الثمينة",
    "تأمين إضافي على المقتنيات",
    "خبرة في القطع الفنية",
  ],
};

const serviceFAQs: Record<string, { question: string; answer: string }[]> = {
  "naql-athath": [
    { question: "كم تستغرق عملية نقل الأثاث؟", answer: "تختلف المدة حسب حجم المنقولات والمسافة. عادة من 4-8 ساعات للشقة المتوسطة داخل نفس المدينة." },
    { question: "هل تقدمون خدمة التغليف؟", answer: "نعم، نقدم خدمة التغليف الاحترافي بمواد عالية الجودة لحماية جميع المقتنيات." },
    { question: "هل هناك ضمان على المقتنيات؟", answer: "نعم، نوفر ضمان كامل على جميع المقتنيات أثناء عملية النقل." },
    { question: "ما هي طرق الدفع المتاحة؟", answer: "نقبل الدفع النقدي أو التحويل البنكي. يمكن دفع مقدم وباقي المبلغ بعد إتمام الخدمة." },
  ],
  "fak-tarkeeb-athath": [
    { question: "هل تركبون جميع أنواع الأثاث؟", answer: "نعم، فرقنا متخصصة في تركيب جميع أنواع الأثاث المحلي والمستورد بما فيها IKEA." },
    { question: "كم تستغرق عملية فك وتركيب غرفة نوم؟", answer: "عادة 2-4 ساعات لغرفة النوم العادية، تختلف حسب التعقيد." },
    { question: "هل يوجد ضمان على التركيب؟", answer: "نعم، نوفر ضمان كامل على جميع عمليات التركيب." },
  ],
  "fak-tarkeeb-takyifat": [
    { question: "هل تشحنون فريون التكييف؟", answer: "نعم، نقدم خدمة شحن الفريون لجميع أنواع التكييفات." },
    { question: "هل تحتاجون لمعدات خاصة؟", answer: "فرقنا مزودة بجميع الأدوات الاحترافية اللازمة لفك وتركيب التكييفات." },
  ],
  "taghleef-athath": [
    { question: "ما أنواع مواد التغليف المستخدمة؟", answer: "نستخدم كراتين عالية الجودة، فقاعات هواء، وأقمشة حماية خاصة لكل نوع من الأثاث." },
    { question: "هل التغليف مشمول في سعر النقل؟", answer: "يمكن إضافة خدمة التغليف كباقة متكاملة مع النقل بسعر مميز." },
  ],
  "wensh-raf3-athath": [
    { question: "ما هو الحد الأقصى للوزن؟", answer: "الونش يتحمل حتى 500 كيلو، وهو مناسب لجميع أنواع الأثاث حتى الثقيل منه." },
    { question: "هل يصلح للشوارع الضيقة؟", answer: "نعم، معداتنا مصممة خصيصاً للتعامل مع الشوارع الضيقة والأماكن الصعبة." },
  ],
  "naql-moqtaniat-hassasa": [
    { question: "هل تنقلون التحف والأنتيكات؟", answer: "نعم، لدينا خبرة خاصة في نقل التحف والأنتيكات مع تغليف خاص وتأمين إضافي." },
    { question: "هل يوجد تأمين على القطع الثمينة؟", answer: "نعم، نوفر تأمين إضافي على المقتنيات الثمينة عند الطلب." },
  ],
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = serviceIcons[service.slug] || Truck;
  const features = serviceFeatures[service.slug] || [];
  const faqs = serviceFAQs[service.slug] || serviceFAQs["naql-athath"];

  const serviceSchema = generateServiceSchema(service.name, service.shortDescription, `${siteConfig.url}/services/${service.slug}`);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: siteConfig.url },
    { name: "خدماتنا", url: `${siteConfig.url}/services` },
    { name: service.name, url: `${siteConfig.url}/services/${service.slug}` },
  ]);
  const faqSchema = generateFAQSchema(faqs);

  // أول 12 منطقة مميزة للعرض
  const displayAreas = areas.slice(0, 12);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-[#F8F6F2] border-b border-gray-100">
        <div className="container-custom py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#C9A961] transition-colors">الرئيسية</Link>
            <ChevronLeft className="w-4 h-4" />
            <Link href="/services" className="hover:text-[#C9A961] transition-colors">خدماتنا</Link>
            <ChevronLeft className="w-4 h-4" />
            <span className="text-[#1B2A41] font-semibold">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1B2A41] via-[#0F1A2B] to-[#1B2A41] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9A961] rounded-full blur-3xl" />
        </div>
        <div className="relative container-custom py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-right">
              <div className="inline-flex w-16 h-16 md:w-20 md:h-20 bg-[#C9A961] text-white rounded-2xl items-center justify-center mb-5 shadow-xl">
                <Icon className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight">
                {service.name}
              </h1>
              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                {service.shortDescription}
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
                  <h3 className="font-bold text-xl mb-6 text-[#C9A961]">لماذا تختار خدمتنا؟</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Shield, label: "ضمان كامل على المقتنيات" },
                      { icon: Clock, label: "سرعة في التنفيذ والالتزام بالمواعيد" },
                      { icon: Users, label: "فرق محترفة ومدربة" },
                      { icon: Award, label: "خبرة 10+ سنوات في المجال" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                        <div className="w-10 h-10 bg-[#C9A961]/20 text-[#C9A961] rounded-lg flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="font-semibold text-sm">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <Badge variant="outline" className="border-[#C9A961] text-[#C9A961] mb-4">مميزاتنا</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1B2A41] mb-4">
              ما يميز خدمة <span className="text-[#C9A961]">{service.name}</span> لدينا
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              نلتزم بأعلى معايير الجودة في كل خطوة من خطوات تقديم الخدمة
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-4 bg-[#F8F6F2] p-5 rounded-xl border border-gray-100 hover:border-[#C9A961] transition-all">
                <div className="w-10 h-10 bg-[#C9A961] text-white rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-[#1B2A41] font-semibold pt-1.5">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="section-padding bg-[#F8F6F2]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="outline" className="border-[#C9A961] text-[#C9A961] mb-4">مناطق الخدمة</Badge>
            <h2 className="text-2xl md:text-3xl font-black text-[#1B2A41] mb-4">
              نقدم خدمة {service.name} في القاهرة الكبرى والمدن الجديدة
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {displayAreas.map((area) => (
              <Link key={area.slug} href={`/areas/${area.slug}`}>
                <Card className="hover:border-[#C9A961] hover:shadow-md transition-all group cursor-pointer border-gray-200 bg-white relative">
                  {area.isVip && (
                    <Badge className="absolute top-2 left-2 bg-[#C9A961] text-white border-0 text-[10px]">
                      <Crown className="w-2.5 h-2.5 ml-0.5" />VIP
                    </Badge>
                  )}
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className={`w-10 h-10 ${area.isVip ? "bg-[#C9A961]/10 text-[#C9A961]" : "bg-[#1B2A41]/5 text-[#1B2A41]"} group-hover:bg-[#C9A961] group-hover:text-white rounded-lg flex items-center justify-center transition-all shrink-0`}>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-sm text-[#1B2A41] group-hover:text-[#C9A961] transition-colors">
                      {area.name}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-[#1B2A41] text-[#1B2A41] hover:bg-[#1B2A41] hover:text-white h-11 px-6">
              <Link href="/areas">عرض جميع المناطق</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <Badge variant="outline" className="border-[#C9A961] text-[#C9A961] mb-4">الأسئلة الشائعة</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1B2A41] mb-4">
              إجابات لأكثر الأسئلة شيوعاً
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-[#F8F6F2] rounded-xl border border-gray-100 px-5">
                <AccordionTrigger className="text-right font-bold text-[#1B2A41] hover:text-[#C9A961] py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-[#1B2A41] via-[#0F1A2B] to-[#1B2A41] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A961] rounded-full blur-3xl" />
        </div>
        <div className="relative container-custom py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-5">
            احصل على عرض سعر <span className="text-[#C9A961]">مجاني</span>
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            تواصل معنا الآن لمناقشة احتياجاتك والحصول على استشارة مجانية
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild size="lg" className="bg-[#C9A961] hover:bg-[#A8893F] text-white h-12 px-8 shadow-xl">
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="w-4 h-4 ml-2" />اتصل الآن
              </a>
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
