"use client";

interface AuthHeroProps {
  heroImage?: string;
  title?: string;
}

export function AuthHero({ heroImage, title }: AuthHeroProps) {
  return (
    <div className="maxContainer">
      {/* Hero Image Section */}
      <div className="relative w-full  xl:py-[165px] lg:py-[100px] md:py-[80px] py-[60px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute bg-[#0000004D]/100 inset-0" />
        <div className="relative h-full flex items-center justify-center ">
          <h1 className="text-[40px] font-extrabold text-white text-center leading-[124%]">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
