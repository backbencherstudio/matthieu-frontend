function ShopAccessories() {
  const cards = [1, 2, 3, 4];
  return (
    <div>
      <h1 className="text-[32px] font-extrabold leading-[100%] text-center text-[#1F274B]">
        SHOP ACCESSORIES
      </h1>

      <div className="grid grid-cols-4 gap-4 mt-10">
        {cards.map((item, index) => (
          <div key={index}>
            <div className="p-3 bg-[#F8F9FB]">
              <div className="w-full bg-white overflow-hidden">
                <img src="/home/bridles.png" alt="bridles" />
              </div>

              <div className="mt-5 flex flex-col gap-[14px]">
                <p className="lg:text-xl md:text-lg font-extrabold leading-[124%] text-[#4C526F] text-base">
                  BRIDLES
                </p>
                <h3 className="textSecondary leading-[124%] lg:text-xl md:text-lg text-base">
                  Anatomical double noseband bridle
                </h3>
                <p className="textSecondary font-extrabold leading-[136%] lg:text-xl md:text-lg text-base">
                  $370.00
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopAccessories;
