const heroTitle = [
  {
    title: "BRAND",
  },
  {
    title: "SADDLES",
  },
  {
    title: "TACK",
  },
  {
    title: "FIND US",
  },
];

export default function HeroSection() {
  return (
    <div className="maxContainer mb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-9">
        <div className="p-8 bg-[#1F274B] flex items-center justify-center">
          <div>
            <h1 className="text-[32px] leading-[1.24] tracking-[0.64px] font-extrabold text-[#FFF]">
              SHOP OUR BEST SELLERS
            </h1>
            <p className="text-xl leading-[1.26] tracking-[0.64px] normal-case mt-4 text-[#FFF]">
              Explore our wide variety of tack and accessories! From everyday
              training to durable performance tack.
            </p>
          </div>
        </div>

        {heroTitle.slice(1).map((item, index) => (
          <div key={index}>
            <div className=" p-3 bg-[#F8F9FB]">
              <div className=" w-full  bg-white overflow-hidden">
                <img src="/home/bridles.png" alt="bridles" className=" " />
              </div>
              <div className="mt-5 flex flex-col gap-[14px]">
                <p className="lg:text-xl md:text-lg font-extrabold leading-[124%] text-[#4C526F] text-base">
                  BRIDLES
                </p>
                <h3 className="textSecondary leading-[124%] lg:text-xl md:text-lg  text-base">
                  Anatomical double noseband bridle
                </h3>
                <p className="textSecondary font-extrabold leading-[136%] lg:text-xl md:text-lg text-base ">
                  $370.00
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {heroTitle.map((item, index) => (
          <div key={index} className="text-center px-9 py-[18px] bg-[#1F274B]">
            <h1 className="text-xl font-extrabold leading-[100%] uppercase text-[#FFF]">
              {item?.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
