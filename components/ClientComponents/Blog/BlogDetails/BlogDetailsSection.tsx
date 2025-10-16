import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogs = [
  {
    id: 1,
    type: "rider-spotlights",
    image: "/images/blog-01.png",
  },
  {
    id: 2,
    type: "competition-highlights",
    image: "/images/blog-02.png",
  },
  {
    id: 3,
    type: "arion-on-the-road",
    image: "/images/blog-03.png",
  },
  {
    id: 4,
    type: "saddles",
    image: "/images/blog-04.png",
  },
  {
    id: 5,
    type: "saddles",
    image: "/images/blog-05.png",
  },
  {
    id: 6,
    type: "tack-accessories",
    image: "/images/blog-06.png",
  },
  {
    id: 7,
    type: "arion-world",
    image: "/images/blog-07.png",
  },
  {
    id: 8,
    type: "arion-world",
    image: "/images/blog-08.png",
  },
];

interface PageProps {
  id: number;
}

const BlogDetailPage = ({ id }: PageProps) => {
  const blog = blogs.find((item) => item.id === id);

  if (!blog) {
    return <p className="text-center">No blog found for ID: {id}</p>;
  }

  return (
    <div className="p-4 maxContainer">
      {/* Main Image */}
      <Image
        src={blog.image}
        alt={blog.type}
        width={800}
        height={480}
        className=" h-[200px] sm:h-[300px] md:h-[400px] w-[1600px] object-cover"
      />
<div className=''>
    
      <div className="flex flex-col lg:flex-row gap-8 w-full pt-[60px]">
        <div className="w-full lg:w-3/4">
          <h1 className="text-[#1F274B] text-[28px] sm:text-[32px] lg:text-[36px] font-extrabold leading-[124%] tracking-[0.72px] capitalize mb-[24px]">
            2025 FEI North American Youth Championships: Arion <br className="hidden sm:block" /> Riders Bring Home Medals and Memories
          </h1>
          <p className="text-[#1D1F2C] text-[16px] sm:text-[18px] font-extrabold leading-[148%] tracking-[0.36px] mb-[16px]">
            6 Aug, 2025
          </p>
          <p className="text-[#1D1F2C] text-[16px] sm:text-[18px] leading-normal  normal-case">
            The 2025 FEI North American Youth Championships (NAYC) showcased the skill, determination, and sportsmanship of young equestrians from across the continent, and Arion Sellier riders were no exception. Competing in divisions ranging from Children's to Young Rider Jumping divisions, our athletes delivered outstanding performances, earning team gold, silver, and bronze medals, as well as notable individual achievements.
          </p>
        </div>

        <div className="w-full lg:w-1/4 space-y-4 sm:hidden md:block">
          <div className="flex justify-between items-center bg-[#1F274B] text-white p-4 rounded">
            <p className="text-sm font-semibold">Saddles</p>
            <Image src="/blogDetails/sadeles.png" alt="saddles" width={24} height={24} />
          </div>

          <div className="flex justify-between items-center border border-black p-4 rounded">
            <p className="text-sm font-semibold">Used Saddles</p>
            <Image src="/blogDetails/usedsadless.png" alt="used saddles" width={24} height={24} />
          </div>

          <div className="flex justify-between items-center border border-black p-4 rounded">
            <p className="text-sm font-semibold">Tack & Accessories</p>
            <Image src="/blogDetails/trac.png" alt="tack" width={24} height={24} />
          </div>

          <div className="border border-black p-4 rounded text-sm font-semibold">
            Follow Us
          </div>
        </div>
      </div>

      {/* children 1 section */}
<div className='w-[385px] md:w-[727px] lg:w-[902px] xl:w-[1032px] pb-[60px]'>
  
      <div className="mt-[32px]">
        <p className="bg-[#1F274B] text-white text-center text-[16px] font-extrabold leading-[148%] tracking-[0.32px] py-3 normal-case">
          Children's Division Competition Recap
        </p>

        <div className="">
          <Image src="/blogDetails/childern1.png" alt="children" width={100} height={100} className="object-cover h-auto w-full my-[16px]" unoptimized />
          <p className="text-[#777980] text-center text-[16px] mt-4 normal-case">
            Ryan Haselden & Hector Du Gue's victory lap after receiving team gold with Zone 4. ©USEquestrian
          </p>
          <p className="text-[#4A4C56] text-[16px] sm:text-[18px] tracking-[0.36px] leading-[148%] mt-[24px] normal-case">
            Ryan Haselden played a key role in Zone 4’s gold medal victory in the Children’s category at the 2025 FEI North American Youth Championships. Riding Hector du Gue, her 2017 Selle Français gelding (Satisfaction FRH x Lando), Haselden helped the team finish on a total of just eight faults after two strong rounds on Thursday.
          </p>
        </div>

       {/* children 2 section */}

        <div className="">
          <Image src="/blogDetails/childern2.png" alt="children" width={100} height={100} className="object-contain w-full h-auto mt-[32px] pb-[16px]" unoptimized />
          <p className="text-[#777980] text-center text-[16px] normal-case">
            Ryan Haselden & Hector Du Gue. ©USEquestrian
          </p>
          <p className="text-[#4A4C56] text-[16px] sm:text-[18px] tracking-[0.36px] leading-[148%] mt-[24px] normal-case">
            Haselden also delivered consistent rounds that kept her in the mix on the individual leaderboard. She closed out her competition 7th place individually.
          </p>
        </div>
      </div>

    {/* Pre-Junior section  */}

      <div className="mt-[32px] ">

         {/* Pre-Junior section 1 */}

        <p className="bg-[#1F274B] text-white text-center text-[16px] font-extrabold leading-[148%] tracking-[0.32px] py-3 rounded normal-case">
          Pre-Junior Division Competition Recap

        </p>

        <div className="mt-[16px]">
          <Image src="/blogDetails/preJunion1.png" alt="pre" width={100} height={100} className="object-contain w-full h-full " unoptimized />
          <p className="text-[#777980] text-center text-[16px] mt-[16px] normal-case">
           Zone 2 wins team gold. Pictured left to right, Rylie True (Bedminster, N.J.), Cecilia Chatterjee (New York, N.Y.), Agatha Lignelli (New York, N.Y.), and Kaitlyn Linck (Clinton Corners, N.Y.). ©USEquestrian
          </p>
          <p className="text-[#4A4C56] text-[16px] sm:text-[18px] tracking-[0.36px] leading-[148%] mt-[24px] normal-case">
           Cecilia Chatterjee made her mark with standout performances in both the team and individual Pre-Junior Jumping competition. Riding Cartouche VD Cumel, a 2013 Zangersheide mare owned by Victor Depaolo, Chatterjee was a key contributor to Zone 2’s gold medal victory. Carrying just from Wednesday’s speed round into the team final, she delivered confident rides that helped keep the team's score low, adding only a single rail across two rounds to secure the win.
          </p>
        </div>
  
   {/* Pre-Junior section 2 */}

        <div className="mt-[32px]">
          <Image src="/blogDetails/preJunion2.png" alt="children" width={100} height={100} className="object-contain w-full h-full " unoptimized />
          <p className="text-[#777980] text-center text-[16px] mt-[16px] normal-case">
           Cecilia Chatterjee & Cartouche VD Cumel. ©KindMediaLLC
          </p>
          <p className="text-[#4A4C56] text-[16px] sm:text-[18px] tracking-[0.36px] leading-[148%] mt-[24px] normal-case">
           In the individual final held on Saturday, Chatterjee posted a total of 6.15 penalty points, coming from a single rail and a clear round. The combination finished in 8th place overall among the top 25 qualifiers who advanced to the final round.
          </p>
        </div>
      </div>
     
 {/* Pre-Junior Division */}

      <div className="mt-[32px] ">

         {/* Pre-Junior Division 1 */}
        <p className="bg-[#1F274B] text-white text-center text-[16px] font-extrabold leading-[148%] tracking-[0.32px] py-3 normal-case">
         Pre-Junior Division Competition Recap
        </p>

        <div className="">
          <Image src="/blogDetails/preJunion3.png" alt="children" width={100} height={100} className="object-contain w-full h-full mt-[20px]" unoptimized />
          <p className="text-[#777980] text-center text-[16px] mt-[16px] normal-case">
            Adriana Forte & Artic Blue jumping to team bronze. ©USEquestrian
          </p>
          <p className="text-[#4A4C56] text-[16px] sm:text-[18px] tracking-[0.36px] leading-[148%] mt-[24px] normal-case">
           Adriana Forte was a key contributor to Zone 2’s bronze medal finish in the Junior division at the 2025 FEI North American Youth Championships. Partnered with Arctic Blue, a 13‑year‑old Holsteiner stallion (Larimar x San Patrignano Cassini) owned by First Blue, LLC, Forte delivered steady, competitive rounds that helped keep her team in podium position. On the individual stage, Forte continued to impress through the Junior individual final in the top 25.
          </p>
        </div>
       
       {/* Pre-Junior Division 2 */}

        <div className="mt-[32px]">
          <Image src="/blogDetails/preJunion4.png" alt="children" width={100} height={100} className="object-contain w-full h-full " unoptimized />
          <p className="text-[#777980] text-center text-[16px] mt-4 normal-case">
          Cristian Hacker & Caramix finished 10th individually. ©MonarchCreative
          </p>
          <p className="text-[#4A4C56] text-[16px] sm:text-[18px] tracking-[0.36px] leading-[148%] mt-6 normal-case">
           Cristian Hacker represented Guatemala in the Junior category at the 2025 FEI North American Youth Championships riding Caramix. Tackling the demanding Junior courses, Hacker delivered a series of determined rounds, demonstrating accuracy and persistence in a highly competitive field. He concluded the week 10th overall in the Junior individual standings.
          </p>
        </div>
        <div>
        <p className="bg-[#1F274B] text-white text-center text-[16px] font-extrabold leading-[148%] tracking-[0.32px] py-3 normal-case">
         Pre-Junior Division Competition Recap

        </p>
            
{/* last division */}

        <div className="mt-[32px ]">
          <Image src="/blogDetails/preJunion5.png" alt="children" width={100} height={100} className="object-contain w-full h-full " unoptimized />
          <p className="text-[#777980] text-center text-[16px] mt-4 normal-case">
          James Leone & Galliano LW helped Zone 2 took home silver in the team competition, while Leoene finished 7th individually. ©USEquestrian
          </p>
          <p className="text-[#4A4C56] text-[16px] sm:text-[18px] tracking-[0.36px] leading-[148%] mt-6 normal-case">
           James Leone delivered a strong performance to help Zone 2 secure the silver medal in the Young Rider division at the 2025 FEI North American Youth Championships. Riding Galliano LW, an 11‑year‑old Holsteiner gelding (Acolino x Candillo) owned by Mark Leone, he contributed consistent rounds to keep the team in medal contention. Despite a single rail falling in each round of Friday’s team final, Zone 2’s combined efforts earned them a well‑deserved spot on the podium.
          </p>
           <p className="text-[#4A4C56] text-[16px] sm:text-[18px] tracking-[0.36px] leading-[148%] mt-[32px] normal-case">
           Individually, Leone delivered steady rounds throughout the week, keeping competitive scores over the challenging Junior courses. He finished top 12 overall.
          </p>
        </div>
      </div>

      <div className='pt-[32px] '>
        <div className='bg-[#1F274B] h-[400px] lg:h-[175px] p-[32px]'>
        <p className='text-white text-center text-[32px] font-extrabold leading-[148%] tracking-[0.64px] normal-case'>Ride with Purpose. Ride with Arion.</p>
        <p className='text-white/80 text-center text-[18px] font-normal leading-[148%] tracking-[0.36px] normal-case mt-[10px]'>Whether you’re preparing for national finals or building your foundation in the ring, Arion’s French craftsmanship and technical innovation are designed to help you and your horse perform at your best.</p>
      </div>
      </div>
      </div>
</div>
      
</div>
    </div>
  );
};

export default BlogDetailPage;
