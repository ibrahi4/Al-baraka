import Link from "next/link";
import { Shield, Lock, Eye, FileText, Phone, MessageCircle, ChevronLeft } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = buildMetadata({
  title: "سياسة الخصوصية | شركة البركة لنقل الأثاث",
  description: "سياسة الخصوصية لشركة البركة لنقل الأثاث. كيف نحمي بياناتك ونحافظ على خصوصيتك أثناء استخدام موقعنا وخدماتنا.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const sections = [
    {
      icon: FileText,
      title: "1. المعلومات التي نجمعها",
      content: [
        "نقوم بجمع المعلومات الضرورية فقط لتقديم خدماتنا بأفضل صورة، وتشمل:",
        "• الاسم الكامل ورقم الهاتف للتواصل معك",
        "• العنوان الحالي والعنوان الجديد لتقديم خدمة النقل",
        "• تفاصيل الخدمة المطلوبة لتقديم عرض سعر دقيق",
        "• معلومات الأثاث والمقتنيات لضمان الحماية المناسبة",
        "• أي ملاحظات أو متطلبات خاصة تذكرها لنا",
      ],
    },
    {
      icon: Eye,
      title: "2. كيف نستخدم معلوماتك",
      content: [
        "نستخدم المعلومات التي نجمعها للأغراض التالية:",
        "• تقديم خدمات نقل الأثاث وفقاً لطلبك",
        "• التواصل معك لتأكيد المواعيد والترتيبات",
        "• تقديم عروض الأسعار والاستشارات",
        "• تحسين جودة خدماتنا بناءً على احتياجاتك",
        "• إرسال إشعارات مهمة تتعلق بخدمتك",
        "• الرد على استفساراتك ومتطلباتك",
      ],
    },
    {
      icon: Lock,
      title: "3. حماية معلوماتك",
      content: [
        "نلتزم بحماية معلوماتك الشخصية من خلال:",
        "• استخدام أنظمة أمان متقدمة لحماية البيانات",
        "• تدريب فرقنا على أهمية الحفاظ على خصوصية العملاء",
        "• عدم مشاركة معلوماتك مع أطراف ثالثة دون موافقتك",
        "• حذف البيانات التي لم تعد ضرورية بشكل آمن",
        "• تقييد الوصول للبيانات على الموظفين المخولين فقط",
      ],
    },
    {
      icon: Shield,
      title: "4. مشاركة المعلومات",
      content: [
        "نحن لا نبيع أو نؤجر معلوماتك الشخصية لأي طرف ثالث. قد نشارك معلوماتك في الحالات التالية فقط:",
        "• عندما يكون ذلك ضرورياً لتقديم الخدمة المطلوبة",
        "• في حالة وجود متطلبات قانونية تستوجب ذلك",
        "• بموافقتك الصريحة والمكتوبة",
        "• مع شركاء الخدمة الذين يساعدوننا في تقديم خدماتنا (وفقاً لاتفاقيات سرية)",
      ],
    },
    {
      icon: FileText,
      title: "5. حقوقك",
      content: [
        "لك الحق في:",
        "• الاطلاع على المعلومات التي نحتفظ بها عنك",
        "• طلب تصحيح أي معلومات غير دقيقة",
        "• طلب حذف بياناتك من سجلاتنا",
        "• الاعتراض على استخدام بياناتك لأغراض معينة",
        "• سحب موافقتك على معالجة بياناتك في أي وقت",
        "• تقديم شكوى إذا كنت تعتقد أن حقوقك قد انتهكت",
      ],
    },
    {
      icon: Eye,
      title: "6. ملفات الكوكيز (Cookies)",
      content: [
        "نستخدم ملفات الكوكيز لتحسين تجربتك على موقعنا من خلال:",
        "• تذكر تفضيلاتك وإعداداتك",
        "• تحليل كيفية استخدام موقعنا لتحسينه",
        "• قياس فعالية محتوانا وخدماتنا",
        "• يمكنك تعطيل الكوكيز من إعدادات متصفحك في أي وقت",
      ],
    },
    {
      icon: Shield,
      title: "7. التحديثات على السياسة",
      content: [
        "قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. عند إجراء تغييرات جوهرية:",
        "• سنقوم بإشعارك عبر الموقع أو البريد الإلكتروني",
        "• تاريخ آخر تحديث سيظهر دائماً في أعلى الصفحة",
        "• استمرارك في استخدام خدماتنا يعني موافقتك على التحديثات",
      ],
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#F8F6F2] border-b border-gray-100">
        <div className="container-custom py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#C9A961] transition-colors">الرئيسية</Link>
            <ChevronLeft className="w-4 h-4" />
            <span className="text-[#1B2A41] font-semibold">سياسة الخصوصية</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1B2A41] via-[#0F1A2B] to-[#1B2A41] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9A961] rounded-full blur-3xl" />
        </div>
        <div className="relative container-custom py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-20 h-20 bg-[#C9A961] text-white rounded-2xl items-center justify-center mb-5 shadow-xl">
              <Shield className="w-10 h-10" />
            </div>
            <Badge className="bg-[#C9A961]/20 text-[#C9A961] border-[#C9A961]/30 mb-5 px-4 py-1.5">
              <Lock className="w-3 h-3 ml-1.5" />
              خصوصيتك تهمنا
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight">
              سياسة <span className="text-[#C9A961]">الخصوصية</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              نلتزم بحماية خصوصيتك وأمان معلوماتك الشخصية في كل تعاملاتنا
            </p>
            <p className="text-sm text-white/60 mt-4">
              آخر تحديث: 1 فبراير 2025
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <Card className="border-[#C9A961] border-2 bg-gradient-to-br from-white to-[#F8F6F2] mb-10">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-black text-[#1B2A41] mb-4">
                مرحباً بك في شركة البركة لنقل الأثاث
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                نحن في شركة البركة نقدر ثقتك ونلتزم بحماية خصوصيتك. توضح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية عند استخدامك لموقعنا أو خدماتنا.
              </p>
              <p className="text-gray-700 leading-relaxed">
                باستخدامك لخدماتنا، فإنك توافق على الممارسات الموضحة في هذه السياسة. نوصي بقراءتها بعناية لفهم حقوقك والتزاماتنا تجاهك.
              </p>
            </CardContent>
          </Card>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, i) => (
              <Card key={i} className="border-gray-200 hover:border-[#C9A961] transition-colors">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-[#C9A961]/10 text-[#C9A961] rounded-xl flex items-center justify-center shrink-0">
                      <section.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-black text-[#1B2A41]">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    {section.content.map((line, j) => (
                      <p key={j} className={line.startsWith("•") ? "mr-6" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <Card className="mt-10 bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] border-0 text-white overflow-hidden">
            <CardContent className="p-8 md:p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-black mb-4">
                لديك أسئلة حول <span className="text-[#C9A961]">سياسة الخصوصية</span>؟
              </h2>
              <p className="text-white/70 mb-6 max-w-xl mx-auto">
                فريقنا متاح للإجابة على جميع استفساراتك حول خصوصية بياناتك
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Button asChild size="lg" className="bg-[#C9A961] hover:bg-[#A8893F] text-white h-12 px-8">
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="w-4 h-4 ml-2" />
                    اتصل بنا
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
