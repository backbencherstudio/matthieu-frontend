"use client";
import React from "react";
import Image from "next/image";
export default function OurWorkShop() {
  return (
    <div>
      <div className="maxContainer">
        {/* Banner */}
        <div>
          <Image
            src="/images/workshop/top.JPG"
            alt="our-workshop-banner"
            width={1000}
            height={1000}
            unoptimized
            className="w-full h-[200px] md:h-full max-h-[400px] object-cover object-top"
          />
        </div>

        {/* Content */}
        <div className="pt-10 xl:pt-12 pb-16 xl:pb-30">
          {/* Header */}
          <div className="text-center">
            <h1 className="uppercase text-3xl md:text-[40px] font-extrabold text-primary-text">
              OUR WORKSHOP
            </h1>
            <p className="text-secondary-text text-center text-base md:text-lg mt-4 normal-case max-w-[600px] w-full mx-auto tracking-[160%]">
              Located in the beautiful southwest of France, in Basque county.
              Our workshop is filled with heritage and passion.
            </p>
          </div>

          {/* Video */}
          <div className="mt-12 relative">
            <video
              className="h-[300px] md:h-[450px] xl:h-[600px] w-full object-cover"
              poster="/video/movie_thumbnail.JPG"
              muted
              onClick={() => {
                const video = document.querySelector("video");
                if (video.paused) {
                  video.play();
                  document.getElementById("play-button").style.display = "none";
                } else {
                  video.pause();
                  document.getElementById("play-button").style.display =
                    "block";
                }
              }}
            >
              <source src="/video/video-comp.mp4" type="video/mp4" />
            </video>

            <button
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer outline-none shadow-none"
              id="play-button"
              onClick={() => {
                const video = document.querySelector("video");
                video.play();
                document.getElementById("play-button").style.display = "none";
              }}
            >
              <Image
                src="/images/play-icon.png"
                alt="play-icon"
                width={300}
                height={300}
                unoptimized
                className="w-[60px] h-[60px] rounded-full"
              />
            </button>
          </div>

          {/* Description */}
          <div className="py-8 flex flex-col gap-4">
            <p className="text-base md:text-lg text-[#4A4C56] normal-case leading-[148%] tracking-[0.36px]">
              At Arion Sellier, we showcase French saddlery expertise by
              crafting custom and semi-custom saddles in partnership with a
              renowned workshop in southwest France. With over 40 years of
              experience, this family- run atelier combines traditional
              craftsmanship with modern innovation, using French materials to
              create elegant, high-performance saddles. Its close proximity to
              our offices ensures continuous innovation and rigorous quality
              control.
            </p>

            <p className="text-base md:text-lg text-[#4A4C56] normal-case leading-[148%] tracking-[0.36px]">
              In this Basque workshop, skilled leatherworkers carefully select,
              cut, and assemble each piece. Advanced tools—such as digital
              cutting for precision, 3D printing for prototyping, and laser
              engraving—support, rather than replace, artisanal know-how. Every
              saddle requires more than 75 components, sewn and assembled by
              hand over 40 hours, resulting in a unique, numbered creation. The
              workshop also embraces a strong CSR commitment, promoting gender
              balance, local employment, leather recycling, and 100% renewable
              energy through solar power.
            </p>
          </div>

          {/* Gallery */}
          <div className="pb-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="overflow-hidden cursor-pointer">
              <Image
                src="/images/workshop/bottom_1.JPG"
                alt="our-workshop-gallery-01"
                width={1000}
                height={1000}
                unoptimized
                className="w-full h-[250px] md:h-[385px] object-cover hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="overflow-hidden cursor-pointer">
              <Image
                src="/images/workshop/bottom_2.JPG"
                alt="our-workshop-gallery-02"
                width={1000}
                height={1000}
                unoptimized
                className="w-full h-[250px] md:h-[385px] object-cover hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="overflow-hidden cursor-pointer">
              <Image
                src="/images/workshop/bottom_3.JPG"
                alt="our-workshop-gallery-03"
                width={1000}
                height={1000}
                unoptimized
                className="w-full h-[250px] md:h-[385px] object-cover hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="overflow-hidden cursor-pointer">
              <Image
                src="/images/workshop/bottom_4.JPG"
                alt="our-workshop-gallery-04"
                width={1000}
                height={1000}
                unoptimized
                className="w-full h-[250px] md:h-[385px] object-cover hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-4">
            <p className="text-base md:text-lg text-[#4A4C56] normal-case leading-[148%] tracking-[0.36px]">
              Because we favor short supply circuits and companies committed to
              limiting their environmental impact, our leathers are sublimated
              in French tanneries that have a unique traditional know-how passed
              down from generation to generation.
            </p>

            <p className="text-base md:text-lg text-[#4A4C56] normal-case leading-[148%] tracking-[0.36px]">
              Our grained leathers are treated with vegetable tanning based on
              chestnut or mimosa. This technique allows us to reduce our
              ecological footprint on the one hand. But also to obtain deeper
              colors and a nice patina. The mineral tanning is only used for the
              back straps to ensure the leather's rigidity and therefore the
              saddle's stability.
            </p>

            <p className="text-base md:text-lg text-[#4A4C56] normal-case leading-[148%] tracking-[0.36px]">
              Our soft leathers, with a waxy touch, come from a family tannery.
              This leather is produced made-to- order and is used to supply the
              most beautiful luxury houses in France. As for the buffalo
              leather, its velvety finish comes from a full grain leather,
              carefully tanned, and finely polished.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
