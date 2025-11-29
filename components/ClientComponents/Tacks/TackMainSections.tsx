"use client";

import React, { useEffect, useRef, useState } from 'react';
import TrackProductList from './TrackProductList';
import FilterIcon from '@/components/Icons/FilterIcon';
import DropdownFilter from './DropdownFilter';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  color?: string;
  size?: string;
}

interface Category {
  label: string;
  value: string;
}

const allProducts: Product[] = [
  // Bridles
  ...[
    {
      id: 1,
      name: "Anatomical Double Noseband Bridle",
      category: "Bridles",
      image: "/home/bridles.png",
      price: "$370.00",
      color: "Black",
      size: "Full",
    },
    {
      id: 2,
      name: "Anatomical Double Noseband Bridle",
      category: "Bridles",
      image: "/home/bridles.png",
      price: "$370.00",
      color: "Brown",
      size: "Cob",
    },
    {
      id: 3,
      name: "Anatomical Double Noseband Bridle",
      category: "Bridles",
      image: "/home/bridles.png",
      price: "$370.00",
      color: "Black",
      size: "Pony",
    },
    {
      id: 4,
      name: "Anatomical Double Noseband Bridle",
      category: "Bridles",
      image: "/home/bridles.png",
      price: "$370.00",
      color: "Brown",
      size: "Full",
    },
    {
      id: 5,
      name: "Anatomical Double Noseband Bridle",
      category: "Bridles",
      image: "/home/bridles.png",
      price: "$370.00",
      color: "Black",
      size: "Cob",
    },
    {
      id: 6,
      name: "Anatomical Double Noseband Bridle",
      category: "Bridles",
      image: "/home/bridles.png",
      price: "$370.00",
      color: "Brown",
      size: "Pony",
    },
    {
      id: 7,
      name: "Anatomical Double Noseband Bridle",
      category: "Bridles",
      image: "/home/bridles.png",
      price: "$370.00",
      color: "Black",
      size: "Full",
    },
    {
      id: 8,
      name: "Anatomical Double Noseband Bridle",
      category: "Bridles",
      image: "/home/bridles.png",
      price: "$370.00",
      color: "Brown",
      size: "Cob",
    },
  ],
  // Reins
  ...[
    {
      id: 1,
      name: "Reins with handles",
      category: "Reins",
      image: "/images/tacks/tack1.png",
      price: "$370.00",
      color: "Black",
      size: "Standard",
    },
    {
      id: 2,
      name: "Reins with handles",
      category: "Reins",
      image: "/images/tacks/tack2.png",
      price: "$370.00",
      color: "Brown",
      size: "Standard",
    },
    {
      id: 3,
      name: "Reins with handles",
      category: "Reins",
      image: "/images/tacks/tack3.png",
      price: "$370.00",
      color: "Black",
      size: "Long",
    },
    {
      id: 4,
      name: "Reins with handles",
      category: "Reins",
      image: "/images/tacks/tack4.png",
      price: "$370.00",
      color: "Brown",
      size: "Long",
    },
    {
      id: 5,
      name: "Reins with handles",
      category: "Reins",
      image: "/images/tacks/tack1.png",
      price: "$370.00",
      color: "Black",
      size: "Standard",
    },
    {
      id: 6,
      name: "Reins with handles",
      category: "Reins",
      image: "/images/tacks/tack2.png",
      price: "$370.00",
      color: "Brown",
      size: "Standard",
    },
    {
      id: 7,
      name: "Reins with handles",
      category: "Reins",
      image: "/images/tacks/tack3.png",
      price: "$370.00",
      color: "Black",
      size: "Long",
    },
    {
      id: 8,
      name: "Reins with handles",
      category: "Reins",
      image: "/images/tacks/tack4.png",
      price: "$370.00",
      color: "Brown",
      size: "Long",
    },
  ],
  // Girths
  ...[
    {
      id: 1,
      name: "Short dressage girth",
      category: "Girths",
      image: "/home/grith.png",
      price: "$370.00",
      color: "Black",
      size: "24inch",
    },
    {
      id: 2,
      name: "Short dressage girth",
      category: "Girths",
      image: "/home/grith.png",
      price: "$370.00",
      color: "Brown",
      size: "26inch",
    },
    {
      id: 3,
      name: "Short dressage girth",
      category: "Girths",
      image: "/home/grith.png",
      price: "$370.00",
      color: "Black",
      size: "28inch",
    },
    {
      id: 4,
      name: "Short dressage girth",
      category: "Girths",
      image: "/home/grith.png",
      price: "$370.00",
      color: "Brown",
      size: "24inch",
    },
    {
      id: 5,
      name: "Short dressage girth",
      category: "Girths",
      image: "/home/grith.png",
      price: "$370.00",
      color: "Black",
      size: "26inch",
    },
    {
      id: 6,
      name: "Short dressage girth",
      category: "Girths",
      image: "/home/grith.png",
      price: "$370.00",
      color: "Brown",
      size: "28inch",
    },
    {
      id: 7,
      name: "Short dressage girth",
      category: "Girths",
      image: "/home/grith.png",
      price: "$370.00",
      color: "Black",
      size: "24inch",
    },
    {
      id: 8,
      name: "Short dressage girth",
      category: "Girths",
      image: "/home/grith.png",
      price: "$370.00",
      color: "Brown",
      size: "26inch",
    },
  ],
  // Breastplates
  ...[
    {
      id: 1,
      name: "Short dressage girth",
      category: "BREASTPLATES",
      image: "/images/tacks/breastPlates.png",
      price: "$370.00",
      color: "Black",
      size: "Standard",
    },
    {
      id: 2,
      name: "Short dressage girth",
      category: "BREASTPLATES",
      image: "/images/tacks/breastPlates2.png",
      price: "$370.00",
      color: "Brown",
      size: "Standard",
    },
    {
      id: 3,
      name: "Short dressage girth",
      category: "BREASTPLATES",
      image: "/images/tacks/breastPlates3.png",
      price: "$370.00",
      color: "Black",
      size: "Large",
    },
    {
      id: 4,
      name: "Short dressage girth",
      category: "BREASTPLATES",
      image: "/images/tacks/breastPlates4.png",
      price: "$370.00",
      color: "Brown",
      size: "Large",
    },
  ],
  // Halters
  ...[
    {
      id: 1,
      name: "Halter lead rope",
      category: "HALTERS & ROPES",
      image: "/images/tacks/halter.jpg",
      price: "$370.00",
      color: "Black",
      size: "Standard",
    },
  ],
  // Boots
  ...[
    {
      id: 1,
      name: "Front Show Jumping Boots",
      category: "BOOTS",
      image: "/images/tacks/boots1.png",
      price: "$370.00",
      color: "Black",
      size: "Medium",
    },
    {
      id: 2,
      name: "Hind Show Jumping Boots",
      category: "BOOTS",
      image: "/images/tacks/boots2.png",
      price: "$370.00",
      color: "Brown",
      size: "Medium",
    },
    {
      id: 3,
      name: "Front Training Boots",
      category: "BOOTS",
      image: "/images/tacks/boots3.png",
      price: "$370.00",
      color: "Black",
      size: "Large",
    },
    {
      id: 4,
      name: "Hind Training Boots",
      category: "BOOTS",
      image: "/images/tacks/boots4.jpg",
      price: "$370.00",
      color: "Brown",
      size: "Large",
    },
  ],
  // Leather Care
  ...[
    {
      id: 1,
      name: "Leather Soap",
      category: "Leather Care",
      image: "/images/tacks/leather-care.jpg",
      price: "$370.00",
      color: "N/A",
      size: "N/A",
    },
    {
      id: 2,
      name: "Leather Grease",
      category: "Leather Care",
      image: "/images/tacks/leather-care2.jpg",
      price: "$370.00",
      color: "N/A",
      size: "N/A",
    },
    {
      id: 3,
      name: "Cleaning Kit",
      category: "Leather Care",
      image: "/images/tacks/leather-care3.jpg",
      price: "$370.00",
      color: "N/A",
      size: "N/A",
    },
  ],
  // Accessories
  ...[
    {
      id: 1,
      name: "3-point hunting collar",
      category: "Accessories",
      image: "/images/tacks/accessories.jpg",
      price: "$370.00",
      color: "Black",
      size: "Standard",
    },
    {
      id: 2,
      name: "Classic Martingale",
      category: "Accessories",
      image: "/images/tacks/accessories2.jpg",
      price: "$370.00",
      color: "Brown",
      size: "Standard",
    },
  ],
];

const categories: Category[] = [
  { label: "All", value: "" },
  { label: "BRIDLES", value: "Bridles" },
  { label: "REINS", value: "Reins" },
  { label: "BREASTPLATES", value: "BREASTPLATES" },
  { label: "GIRTHS", value: "Girths" },
  { label: "HALTERS & ROPES", value: "HALTERS & ROPES" },
  { label: "BOOTS", value: "BOOTS" },
  { label: "LEATHER CARE", value: "Leather Care" },
  { label: "ACCESSORIES", value: "Accessories" },
];

const priceRanges: Category[] = [
  { label: "All Prices", value: "" },
  { label: "Under $100", value: "0-100" },
  { label: "$100 - $300", value: "100-300" },
  { label: "$300 - $500", value: "300-500" },
  { label: "Over $500", value: "500+" },
];

const colors: Category[] = [
  { label: "All Colors", value: "all" },
  { label: "Black", value: "Black" },
  { label: "Brown", value: "Brown" },
];

const sizes: Category[] = [
  { label: "All Sizes", value: "all" },
  { label: "Pony", value: "Pony" },
  { label: "Full", value: "Full" },
  { label: "Cob", value: "Cob" },
  { label: "Oversize", value: "Oversize" },
  { label: "24”", value: "24inch" },
  { label: "26”", value: "26inch" },
  { label: "28”", value: "28inch" },
  { label: "30”", value: "30inch" },
  { label: "32”", value: "32inch" },
  { label: "34”", value: "34inch" },
  { label: "36”", value: "36inch" },
  { label: "38”", value: "38inch" },
  { label: "40”", value: "40inch" },
  { label: "42”", value: "42inch" },
  { label: "44”", value: "44inch" },
  { label: "46”", value: "46inch" },
  { label: "48”", value: "48inch" },
  { label: "50”", value: "50inch" },
  { label: "52”", value: "52inch" },
  { label: "54”", value: "54inch" },
  { label: "56”", value: "56inch" },
  { label: "58”", value: "58inch" },
  { label: "XS", value: "XS" },
  { label: "S", value: "S" },
  { label: "M", value: "M" },
  { label: "L", value: "L" },
  { label: "XL", value: "XL" },
];

export default function TackMainSections() {
  const [category, setCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [size, setSize] = useState<string>("");


    const bridlesRef = useRef<HTMLDivElement | null>(null);
  const reinsRef = useRef<HTMLDivElement | null>(null);
  const breastplatesRef = useRef<HTMLDivElement | null>(null);
  const girthsRef = useRef<HTMLDivElement | null>(null);
  const halterRopesRef = useRef<HTMLDivElement | null>(null);
  const bootsRef = useRef<HTMLDivElement | null>(null);
  const leatherCareRef = useRef<HTMLDivElement | null>(null);
  const accessoriesRef = useRef<HTMLDivElement | null>(null);

  // Smooth scroll to section on page load if hash exists
  // useEffect(() => {
  //   const scrollToElement = (hash) => {
  //     const element = document.getElementById(hash);
  //     if (!element) return;

  //     const offset = 30; // Header height offset
  //     const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      
  //     window.scrollTo({ top, behavior: 'smooth' });
  //   };

  //   const handleClick = (e) => {
  //     const link = e.target.closest('a[href*="#"]');
  //     const hash = link?.getAttribute('href')?.split('#')[1];
      
  //     if (hash) {
  //       e.preventDefault();
  //       scrollToElement(hash);
  //       window.history.pushState(null, '', `#${hash}`);
  //     }
  //   };

  //   const hash = window.location.hash.replace('#', '');
  //   if (hash) setTimeout(() => scrollToElement(hash), 100);

  //   document.addEventListener('click', handleClick);
  //   return () => document.removeEventListener('click', handleClick);
  // }, []);

  useEffect(() => {
  if (typeof window === "undefined") return;

  const scrollToWhenReady = (hash, retries = 20) => {
    const el = document.getElementById(hash);
    if (!el) {
      if (retries > 0) setTimeout(() => scrollToWhenReady(hash, retries - 1), 50);
      return;
    }
    const offset = 30;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const onClick = (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href || !href.includes("#")) return;

    const hash = href.split("#")[1];
    e.preventDefault();
    scrollToWhenReady(hash);
    window.history.pushState(null, "", `#${hash}`);
  };

  // For page load
  const initialHash = window.location.hash.replace("#", "");
  if (initialHash) scrollToWhenReady(initialHash);

  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}, []);



  const filterProducts = (): Product[] => {
    let filtered = allProducts;

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number) || [0, Infinity];
      const price = parseFloat(filtered[0]?.price.replace("$", "") || "0");
      filtered = filtered.filter((product) => {
        const productPrice = parseFloat(product.price.replace("$", ""));
        return max === Infinity
          ? productPrice >= min
          : productPrice >= min && productPrice < max;
      });
    }

    if (color) {
      filtered = filtered.filter((product) => product.color === color);
    }

    if (size) {
      filtered = filtered.filter((product) => product.size === size);
    }

    return filtered;
  };




  const renderProductLists = () => {
    if (!category) {
      return (
        <>
          <div className="lg:my-12 my-8" id="bridles" ref={bridlesRef}>
            <TrackProductList items={filterProducts().filter(p => p.category === "Bridles")} title="Bridles" />
          </div>
          <div className="lg:my-12 my-8" id="reins" ref={reinsRef}>
            <TrackProductList items={filterProducts().filter(p => p.category === "Reins")} title="Reins" />
          </div>
          <div className="lg:my-12 my-8" id="breastplates" ref={breastplatesRef}>
            <TrackProductList items={filterProducts().filter(p => p.category === "BREASTPLATES")} title="BREASTPLATES" />
          </div>
          <div className="lg:my-12 my-8" id="girths" ref={girthsRef}>
            <TrackProductList items={filterProducts().filter(p => p.category === "Girths")} title="Girths" />
          </div>
          <div className="lg:my-12 my-8" id="stirrupLeathers" ref={girthsRef}>
            <TrackProductList items={filterProducts().filter(p => p.category === "")} title="Stirrup Leathers" />
          </div>
          <div className="lg:my-12 my-8" id="pads" ref={girthsRef}>
            <TrackProductList items={filterProducts().filter(p => p.category === "")} title="Pads" />
          </div>
          <div className="lg:my-12 my-8" id="riderApparel" ref={girthsRef}>
            <TrackProductList items={filterProducts().filter(p => p.category === "")} title="Rider Apparel" />
          </div>
          <div className="lg:my-12 my-8" id="halterRopes"  ref={halterRopesRef}>
            <TrackProductList items={filterProducts().filter(p => p.category === "HALTERS & ROPES")} title="HALTERS & ROPES" />
          </div>
          <div className="lg:my-12 my-8" id="boots" ref={bootsRef}>
            <TrackProductList items={filterProducts().filter(p => p.category === "BOOTS")} title="BOOTS" />
          </div>
          <div className="lg:my-12 my-8" id="leatherCare"    ref={leatherCareRef}>
            <TrackProductList items={filterProducts().filter(p => p.category === "Leather Care")} title="Leather Care" />
          </div>
          <div className="lg:my-12 my-8" id='accessories'   ref={accessoriesRef}>
            <TrackProductList items={filterProducts().filter(p => p.category === "Accessories")} title="Accessories" />
          </div>
        </>
      );
    } else {
      return (
        <div className="lg:my-12 my-8">
          <TrackProductList items={filterProducts()} title={category} />
        </div>
      );
    }
  };

  return (
    <>
      <div className="mt-12 flex flex-wrap items-center gap-4 ">
        <FilterIcon className="h-8 w-8" />
        <DropdownFilter
          title="CATEGORY"
          items={categories}
          selectedValue={category}
          onValueChange={setCategory}
        />
        <DropdownFilter
          title="PRICE"
          items={priceRanges}
          selectedValue={priceRange}
          onValueChange={setPriceRange}
        />
        <DropdownFilter
          title="COLOR"
          items={colors}
          selectedValue={color}
          onValueChange={setColor}
        />
        <DropdownFilter
          title="SIZE"
          items={sizes}
          selectedValue={size}
          onValueChange={setSize}
        />
      </div>

      {renderProductLists()}
    </>
  );
}

// "use client"

// import React, { useState } from 'react'
// import TrackProductList from './TrackProductList';
// import FilterIcon from '@/components/Icons/FilterIcon';

// interface Catgory {
//     label: string;
//     value: string;
// }

// export default function TackMainSections() {

//     return (
//         <>
//             <div className='mt-12'>
//                 <FilterIcon className="h-8 w-8" />
//             </div>

//             <div className='lg:my-12 my-8'>
//                 <TrackProductList items={bridleasItems} title="Bridles" />
//             </div>
//             <div className='lg:my-12 my-8'>
//                 <TrackProductList items={reinsItems} title="Reins" />
//             </div>
//             <div className='lg:my-12 my-8'>
//                 <TrackProductList items={breatsPlatesItems} title="BREASTPLATES" />
//             </div>
//             <div className='lg:my-12 my-8'>
//                 <TrackProductList items={girthItems} title="girths" />
//             </div>
//             <div className='lg:my-12 my-8'>
//                 <TrackProductList items={halterItems} title="HALTERS & ROPES" />
//             </div>
//             <div className='lg:my-12 my-8'>
//                 <TrackProductList items={bootsItems} title="BOOTS" />
//             </div>
//             <div className='lg:my-12 my-8'>
//                 <TrackProductList items={leatherItems} title="Leather Care" />
//             </div>
//             <div className='lg:my-12 my-8'>
//                 <TrackProductList items={accesoriesItems} title="Accessories" />
//             </div>
//         </>
//     )
// }

// const bridleasItems = [
//     {
//         id: 1,
//         name: "Anatomical Double Noseband Bridle",
//         category: "Bridles",
//         image: "/home/bridles.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 2,
//         name: "Anatomical Double Noseband Bridle",
//         category: "Bridles",
//         image: "/home/bridles.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 3,
//         name: "Anatomical Double Noseband Bridle",
//         category: "Bridles",
//         image: "/home/bridles.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 4,
//         name: "Anatomical Double Noseband Bridle",
//         category: "Bridles",
//         image: "/home/bridles.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 5,
//         name: "Anatomical Double Noseband Bridle",
//         category: "Bridles",
//         image: "/home/bridles.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 6,
//         name: "Anatomical Double Noseband Bridle",
//         category: "Bridles",
//         image: "/home/bridles.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 7,
//         name: "Anatomical Double Noseband Bridle",
//         category: "Bridles",
//         image: "/home/bridles.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 8,
//         name: "Anatomical Double Noseband Bridle",
//         category: "Bridles",
//         image: "/home/bridles.png", // Replace with actual image path
//         price: "$370.00",
//     },

// ];
// const reinsItems = [
//     {
//         id: 1,
//         name: "Reins with handles",
//         category: "Reins",
//         image: "/images/tacks/tack1.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 2,
//         name: "Reins with handles",
//         category: "Reins",
//         image: "/images/tacks/tack2.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 3,
//         name: "Reins with handles",
//         category: "Reins",
//         image: "/images/tacks/tack3.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 4,
//         name: "Reins with handles",
//         category: "Reins",
//         image: "/images/tacks/tack4.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 5,
//         name: "Reins with handles",
//         category: "Reins",
//         image: "/images/tacks/tack1.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 6,
//         name: "Reins with handles",
//         category: "Reins",
//         image: "/images/tacks/tack2.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 7,
//         name: "Reins with handles",
//         category: "Reins",
//         image: "/images/tacks/tack3.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 8,
//         name: "Reins with handles",
//         category: "Reins",
//         image: "/images/tacks/tack4.png", // Replace with actual image path
//         price: "$370.00",
//     },

// ];
// const girthItems = [
//     {
//         id: 1,
//         name: "Short dressage girth",
//         category: "Girths",
//         image: "/home/grith.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 2,
//         name: "Short dressage girth",
//         category: "Girths",
//         image: "/home/grith.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 3,
//         name: "Short dressage girth",
//         category: "Girths",
//         image: "/home/grith.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 4,
//         name: "Short dressage girth",
//         category: "Girths",
//         image: "/home/grith.png",// Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 5,
//         name: "Short dressage girth",
//         category: "Girths",
//         image: "/home/grith.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 6,
//         name: "Short dressage girth",
//         category: "Girths",
//         image: "/home/grith.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 7,
//         name: "Short dressage girth",
//         category: "Girths",
//         image: "/home/grith.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 8,
//         name: "Short dressage girth",
//         category: "Girths",
//         image: "/home/grith.png", // Replace with actual image path
//         price: "$370.00",
//     },

// ];
// const breatsPlatesItems = [
//     {
//         id: 1,
//         name: "Short dressage girth",
//         category: "BREASTPLATES",
//         image: "/images/tacks/breastPlates.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 2,
//         name: "Short dressage girth",
//         category: "BREASTPLATES",
//         image: "/images/tacks/breastPlates2.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 3,
//         name: "Short dressage girth",
//         category: "BREASTPLATES",
//         image: "/images/tacks/breastPlates3.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 4,
//         name: "Short dressage girth",
//         category: "BREASTPLATES",
//         image: "/images/tacks/breastPlates4.png",// Replace with actual image path
//         price: "$370.00",
//     },
// ];
// const halterItems = [
//     {
//         id: 1,
//         name: "Halter lead rope",
//         category: "HALTERS & ROPES",
//         image: "/images/tacks/halter.jpg", // Replace with actual image path
//         price: "$370.00",
//     },

// ];
// const bootsItems = [
//     {
//         id: 1,
//         name: "Front Show Jumping Boots",
//         category: "BOOTS",
//         image: "/images/tacks/boots1.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 2,
//         name: "Hind Show Jumping Boots",
//         category: "BOOTS",
//         image: "/images/tacks/boots2.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 3,
//         name: "Front Training Boots",
//         category: "BOOTS",
//         image: "/images/tacks/boots3.png", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 4,
//         name: "Hind Training Boots",
//         category: "BOOTS",
//         image: "/images/tacks/boots4.jpg", // Replace with actual image path
//         price: "$370.00",
//     },

// ];
// const leatherItems = [
//     {
//         id: 1,
//         name: "Leather Soap",
//         category: "Leather Care",
//         image: "/images/tacks/leather-care.jpg", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 2,
//         name: "Leather Grease",
//         category: "Leather Care",
//         image: "/images/tacks/leather-care2.jpg", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 3,
//         name: "Cleaning Kit",
//         category: "Leather Care",
//         image: "/images/tacks/leather-care3.jpg", // Replace with actual image path
//         price: "$370.00",
//     },
// ];
// const accesoriesItems = [
//     {
//         id: 1,
//         name: "3-point hunting collar ",
//         category: "Accessories",
//         image: "/images/tacks/accessories.jpg", // Replace with actual image path
//         price: "$370.00",
//     },
//     {
//         id: 2,
//         name: "Classic Martingale",
//         category: "Accessories",
//         image: "/images/tacks/accessories2.jpg", // Replace with actual image path
//         price: "$370.00",
//     },
// ];
