"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { videos } from "@/config/media";
import { Play, Video, X } from "lucide-react";

export function VideosSection() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  return (
    <section className="section-padding bg-gradient-to-br from-[#1B2A41] via-[#0F1A2B] to-[#1B2A41] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A961] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A961] rounded-full blur-3xl" />
      </div>

      <div className="relative container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
        >
          <Badge className="bg-[#C9A961]/20 text-[#C9A961] border-[#C9A961]/30 hover:bg-[#C9A961]/30 mb-4 px-4 py-1.5">
            <Video className="w-3 h-3 ml-1.5" />
            شاهد بنفسك
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
            فيديوهات من <span className="text-[#C9A961]">شغلنا الحقيقي</span>
          </h2>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            شاهد كيف نتعامل مع مقتنياتك باحترافية من البداية للنهاية
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-video overflow-hidden rounded-xl cursor-pointer bg-black/50 border border-white/10 hover:border-[#C9A961]/50 transition-all"
              onClick={() => setSelectedVideo(video)}
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#C9A961] hover:bg-[#A8893F] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white mr-1" />
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 md:p-5">
                <h3 className="font-bold text-white text-sm md:text-base mb-1">
                  {video.title}
                </h3>
                <p className="text-xs text-white/70 line-clamp-2">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Player Dialog */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black border-0">
          <DialogTitle className="sr-only">{selectedVideo?.title}</DialogTitle>
          {selectedVideo && (
            <div className="relative">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 left-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <video
                src={selectedVideo.src}
                controls
                autoPlay
                className="w-full aspect-video"
              >
                متصفحك لا يدعم تشغيل الفيديو
              </video>
              <div className="bg-black p-4 md:p-6">
                <h3 className="text-white font-bold text-lg mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-white/70 text-sm">{selectedVideo.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
