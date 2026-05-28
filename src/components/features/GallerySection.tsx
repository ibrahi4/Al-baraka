"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { gallery } from "@/config/media";
import { Camera, X } from "lucide-react";

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof gallery[0] | null>(null);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {gallery.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-gray-100"
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A41]/90 via-[#1B2A41]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 right-0 left-0 p-4">
                  <Badge className="bg-[#C9A961] text-white border-0 mb-2 text-[10px]">
                    {item.category}
                  </Badge>
                  <p className="text-white text-xs md:text-sm font-bold leading-tight">
                    {item.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
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
