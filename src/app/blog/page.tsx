import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, BookOpen, Sparkles } from "lucide-react";
import { blogPosts, blogCategories } from "@/config/blog";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = buildMetadata({
  title: "المدونة | شركة البركة لنقل الأثاث - نصائح وأدلة احترافية",
  description: "اكتشف أحدث المقالات والنصائح حول نقل الأثاث، التغليف الاحترافي، فك وتركيب التكييفات، وخدمات النقل في المدن الجديدة من خبراء البركة.",
  path: "/blog",
});

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const restPosts = blogPosts.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1B2A41] via-[#0F1A2B] to-[#1B2A41] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9A961] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C9A961] rounded-full blur-3xl" />
        </div>

        <div className="relative container-custom py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-[#C9A961]/20 text-[#C9A961] border-[#C9A961]/30 mb-5 px-4 py-1.5">
              <BookOpen className="w-3 h-3 ml-1.5" />
              مدونة البركة
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight">
              نصائح وأدلة من <span className="text-[#C9A961]">خبراء النقل</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              مقالات احترافية ونصائح قيمة من خبرة 10+ سنوات في مجال نقل الأثاث
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-10">
            <Badge variant="outline" className="border-[#C9A961] text-[#C9A961] mb-3">
              <Sparkles className="w-3 h-3 ml-1.5" />
              المقال المميز
            </Badge>
            <h2 className="text-2xl md:text-3xl font-black text-[#1B2A41]">أحدث المقالات</h2>
          </div>

          <Link href={`/blog/${featuredPost.slug}`}>
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer border-gray-200">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px] overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#C9A961] text-white border-0">
                      {blogCategories.find(c => c.slug === featuredPost.category)?.name}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString("ar-EG", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime} دقائق قراءة
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#1B2A41] mb-4 leading-tight group-hover:text-[#C9A961] transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[#C9A961] font-bold group-hover:gap-3 transition-all">
                    اقرأ المقال كاملاً
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#F8F6F2] py-8">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {blogCategories.map((cat) => (
              <button
                key={cat.slug}
                className={`bg-gradient-to-br ${cat.color} text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg transition-all`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-[#1B2A41] mb-2">جميع المقالات</h2>
            <p className="text-gray-600">{blogPosts.length} مقال احترافي في خدمتك</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restPosts.map((post) => {
              const category = blogCategories.find(c => c.slug === post.category);
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full overflow-hidden hover:shadow-xl hover:border-[#C9A961] transition-all duration-300 group cursor-pointer border-gray-200">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className={`bg-gradient-to-br ${category?.color} text-white border-0 text-xs`}>
                          {category?.name}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.publishedAt).toLocaleDateString("ar-EG", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime} د
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#1B2A41] mb-3 leading-tight group-hover:text-[#C9A961] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-[#C9A961] font-bold text-sm pt-3 border-t border-gray-100">
                        اقرأ المزيد
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F6F2] py-12 md:py-16">
        <div className="container-custom">
          <Card className="bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] border-0 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A961] rounded-full blur-3xl" />
            </div>
            <CardContent className="p-8 md:p-12 text-center relative">
              <h2 className="text-2xl md:text-3xl font-black mb-4">
                هل لديك سؤال؟ <span className="text-[#C9A961]">نحن هنا لمساعدتك</span>
              </h2>
              <p className="text-white/70 mb-6 max-w-xl mx-auto">
                تواصل معنا للحصول على استشارة مجانية وعرض سعر يناسب احتياجاتك
              </p>
              <Button asChild size="lg" className="bg-[#C9A961] hover:bg-[#A8893F] text-white h-12 px-8">
                <Link href="/contact">
                  تواصل معنا الآن
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
