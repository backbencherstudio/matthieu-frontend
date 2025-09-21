import Image from "next/image";
import React from "react";

interface Gallery {
  id: number;
  image: string;
  alt: string;
}

export default function Gallery({ gallery }: { gallery: Gallery[] }) {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-6">
        {gallery.map((item) => (
          <div key={item.id}>
            <Image
              src={item.image}
              alt={item.alt}
              width={1000}
              height={1000}
              className="w-full h-auto xl:h-[500px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
