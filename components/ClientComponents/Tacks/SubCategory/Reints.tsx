"use client"
import DropdownFilter from '@/components/ClientComponents/Tacks/DropdownFilter'
import FilterIcon from '@/components/Icons/FilterIcon'
import React, { useState } from 'react'

import TrackProductList from '@/components/ClientComponents/Tacks/TrackProductList';
import { categories, colors, priceRanges, sizes } from '../DropdownSelectList';


interface Product {
    id: number;
    name: string;
    category: string;
    image: string;
    price: string;
    color?: string;
    size?: string;
}




const reinsItems = [
    { id: 1, name: "Reins with handles", category: "Reins", image: "/images/tacks/tack1.png", price: "$370.00", color: "Black", size: "Standard" },
    { id: 2, name: "Reins with handles", category: "Reins", image: "/images/tacks/tack2.png", price: "$370.00", color: "Brown", size: "Standard" },
    { id: 3, name: "Reins with handles", category: "Reins", image: "/images/tacks/tack3.png", price: "$370.00", color: "Black", size: "Long" },
    { id: 4, name: "Reins with handles", category: "Reins", image: "/images/tacks/tack4.png", price: "$370.00", color: "Brown", size: "Long" },
    { id: 5, name: "Reins with handles", category: "Reins", image: "/images/tacks/tack1.png", price: "$370.00", color: "Black", size: "Standard" },
    { id: 6, name: "Reins with handles", category: "Reins", image: "/images/tacks/tack2.png", price: "$370.00", color: "Brown", size: "Standard" },
    { id: 7, name: "Reins with handles", category: "Reins", image: "/images/tacks/tack3.png", price: "$370.00", color: "Black", size: "Long" },
    { id: 8, name: "Reins with handles", category: "Reins", image: "/images/tacks/tack4.png", price: "$370.00", color: "Brown", size: "Long" },

];

export default function ReinsCategory() {

    // const [category, setCategory] = useState<string>("");
    const [priceRange, setPriceRange] = useState<string>("all");
    const [color, setColor] = useState<string>("all");
    const [size, setSize] = useState<string>("all");

    const filterProducts = (): Product[] => {
        let filtered = reinsItems;

        // if (category) {
        //     filtered = filtered.filter((product) => product.category === category);
        // }

        if (priceRange !== "all") {
            const [min, max] = priceRange.split('-').map(Number) || [0, Infinity];
            const price = parseFloat(filtered[0]?.price.replace('$', '') || "0");
            filtered = filtered.filter((product) => {
                const productPrice = parseFloat(product.price.replace('$', ''));
                return max === Infinity ? productPrice >= min : productPrice >= min && productPrice < max;
            });
        }

        if (color !== "all") {
            filtered = filtered.filter((product) => product.color === color);
        }

        if (size !== "all") {
            filtered = filtered.filter((product) => product.size === size);
        }

        return filtered;
    };

    return (
        <div >
            <div className=" flex items-center gap-4">
                <FilterIcon className="h-8 w-8" />
                {/* <DropdownFilter
                    title="CATEGORY"
                    items={categories}
                    selectedValue={category}
                    onValueChange={setCategory}
                /> */}
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
            <div >
                {filterProducts().length === 0 ? (
                    <p className="mt-12 text-center text-secondary-text">No products found.</p>
                ) : (
                    <div className='mt-12'>
                        <TrackProductList items={filterProducts()} title="Reins" />
                    </div>
                )}
            </div>
        </div>
    )
}
