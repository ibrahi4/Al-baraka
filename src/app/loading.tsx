import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-[#C9A961]/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-[#C9A961] rounded-full border-t-transparent animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full h-full">
              <Image
                src="/icon-512.png"
                alt="البركة"
                fill
                className="object-contain"
                sizes="80px"
                priority
              />
            </div>
          </div>
        </div>
        
        <div className="text-[#1B2A41] font-bold text-lg mb-2">جاري التحميل...</div>
        <div className="text-gray-500 text-sm">شركة البركة لنقل الأثاث</div>
      </div>
    </div>
  );
}
