"use client";
import DropdownFilter from "@/components/ClientComponents/Tacks/DropdownFilter";
import FilterIcon from "@/components/Icons/FilterIcon";
import React, { useState } from "react";
import TrackProductList from "@/components/ClientComponents/Tacks/TrackProductList";
import { colors, priceRanges, sizes } from "./DropdownSelectList";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  color?: string;
  size?: string;
}

interface CategoryProps {
  categoryData: Product[];
  title: string;
}

export default function FilteredCategory({
  categoryData,
  title,
}: CategoryProps) {
  const [priceRange, setPriceRange] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [size, setSize] = useState<string>("");

  // Filter logic that can be reused for both "Reins" and "Bridles"
  const filterProducts = (): Product[] => {
    let filtered = categoryData;

    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number) || [0, Infinity];
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

  return (
    <div>
      <div className="flex items-center gap-4">
        <FilterIcon className="md:h-8 md:w-8 h-6 w-6" />

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
      <div>
        {filterProducts().length === 0 ? (
          <p className="mt-12 text-center text-secondary-text">
            No products found.
          </p>
        ) : (
          <div className="mt-12">
            <TrackProductList items={filterProducts()} title={title} />
          </div>
        )}
      </div>
    </div>
  );
}
