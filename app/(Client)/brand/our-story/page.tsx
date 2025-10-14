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
            src="/images/our-story-banner.png"
            alt="our-story-banner"
            width={1000}
            height={1000}
            unoptimized
            className="w-full h-[200px] md:h-auto object-cover object-top"
          />
        </div>

        {/* Our Story */}
        <div className="py-[50px] pb-0 md:py-[60px]">
          <h1 className="uppercase text-3xl md:text-[40px] font-extrabold mb-8 md:mb-12 text-center text-primary-bg">
            OUR STORY
          </h1>

          <div className="space-y-3 normal-case text-secondary-text text-center text-base md:text-lg">
            <p>
              The origin of Arion begins with our name. Inspired by passion, we
              chose "Arion" for its simplicity and resonance across all
              languages. In Greek mythology, Arion is an immortal horse who
              feeds on gold and carries the messenger of the gods, known as the
              fastest of all. This legendary name, symbolizing longevity,
              excellence. and performance perfectly reflects the values at the
              heart of our brand. Arion's journey started in 2018, when French
              entrepreneur and equestrian Sylvain Houry founded Arion Horse
              Sport Tack in the United States. At first, the company offered
              only tack and accessories, crafted in partnership with a French
              saddler.
            </p>

            <p>
              By 2020, Sylvain envisioned expanding into saddlery. Together with
              his longtime friend and fellow competitor, Hadrien Schenck, he
              took the bold step to launch a new venture in the midst of a
              global crisis. United by years of friendship, professional riding
              careers in show jumping and evening, and a shared commitment to
              horse and rider, they set out with two guiding principles: To
              offer amateur and professional riders alike innovative, high-end
              saddles that deliver absolute comfort while prioritizing the
              horse's well-being.
            </p>

            <p>
              To craft exceptional, custom-made saddles in France using only the
              finest materials, built on principles of ergonomics, and entrusted
              to artisans with generations of expertise. With this vision, Arion
              Sellier was born in June 2020 _ Every saddle reflects the
              precision of French craftsmanship and the pursuit of excellence,
              serving both horse and rider in perfect harmony.
            </p>
          </div>

          <Gallery gallery={storyGallery} />
        </div>

        {/* Our Mission */}
        <div className="py-[50px] md:py-[60px]">
          <h1 className="uppercase text-3xl md:text-[40px] font-extrabold mb-8 md:mb-12 text-center text-primary-bg">
            OUR MISSION
          </h1>

          <div className="space-y-3 normal-case text-secondary-text text-center text-base md:text-lg">
            <p>
              Arion exists to reveal the true potential of every horse. NO
              matter your discipline or level, we provide riders with
              top-of-the-line, innovative tack and accessories designed for
              performance and well-being. To achieve this, we carefully select
              the finest French leathers and embrace modern technologies that
              prioritize the comfort of both horse and rider.
            </p>

            <p>
              Our ambition is simple: to create saddles that bring harmony,
              ease, and precision to your sport. Every Arion saddle is handmade
              in France, at the foot Of the Pyrenees, where a rich heritage Of
              craftsmanship meets modern innovation. By combining traditional
              artistry with advanced manufacturing tools, our partner workshop
              delivers products that embody both authenticity and performance.
              This balance of audacity and tradition results in an unparalleled
              riding experience—one where excellence is felt in every detail.
            </p>

            <p>
              At the heart of Arion is a dedicated team of experts. Specially
              trained to understand your needs, take precise measurements, and
              answer your most specific requests, they guide you through the
              journey of creating your dream saddle—crafted exclusively for you
              and your horse.
            </p>
          </div>

          <Gallery gallery={missionGallery} />
        </div>
      </div>
    </div>
  );
}
