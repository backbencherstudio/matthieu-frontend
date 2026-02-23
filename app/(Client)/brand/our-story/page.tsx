import Gallery from "@/components/ClientComponents/OurStory/Gallery";
import Image from "next/image";
import React from "react";

interface Gallery {
  id: number;
  image: string;
  alt: string;
}

export default function page() {
  const storyGallery: Gallery[] = [
    {
      id: 1,
      image: "/images/story-1.png",
      alt: "story-1",
    },
    {
      id: 2,
      image: "/images/story-2.png",
      alt: "story-2",
    },
    {
      id: 3,
      image: "/images/story-3.png",
      alt: "story-3",
    },
  ];

  const missionGallery: Gallery[] = [
    {
      id: 1,
      image: "/images/mission-1.png",
      alt: "mission-1",
    },
    {
      id: 2,
      image: "/images/mission-2.png",
      alt: "mission-2",
    },
    {
      id: 3,
      image: "/images/mission-3.png",
      alt: "mission-3",
    },
  ];

  return (
    <div>
      <div className="maxContainer">
        {/* Banner */}
        <div>
          <Image
            src="/images/meet-the-team/COVER PICTURE.jpg"
            alt="our-story-banner"
            width={1000}
            height={1000}
            unoptimized
            className="w-full h-[200px] md:h-auto object-cover object-top"
          />
        </div>

        {/* Our Story */}
        <div className="py-[50px] pb-0 md:py-[60px]">
          <div className="mb-8 md:mb-10 text-center text-primary-bg">
            <h1 className="uppercase text-3xl md:text-[40px] font-extrabold ">
              OUR STORY
            </h1>
          </div>

          <div className="space-y-3 normal-case text-secondary-text  text-base md:text-lg border-b md:pb-8 pb-5">
              <div className="my-3 normal-case text-secondary-text  text-lg md:text-xl ">
            <h5 className="font-semibold pt-2">The Name: Arion</h5>
          </div>
            <p>
              The origin of Arion begins with our name. Inspired by passion and purpose, we chose <strong>Arion</strong> for
              its simplicity and resonance across all languages
            </p>

            <p>
              In Greek mythology, Arion is an immortal horse who feeds on gold and carries the messenger of
              the gods—renowned as the fastest of all. A symbol of longevity, excellence, and performance,
              this legendary figure reflects the values at the heart of our brand
            </p>
          </div>
          <div className="my-3 normal-case text-secondary-text  text-lg md:text-xl ">
            <h5 className="font-semibold pt-2">From Vision to Reality</h5>
          </div>
          <div className="space-y-3 normal-case text-secondary-text  text-base md:text-lg ">
            <p> Arion’s journey began in <strong>2018</strong>, when French entrepreneur and equestrian <strong>Sylvain Houry</strong>
              founded Arion <strong>Horse Sport Tack</strong> in the United States. The brand initially focused on premium
              tack and accessories, partnering with a French saddler to bring refined craftsmanship to the
              American market.</p>
            <p>
              By <strong>2020</strong>, Sylvain envisioned expanding into saddlery. Alongside his longtime friend and fellow
              competitor, <strong>Hadrien Schenck</strong>, he took the bold step of launching a new venture during a global
              crisis. United by years of friendship, professional riding careers in <strong>show jumping and eventing</strong>,
              and a shared dedication to horse and rider, they set out to redefine what modern saddlery could
              be.
            </p>
            <p>
              With this vision, <strong>Arion Sellier</strong> was born in <strong>June 2020</strong>—a brand rooted in French craftsmanship
              and driven by innovation, precision, and performance.
            </p>
          </div>


          <Gallery gallery={storyGallery} />
        </div>

        {/* Our Mission */}
        <div className="py-[50px] md:py-[60px]">
          <h1 className="uppercase text-3xl md:text-[40px] font-extrabold mb-8 md:mb-12 text-center text-primary-bg">
            OUR MISSION
          </h1>

          <div className="space-y-3 normal-case text-secondary-text text-base md:text-lg border-b md:pb-8 pb-5">
            <div className="my-3 normal-case text-secondary-text  text-lg md:text-xl ">
              <h5 className="font-semibold ">Designed for Horse & Rider</h5>
            </div>
            <p>
              Arion exists to reveal the true potential of every horse.
            </p>
            <p>
              No matter your discipline or level, our mission is to provide riders with high-end, innovative saddles, tack, and accessories that deliver exceptional comfort while prioritizing the horse’s well-being. Every design decision is guided by balance, biomechanics, and performance.
            </p>
          </div>


          <div className="space-y-3 normal-case text-secondary-text text-base md:text-lg border-b md:pb-8 pb-5">
            <div className="my-3 normal-case text-secondary-text  text-lg md:text-xl ">
              <h5 className="font-semibold pt-2">Made in France</h5>
            </div>
            <div className="space-y-3 normal-case text-secondary-text  text-base md:text-lg ">
              <p>Every Arion saddle is <strong>handmade in France,</strong> at the foot of the <strong>Pyrenees</strong>, where generations of
                craftsmanship meet modern innovation.</p>
              <p>
                We carefully select the finest French leathers and combine traditional artistry with advanced
                manufacturing tools. This approach allows our partner workshop to create saddles that embody
                authenticity, durability, and precision—resulting in an unparalleled riding experience.
              </p>
            </div>
          </div>

          <div className="space-y-3 normal-case text-secondary-text text-base md:text-lg ">
            <div className="my-3 normal-case text-secondary-text  text-lg md:text-xl ">
              <h5 className="font-semibold pt-2">Expertise You Can Trust</h5>
            </div>
            <div className="space-y-3 normal-case text-secondary-text  text-base md:text-lg ">
              <p>At the heart of Arion is a dedicated team of experts.</p>
              <p>
                Specially trained to understand your needs, take precise measurements, and respond to even the
                most specific requests, our team guides you through every step of creating your dream saddle—
                crafted exclusively for you and your horse.
              </p>
            </div>
          </div>



          <Gallery gallery={missionGallery} />
        </div>
      </div>
    </div>
  );
}
