"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  fallback?: string;
  containerClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  fallback = "/placeholder.jpg",
  className,
  containerClassName,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-gray-100", containerClassName)}>
      {/* Skeleton Loader */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      )}

      <Image
        src={hasError ? fallback : src}
        alt={alt}
        className={cn(
          "transition-all duration-500",
          isLoading ? "scale-110 blur-lg opacity-0" : "scale-100 blur-0 opacity-100",
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        quality={85}
        {...props}
      />
    </div>
  );
}
