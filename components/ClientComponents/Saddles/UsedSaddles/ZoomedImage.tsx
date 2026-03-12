"use client";

import { useRef, useState } from "react";

interface ZoomImageProps {
  src: string;
  alt?: string;
  zoomLevel?: number;
}

export function ZoomImage({ src, alt = "", zoomLevel = 2.5 }: ZoomImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [bgPosition, setBgPosition] = useState("50% 50%");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const { left, top, width, height } = container.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setBgPosition(`${x}% ${y}%`);
  };

  return (
    <div
      ref={containerRef}
      className="w-full max-h-[350px] flex justify-center items-center bg-white overflow-hidden cursor-crosshair relative"
      style={{ height: "350px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Normal image - hidden on hover */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain transition-opacity duration-200"
        style={{ opacity: isHovered ? 0 : 1 }}
      />

      {/* Zoomed background layer */}
      <div
        className="absolute inset-0 transition-opacity duration-200"
        style={{
          opacity: isHovered ? 1 : 0,
          backgroundImage: `url(${src})`,
          backgroundSize: `${zoomLevel * 100}%`,
          backgroundPosition: bgPosition,
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
}