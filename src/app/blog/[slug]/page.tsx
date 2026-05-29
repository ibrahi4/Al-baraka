import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, Clock, ArrowLeft, User, Share2, 
  Phone, MessageCircle, ChevronLeft, BookOpen 
} from "lucide-react";
import { blogPosts, blogCategories } from "@/config/blog";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const category = blogCategories.find(c => c.slug === post.category);
  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: siteConfig.url },
    { name: "المدونة", url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
  };

  // تحويل المحتوى Markdown البسيط لـ HTML
  const renderContent = (content: string) => {
    return content
      .split("\n")
      .map((line, i) => {
        if (line.startsWith("## ")) {
          return `<h2 key="${i}" class="text-2xl md:text-3xl font-black text-[#1B2A41] mt-10 mb-4">${line.replace("## ", "")}</h2>`;
        }
        if (line.startsWith("### ")) {
          return `<h3 key="${i}" class="text-xl font-bold text-[#1B2A41] mt-6 mb-3">${line.replace("### ", "")}</h3>`;
        }
        if (line.startsWith("- ")) {
          return `<li key="${i}" class="mr-6 mb-2 text-gray-700">${line.replace("- ", "")}</li>`;
        }
        if (line.match(/^\d+\./)) {
          return `<li key="${i}" class="mr-6 mb-2 text-gray-700">${line.replace(/^\d+\.\s/, "")}</li>`;
        }
        if (line.startsWith("**") && line.endsWith("**")) {
          return `<p key="${i}" class="font-bold text-[#1B2A41] my-3">${line.replace(/\*\*/g, "")}</p>`;
        }
        if (line.trim() === "") {
          return "";
        }
        // Bold inline
        const processed = line.replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#1B2A41] font-bold">$1</strong>');
        return `<p key="${i}" class="text-gray-700 leading-relaxed mb-4">${processed}</p>`;
      })
      .join("");
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-[#F8F6F2] border-b border-gray-100">
        <div className="container-custom py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#C9A961] transition-colors">الرئيسية</Link>
            <ChevronLeft className="w-4 h-4" />
            <Link href="/blog" className="hover:text-[#C9A961] transition-colors">المدونة</Link>
            <ChevronLeft className="w-4 h-4" />
            <span className="text-[#1B2A41] font-semibold line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Hero */}
      <section className="relative bg-gradient-to-br from-[#1B2A41] via-[#0F1A2B] to-[#1B2A41] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9A961] rounded-full blur-3xl" />
        </div>

        <div className="relative container-custom py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-5">
              <Badge className={`bg-gradient-to-br ${category?.color} text-white border-0`}>
                {category?.name}
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight text-center">
              {post.title}
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#C9A961]" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#C9A961]" />
                {new Date(post.publishedAt).toLocaleDateString("ar-EG", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C9A961]" />
                {post.readTime} دقائق قراءة
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container-custom -mt-8 relative z-10 mb-12">
        <div className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="section-padding bg-white pt-0">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
              />

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm font-bold text-[#1B2A41]">الكلمات المفتاحية:</span>
                  {post.keywords.map((keyword, i) => (
                    <Badge key={i} variant="outline" className="border-gray-300 text-gray-600">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-6 flex items-center gap-3">
                <span className="text-sm font-bold text-[#1B2A41] flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  شارك المقال:
                </span>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(post.title + " - " + siteConfig.url + "/blog/" + post.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* CTA Card */}
                <Card className="bg-gradient-to-br from-[#1B2A41] to-[#0F1A2B] border-0 text-white">
                  <CardContent className="p-6">
                    <BookOpen className="w-10 h-10 text-[#C9A961] mb-3" />
                    <h3 className="font-black text-xl mb-2">هل تحتاج خدمة نقل؟</h3>
                    <p className="text-sm text-white/70 mb-4">
                      احصل على استشارة مجانية من خبراء البركة
                    </p>
                    <Button asChild className="w-full bg-[#C9A961] hover:bg-[#A8893F] text-white mb-2">
                      <a href={`tel:${siteConfig.phone}`}>
                        <Phone className="w-4 h-4 ml-2" />
                        اتصل الآن
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full bg-white/10 hover:bg-white/20 border-white/30 text-white hover:text-white">
                      <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 ml-2" />
                        واتساب
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Categories */}
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#1B2A41] mb-4">الأقسام</h3>
                    <div className="space-y-2">
                      {blogCategories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/blog?category=${cat.slug}`}
                          className="block bg-gray-50 hover:bg-[#C9A961]/10 hover:text-[#C9A961] p-3 rounded-lg text-sm font-semibold text-gray-700 transition-colors"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-[#F8F6F2]">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-black text-[#1B2A41] mb-8">
              مقالات ذات صلة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`}>
                  <Card className="h-full overflow-hidden hover:shadow-xl hover:border-[#C9A961] transition-all duration-300 group cursor-pointer border-gray-200">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-bold text-[#1B2A41] mb-2 leading-tight group-hover:text-[#C9A961] transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {related.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
