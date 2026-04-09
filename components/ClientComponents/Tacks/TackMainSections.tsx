"use client";

import FilterIcon from "@/components/Icons/FilterIcon";
import { useGetAllTackProductsQuery } from "@/src/redux/client/tack-product/tackProduct";
import { useEffect, useRef, useState } from "react";
import DropdownFilter from "./DropdownFilter";
import TrackProductList from "./TrackProductList";

interface Product {
  id: string;
  name: string;
  subcategory: string;
  thumbnailImage: string;
  price: number;
  currency: string;
  sku?: string;
  color?: string;
  size?: string;
}

interface Category {
  label: string;
  value: string;
}

const categories: Category[] = [
  { label: "All", value: "" },
  { label: "BRIDLES", value: "BRIDLES" },
  { label: "REINS", value: "REINS" },
  { label: "BREASTPLATES", value: "BREASTPLATES" },
  { label: "GRITHSF", value: "GRITHSF" },
  { label: "HALTERS & ROPES", value: "HALTERS_AND_ROPES" },
  { label: "BOOTS", value: "BOOTS" },
  { label: "LEATHER CARE", value: "STIRRUP_LEATHERS" },
  { label: "ACCESSORIES", value: "ACCESSORIES" },
  { label: "MARTINGALES", value: "MARTINGALES" },
];

const priceRanges: Category[] = [
  { label: "All Prices", value: "" },
  { label: "Under $100", value: "0-100" },
  { label: "$100 - $300", value: "100-300" },
  { label: "$300 - $500", value: "300-500" },
  { label: "Over $500", value: "500+" },
];

const colors: Category[] = [
  { label: "All Colors", value: "" },
  { label: "Black", value: "Black" },
  { label: "Brown", value: "Brown" },
];

const sizes: Category[] = [
  { label: "All Sizes", value: "" },
  { label: "Pony", value: "Pony" },
  { label: "Full", value: "Full" },
  { label: "Cob", value: "Cob" },
  { label: "Oversize", value: "Oversize" },
  { label: `24"`, value: "24inch" },
  { label: `26"`, value: "26inch" },
  { label: `28"`, value: "28inch" },
  { label: `30"`, value: "30inch" },
  { label: `32"`, value: "32inch" },
  { label: `34"`, value: "34inch" },
  { label: `36"`, value: "36inch" },
  { label: `38"`, value: "38inch" },
  { label: `40"`, value: "40inch" },
  { label: `42"`, value: "42inch" },
  { label: `44"`, value: "44inch" },
  { label: `46"`, value: "46inch" },
  { label: `48"`, value: "48inch" },
  { label: `50"`, value: "50inch" },
  { label: `52"`, value: "52inch" },
  { label: `54"`, value: "54inch" },
  { label: `56"`, value: "56inch" },
  { label: `58"`, value: "58inch" },
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

  useEffect(() => {
    const scrollToElement = (hash: string) => {
      const element = document.getElementById(hash);
      if (!element) return;
      const offset = 30;
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a[href*="#"]');
      const hash = link?.getAttribute("href")?.split("#")[1];
      if (hash) {
        e.preventDefault();
        scrollToElement(hash);
        window.history.pushState(null, "", `#${hash}`);
      }
    };

    const hash = window.location.hash.replace("#", "");
    if (hash) setTimeout(() => scrollToElement(hash), 100);

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const { data } = useGetAllTackProductsQuery({});

  // ✅ Inject subcategory into each product from the API response
  const allProducts: Product[] =
    data?.flatMap((item: { subcategory: string; products: Product[] }) =>
      item.products.map((p) => ({ ...p, subcategory: item.subcategory })),
    ) || [];

  const filterProducts = (): Product[] => {
    let filtered = allProducts;

    if (category) {
      filtered = filtered.filter((p) => p.subcategory === category);
    }

    if (priceRange) {
      if (priceRange === "500+") {
        filtered = filtered.filter((p) => p.price >= 500);
      } else {
        const [min, max] = priceRange.split("-").map(Number);
        filtered = filtered.filter((p) => p.price >= min && p.price < max);
      }
    }

    if (color) {
      filtered = filtered.filter((p) => p.color === color);
    }

    if (size) {
      filtered = filtered.filter((p) => p.size === size);
    }

    return filtered;
  };

  const renderProductLists = () => {
    // ✅ Call once, reuse everywhere
    const filtered = filterProducts();

    if (!category) {
      return (
        <>
          <div className="lg:my-12 my-8" id="bridles" ref={bridlesRef}>
            <TrackProductList
              items={filtered.filter((p) => p.subcategory === "BRIDLES")}
              title="Bridles"
            />
          </div>
          <div className="lg:my-12 my-8" id="reins" ref={reinsRef}>
            <TrackProductList
              items={filtered.filter((p) => p.subcategory === "REINS")}
              title="Reins"
            />
          </div>
          <div
            className="lg:my-12 my-8"
            id="breastplates"
            ref={breastplatesRef}
          >
            <TrackProductList
              items={filtered.filter((p) => p.subcategory === "BREASTPLATES")}
              title="Breastplates"
            />
          </div>
          <div className="lg:my-12 my-8" id="GRITHSF" ref={girthsRef}>
            <TrackProductList
              items={filtered.filter((p) => p.subcategory === "GRITHSF")}
              title="GRITHSF"
            />
          </div>
          <div className="lg:my-12 my-8" id="halterRopes" ref={halterRopesRef}>
            <TrackProductList
              items={filtered.filter(
                (p) => p.subcategory === "HALTERS_AND_ROPES",
              )}
              title="Halters & Ropes"
            />
          </div>
          <div className="lg:my-12 my-8" id="boots" ref={bootsRef}>
            <TrackProductList
              items={filtered.filter((p) => p.subcategory === "BOOTS")}
              title="Boots"
            />
          </div>
          <div className="lg:my-12 my-8" id="leatherCare" ref={leatherCareRef}>
            <TrackProductList
              items={filtered.filter(
                (p) => p.subcategory === "STIRRUP_LEATHERS",
              )}
              title="Leather Care"
            />
          </div>
          <div className="lg:my-12 my-8" id="accessories" ref={accessoriesRef}>
            <TrackProductList
              items={filtered.filter((p) => p.subcategory === "ACCESSORIES")}
              title="Accessories"
            />
          </div>
          <div className="lg:my-12 my-8" id="accessories" ref={accessoriesRef}>
            <TrackProductList
              items={filtered.filter((p) => p.subcategory === "MARTINGALES")}
              title="MARTINGALES"
            />
          </div>
        </>
      );
    }

    return (
      <div className="lg:my-12 my-8">
        <TrackProductList items={filtered} title={category} />
      </div>
    );
  };

  return (
    <>
      <div className="mt-12 flex flex-wrap items-center gap-4">
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
