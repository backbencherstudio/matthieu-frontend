"use client";

interface AuthHeroProps {
  heroImage?: string;
  title?: string;
}

export function AuthHero({ heroImage, title }: AuthHeroProps) {
  return (
    <div className="maxContainer">
      {/* Hero Image Section */}
      <div className="relative xl:w-[1480px] xl:h-[380px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative h-full flex items-center justify-center p-8">
          <h1 className="text-[40px] font-extrabold text-white text-center font-avenir">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
