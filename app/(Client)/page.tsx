import BestSellersSection from "@/components/ClientComponents/HomePage/BestSellersSection";
import HeroSection from "@/components/ClientComponents/HomePage/HeroSection";
import HomeBanner from "@/components/ClientComponents/HomePage/HomeBanner";

export default function ClientHomePage() {
  return (
    <div className="">
      <div>
        <HomeBanner />
        <HeroSection />
        <div className="lg:py-[80px] py-[60px] maxContainer">
          <BestSellersSection />
        </div>
        {/* <div className='lg:py-[80px] py-[60px] maxContainer'>
          <BestSellerBottom/>
        </div> */}
      </div>
    </div>
  );
}
