import Link from "next/link";
import { 
  HelpCircle, Phone, MessageCircle, Sparkles, 
  Truck, Wrench, Wind, Box, ArrowUpToLine, Gem, DollarSign
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { generateFAQSchema } from "@/lib/seo/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = buildMetadata({
  title: "الأسئلة الشائعة | شركة البركة لنقل الأثاث",
  description: "إجابات شاملة عن أكثر الأسئلة شيوعاً حول خدمات نقل الأثاث، الأسعار، التغليف، الفك والتركيب، وضمان المقتنيات في شركة البركة.",
  path: "/faq",
});

const faqCategories = [
  {
    icon: Truck,
    title: "خدمات النقل",
    color: "from-blue-500 to-blue-600",
    faqs: [
      {
        question: "ما هي الخدمات التي تقدمونها؟",
        answer: "نقدم باقة متكاملة من الخدمات تشمل: نقل الأثاث والعفش، فك وتركيب الأثاث وغرف النوم، فك وتركيب التكييفات، التغليف الاحترافي، ونش رفع الأثاث للأدوار العالية، ونقل المقتنيات الحساسة والقابلة للكسر.",
      },
      {
        question: "هل تخدمون جميع محافظات مصر؟",
        answer: "نعم، نقدم خدماتنا في جميع محافظات مصر الـ 27، مع تخصص خاص في المدن الجديدة مثل الشيخ زايد، التجمع الخامس، مدينتي، 6 أكتوبر، والعاصمة الإدارية الجديدة.",
      },
      {
        question: "هل تنقلون الأثاث بين المحافظات؟",
        answer: "نعم، نقدم خدمة النقل بين جميع المحافظات بأسطول حديث من السيارات المجهزة، مع تأمين كامل على المقتنيات أثناء الرحلة.",
      },
      {
        question: "كم تستغرق عملية نقل الأثاث؟",
        answer: "تختلف المدة حسب حجم المنقولات والمسافة. عادة من 4-8 ساعات لشقة متوسطة داخل نفس المدينة، وتزيد المدة عند النقل بين المحافظات.",
      },
    ],
  },
  {
    icon: DollarSign,
    title: "الأسعار والدفع",
    color: "from-green-500 to-green-600",
    faqs: [
      {
        question: "كيف يتم تحديد سعر النقل؟",
        answer: "يتم تحديد السعر بناءً على عدة عوامل: حجم المنقولات، المسافة بين موقع الانطلاق والوصول، الدور (للأدوار العالية)، الحاجة لونش رفع، نوع الخدمات الإضافية (تغليف، فك، تركيب).",
      },
      {
        question: "هل المعاينة مجانية؟",
        answer: "نعم، المعاينة مجانية تماماً. نرسل أحد ممثلينا لمعاينة المنقولات وتقديم عرض سعر شفاف ومفصل بدون أي التزام.",
      },
      {
        question: "ما هي طرق الدفع المتاحة؟",
        answer: "نقبل الدفع النقدي، التحويل البنكي، وفودافون كاش. يمكن دفع جزء كمقدم وباقي المبلغ بعد إتمام الخدمة.",
      },
      {
        question: "هل توجد رسوم خفية؟",
        answer: "أبداً، نلتزم بالشفافية الكاملة. السعر المتفق عليه في المعاينة هو السعر النهائي، بدون أي رسوم إضافية أو مفاجآت.",
      },
      {
        question: "هل تقدمون خصومات؟",
        answer: "نعم، نوفر خصومات للعملاء الدائمين، الطلبات الكبيرة، والحجوزات المبكرة. اتصل بنا للاستفسار عن العروض الحالية.",
      },
    ],
  },
  {
    icon: Box,
    title: "التغليف والحماية",
    color: "from-purple-500 to-purple-600",
    faqs: [
      {
        question: "هل تقدمون خدمة التغليف؟",
        answer: "نعم، نقدم خدمة تغليف احترافية بمواد عالية الجودة تشمل: فقاعات الهواء، الكرتون المقوى، الأقمشة الواقية، وأكياس خاصة للملابس.",
      },
      {
        question: "كيف تتعاملون مع المقتنيات الحساسة؟",
        answer: "لدينا فرق متخصصة في التعامل مع المقتنيات الحساسة كالزجاج، المرايا، النجف الكريستالي، التحف، والأنتيكات. نستخدم تغليف خاص ونوفر تأمين إضافي.",
      },
      {
        question: "هل تغلفون الأجهزة الإلكترونية؟",
        answer: "نعم، نوفر تغليف خاص للأجهزة الإلكترونية كالتلفزيونات، أجهزة الكمبيوتر، والأجهزة المنزلية لحمايتها من الصدمات والاهتزازات.",
      },
    ],
  },
  {
    icon: Wrench,
    title: "الفك والتركيب",
    color: "from-orange-500 to-orange-600",
    faqs: [
      {
        question: "هل تركبون جميع أنواع الأثاث؟",
        answer: "نعم، فرقنا متخصصة في تركيب جميع أنواع الأثاث المحلي والمستورد، بما فيها أثاث IKEA، غرف النوم، المطابخ، ووحدات التخزين.",
      },
      {
        question: "كم تستغرق عملية فك وتركيب غرفة النوم؟",
        answer: "عادة 2-4 ساعات لغرفة النوم العادية، وقد تستغرق وقت أطول للغرف الكبيرة أو المعقدة.",
      },
      {
        question: "هل يوجد ضمان على عمليات التركيب؟",
        answer: "نعم، نوفر ضمان كامل على جميع عمليات الفك والتركيب. في حالة وجود أي مشكلة، نعود لإصلاحها بدون أي تكلفة إضافية.",
      },
    ],
  },
  {
    icon: Wind,
    title: "التكييفات",
    color: "from-cyan-500 to-cyan-600",
    faqs: [
      {
        question: "هل تفكون وتركبون التكييفات؟",
        answer: "نعم، لدينا فنيون متخصصون في فك ونقل وإعادة تركيب جميع أنواع التكييفات (شباك، سبليت، كاسيت، مركزي).",
      },
      {
        question: "هل تشحنون فريون التكييف؟",
        answer: "نعم، نقدم خدمة شحن الفريون لجميع أنواع التكييفات بعد التركيب لضمان كفاءة التشغيل.",
      },
      {
        question: "هل تختبرون التكييف بعد التركيب؟",
        answer: "بالتأكيد، نختبر التكييف بعد التركيب للتأكد من عمله بكفاءة قبل تسليمه للعميل.",
      },
    ],
  },
  {
    icon: ArrowUpToLine,
    title: "ونش الرفع",
    color: "from-red-500 to-red-600",
    faqs: [
      {
        question: "متى أحتاج لونش رفع الأثاث؟",
        answer: "تحتاج لونش رفع في الحالات التالية: الأدوار العالية (من الدور الرابع وأعلى)، الشوارع الضيقة، السلالم الضيقة، الأثاث الكبير الذي لا يمر من السلم.",
      },
      {
        question: "ما الحد الأقصى لارتفاع الونش؟",
        answer: "ونشاتنا الحديثة تصل لارتفاعات عالية تكفي لمعظم الأبراج السكنية. للاستفسار عن طول معين، تواصل معنا.",
      },
      {
        question: "هل الونش آمن على الأثاث؟",
        answer: "نعم، فنيونا مدربون على تشغيل الونش بأمان كامل، ونستخدم أحزمة وحاويات خاصة لحماية الأثاث أثناء الرفع.",
      },
    ],
  },
  {
    icon: Gem,
    title: "الضمان والتأمين",
    color: "from-amber-500 to-amber-600",
    faqs: [
      {
        question: "هل هناك ضمان على المقتنيات؟",
        answer: "نعم، نوفر ضمان كامل على جميع المقتنيات أثناء عمليات النقل، الفك، والتركيب. في حالة حدوث أي ضرر بسبب إهمالنا، نتحمل المسؤولية كاملة.",
      },
      {
        question: "ماذا لو حدث ضرر لأحد المقتنيات؟",
        answer: "في حالة حدوث أي ضرر بسبب إهمال من فريقنا، نقوم بتعويض العميل بشكل كامل عن قيمة الضرر، سواء بالإصلاح أو التعويض المالي.",
      },
      {
        question: "هل لديكم تأمين على الفرق العاملة؟",
        answer: "نعم، جميع فرقنا مؤمن عليها بالكامل، مما يضمن لك راحة البال أثناء وجودهم في منزلك.",
      },
    ],
  },
  {
    icon: HelpCircle,
    title: "الحجز والمواعيد",
    color: "from-pink-500 to-pink-600",
    faqs: [
      {
        question: "كيف يمكنني الحجز؟",
        answer: "يمكنك الحجز بثلاث طرق سهلة: الاتصال الهاتفي، إرسال رسالة واتساب، أو ملء نموذج الحجز على الموقع. سنتواصل معك فوراً.",
      },
      {
        question: "هل تعملون في الإجازات والعطلات؟",
        answer: "نعم، نعمل 24 ساعة طوال أيام الأسبوع بما فيها الجمعة والإجازات الرسمية. نحن دائماً في خدمتكم.",
      },
      {
        question: "كم يجب أن أحجز مقدماً؟",
        answer: "ننصح بالحجز قبل الموعد بـ 2-3 أيام للحصول على الموعد المناسب. لكننا نقبل الحجز الفوري في حالات الطوارئ.",
      },
      {
        question: "هل يمكن تأجيل الموعد بعد الحجز؟",
        answer: "نعم، يمكن تأجيل الموعد بشرط إبلاغنا قبل 24 ساعة على الأقل لتنظيم جدولنا.",
      },
    ],
  },
];

export default function FAQPage() {
  // تجميع كل الأسئلة للـ Schema
  const allFAQs = faqCategories.flatMap((cat) => cat.faqs);
  const faqSchema = generateFAQSchema(allFAQs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1B2A41] via-[#0F1A2B] to-[#1B2A41] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9A961] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C9A961] rounded-full blur-3xl" />
        </div>
        
        <div className="relative container-custom py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-[#C9A961]/20 text-[#C9A961] border-[#C9A961]/30 mb-5 px-4 py-1.5">
              <HelpCircle className="w-3 h-3 ml-1.5" />
              الأسئلة الشائعة
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight">
              كل ما تريد <span className="text-[#C9A961]">معرفته</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              إجابات شاملة عن أكثر الأسئلة شيوعاً حول خدماتنا. لم تجد إجابة سؤالك؟ تواصل معنا مباشرة
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-[#F8F6F2] border-b border-gray-100">
        <div className="container-custom py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-black text-[#C9A961]">30+</div>
              <div className="text-xs text-gray-600">سؤال شائع</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#C9A961]">8</div>
              <div className="text-xs text-gray-600">أقسام رئيسية</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#C9A961]">24/7</div>
              <div className="text-xs text-gray-600">دعم فوري</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#C9A961]">100%</div>
              <div className="text-xs text-gray-600">شفافية تامة</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} id={`category-${catIndex}`}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} text-white rounded-2xl flex items-center justify-center shadow-lg shrink-0`}>
                    <category.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-[#1B2A41]">
                      {category.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {category.faqs.length} أسئلة في هذا القسم
                    </p>
                  </div>
                </div>

                {/* Accordion */}
                <Accordion type="single" collapsible className="space-y-3">
                  {category.faqs.map((faq, i) => (
                    <AccordionItem 
                      key={i} 
                      value={`cat-${catIndex}-item-${i}`}
                      className="bg-[#F8F6F2] rounded-xl border border-gray-100 px-5 hover:border-[#C9A961] transition-colors"
                    >
                      <AccordionTrigger className="text-right font-bold text-[#1B2A41] hover:text-[#C9A961] py-5 text-sm md:text-base">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pb-5 text-sm md:text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative bg-gradient-to-br from-[#1B2A41] via-[#0F1A2B] to-[#1B2A41] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A961] rounded-full blur-3xl" />
        </div>
        
        <div className="relative container-custom py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-[#C9A961]/20 text-[#C9A961] border-[#C9A961]/30 mb-5 px-4 py-1.5">
              <Sparkles className="w-3 h-3 ml-1.5" />
              لم تجد إجابتك؟
            </Badge>
            
            <h2 className="text-2xl md:text-4xl font-black mb-5 leading-tight">
              لدينا <span className="text-[#C9A961]">فريق دعم</span> جاهز لمساعدتك
            </h2>
            
            <p className="text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              تواصل معنا بأي طريقة تناسبك وسنرد على استفساراتك خلال دقائق
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <a 
                href={`tel:${siteConfig.phone}`}
                className="bg-[#C9A961] hover:bg-[#A8893F] text-white p-6 rounded-2xl transition-all hover:shadow-xl group"
              >
                <Phone className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-bold text-lg mb-1">اتصل بنا</div>
                <div className="text-sm text-white/80" dir="ltr">{siteConfig.phone}</div>
              </a>
              
              <a 
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white p-6 rounded-2xl transition-all hover:shadow-xl group backdrop-blur"
              >
                <MessageCircle className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-bold text-lg mb-1">واتساب</div>
                <div className="text-sm text-white/80">رد فوري على رسائلك</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
