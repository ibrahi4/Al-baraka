"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Desktop Only */}
      <div className="hidden lg:block bg-[#1B2A41] text-white">
        <div className="container-custom">
          <div className="flex items-center justify-between py-2.5 text-xs">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C9A961]" />
                {siteConfig.address}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C9A961]" />
                متاحون 24/7 لخدمتكم
              </span>
            </div>
            <a 
              href={`tel:${siteConfig.phone}`} 
              className="flex items-center gap-2 hover:text-[#C9A961] transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span dir="ltr">{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={cn(
          "sticky top-0 z-50 bg-white transition-all duration-300",
          scrolled ? "shadow-md" : "border-b border-gray-100"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#1B2A41] rounded-lg flex items-center justify-center">
                <span className="text-[#C9A961] font-black text-xl lg:text-2xl">ب</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[#1B2A41] font-bold text-sm lg:text-base">شركة البركة</span>
                <span className="text-gray-500 text-[10px] lg:text-xs">لنقل الأثاث</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {mainNav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-semibold rounded-md transition-colors",
                      active
                        ? "text-[#C9A961] bg-[#C9A961]/10"
                        : "text-gray-700 hover:text-[#C9A961] hover:bg-gray-50"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <Button 
                asChild 
                className="bg-[#C9A961] hover:bg-[#A8893F] text-white font-bold shadow-md"
              >
                <a 
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 ml-1" />
                  طلب عرض سعر
                </a>
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                asChild
                size="icon"
                className="bg-[#C9A961] hover:bg-[#A8893F] text-white shadow-md h-10 w-10"
              >
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="w-4 h-4" />
                </a>
              </Button>

              <Sheet>
                <SheetTrigger
                  className="inline-flex items-center justify-center h-10 w-10 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <Menu className="w-5 h-5" />
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
                  <SheetTitle className="sr-only">القائمة</SheetTitle>
                  
                  {/* Mobile Menu Header */}
                  <div className="bg-[#1B2A41] text-white p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#C9A961] rounded-lg flex items-center justify-center">
                        <span className="text-[#1B2A41] font-black text-2xl">ب</span>
                      </div>
                      <div>
                        <div className="font-bold">شركة البركة</div>
                        <div className="text-xs text-white/70">لنقل الأثاث</div>
                      </div>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      خبرة أكثر من {siteConfig.yearsOfExperience} سنوات في خدمتكم
                    </p>
                  </div>

                  {/* Navigation Links */}
                  <nav className="p-4 flex flex-col gap-1">
                    {mainNav.map((item) => {
                      const active = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "px-4 py-3 rounded-lg text-sm font-semibold transition-colors",
                            active
                              ? "bg-[#C9A961]/10 text-[#C9A961]"
                              : "text-gray-700 hover:bg-gray-50"
                          )}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Mobile Menu Footer */}
                  <div className="p-4 border-t border-gray-100 mt-auto space-y-2">
                    <Button 
                      asChild 
                      className="w-full bg-[#1B2A41] hover:bg-[#0F1A2B] text-white"
                    >
                      <a href={`tel:${siteConfig.phone}`}>
                        <Phone className="w-4 h-4 ml-2" />
                        اتصل الآن
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      className="w-full bg-[#C9A961] hover:bg-[#A8893F] text-white"
                    >
                      <a 
                        href={`https://wa.me/${siteConfig.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 ml-2" />
                        واتساب
                      </a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
