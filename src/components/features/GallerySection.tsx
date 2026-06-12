"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { gallery } from "@/config/media";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof gallery[0] | null>(null);

  // ============================
  // Embla Carousel Setup
  // ============================
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      direction: "rtl",
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 640px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 3 },
        "(min-width: 1280px)": { slidesToScroll: 4 },
      },
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
        >
          <Badge variant="outline" className="border-[#C9A961] text-[#C9A961] mb-4">
            <Camera className="w-3 h-3 ml-1.5" />
            معرض أعمالنا
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1B2A41] mb-4">
            شغلنا الحقيقي يتكلم عنا
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            مشاهدات من مشاريع نقل الأثاث التي نفذناها بنجاح لعملائنا
          </p>
        </motion.div>

        {/* ============================
            Carousel Container
            ============================ */}
        <div className="relative">
          {/* Slider Wrapper */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -mx-1.5 md:-mx-2">
              {gallery.map((item, i) => (
                <div
                  key={item.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] px-1.5 md:px-2"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-gray-100 shadow-md hover:shadow-2xl transition-shadow duration-300"
                    onClick={() => setSelectedImage(item)}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      loading={i < 4 ? "eager" : "lazy"}
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A41]/95 via-[#1B2A41]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 right-0 left-0 p-4">
                        <Badge className="bg-[#C9A961] text-white border-0 mb-2 text-[10px]">
                          {item.category}
                        </Badge>
                        <p className="text-white text-xs md:text-sm font-bold leading-tight">
                          {item.alt}
                        </p>
                      </div>
                    </div>

                    {/* Always Visible Badge - Mobile */}
                    <div className="absolute top-3 right-3 md:hidden">
                      <Badge className="bg-[#C9A961]/90 text-white border-0 text-[10px] backdrop-blur-sm">
                        {item.category}
                      </Badge>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* ============================
              Navigation Arrows - Desktop
              ============================ */}
          <div className="hidden md:block">
            <button
              onClick={scrollPrev}
              className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-6 z-20 w-12 h-12 bg-white hover:bg-[#C9A961] text-[#1B2A41] hover:text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 border border-gray-200"
              aria-label="الصورة السابقة"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <button
              onClick={scrollNext}
              className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-6 z-20 w-12 h-12 bg-white hover:bg-[#C9A961] text-[#1B2A41] hover:text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 border border-gray-200"
              aria-label="الصورة التالية"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* ============================
            Mobile Navigation
            ============================ */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-6">
          <button
            onClick={scrollPrev}
            className="w-11 h-11 bg-[#1B2A41] hover:bg-[#C9A961] text-white rounded-full flex items-center justify-center transition-all active:scale-95"
            aria-label="الصورة السابقة"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            onClick={scrollNext}
            className="w-11 h-11 bg-[#1B2A41] hover:bg-[#C9A961] text-white rounded-full flex items-center justify-center transition-all active:scale-95"
            aria-label="الصورة التالية"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        {/* ============================
            Dots Indicator
            ============================ */}
        <div className="flex items-center justify-center gap-2 mt-6 md:mt-8 flex-wrap max-w-md mx-auto">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === selectedIndex
                  ? "w-8 bg-[#C9A961]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`الانتقال للمجموعة ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-4 text-sm text-gray-500">
          <span className="font-bold text-[#C9A961]">{gallery.length}</span> صورة من مشاريعنا
        </div>
      </div>

      {/* ============================
          Lightbox Dialog
          ============================ */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-0">
          <DialogTitle className="sr-only">{selectedImage?.alt}</DialogTitle>
          {selectedImage && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 left-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.src.replace("w=800", "w=1600")}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black to-transparent p-6">
                <Badge className="bg-[#C9A961] text-white border-0 mb-2">
                  {selectedImage.category}
                </Badge>
                <p className="text-white font-bold">{selectedImage.alt}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}