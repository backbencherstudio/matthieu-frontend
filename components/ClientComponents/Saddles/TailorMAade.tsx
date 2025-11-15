export default function TailorMAade() {
  return (
    <div>
      <h1 className="text-[40px] font-extrabold leading-[100%] tracking-[0.8px] text-[#1F274B] text-center">
        ATHENA SADDLES
      </h1>
      <p className="text-[#4C526F] md:text-2xl text-lg font-normal leading-[100%] tracking-[.48px] md:mt-4 mt-3 text-center">
        TAILOR MADE
      </p>

      <div className="mt-10 flex items-center justify-center mb-12">
        <button className="px-8 py-4 bg-[#1F274B] text-[#FFF]">
          TRY A SADDLE
        </button>
      </div>

      <video
        autoPlay
        muted
        loop
        className="md:h-[500px] w-full object-cover"
        poster="/video/thumbnail.png"
      >
        <source src="/bannerVideo/homeBanner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
