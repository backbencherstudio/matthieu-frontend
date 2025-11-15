import Image from "next/image";
import Link from "next/link";

const heroData = [
  {
    title: "CAREERS",
    img: "/home/carerrs.png",
    link: "/brand",
  },
  {
    title: "FIND US",
    img: "/home/findus.png",
    link: "/saddles",
  },
  {
    title: "BRAND",
    img: "/home/brand.jpg",
    link: "/brand",
  },
];

export default function BestSellersSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {heroData.map((item, index) => (
        <Link
          href={item?.link}
          key={index}
          className="relative group cursor-pointer overflow-hidden  transition-all duration-300"
        >
          {/* Background Image */}
          <div className="relative h-[460px]">
            <Image
              src={item.img}
              alt={item.title}
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-opacity-50 transition-all duration-300"></div>
          </div>

          {/* Title Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white  text-2xl  lg:text-[32px] font-extrabold leading-[100%] tracking-wider drop-shadow-lg">
              {item.title}
            </h3>
          </div>

          {/* Hover effect border */}
          <div className="absolute inset-0 border-2 border-transparent  transition-all duration-300 "></div>
        </Link>
      ))}
    </div>
  );
}

const bestSellers = [
  {
    id: 1,
    name: "hUNTER bRIDLES",
    image: "/home/bridles.png",
    href: "/tack/bridles",
  },
  {
    id: 2,
    name: "lONG BELLY GRITH",
    image: "/home/grith.png",
    href: "/tack/girths",
  },
  {
    id: 3,
    name: "HELTER & LEAD ROPE",
    image: "/home/helter.png",
    href: "/tack/halters-and-ropes",
  },
];
