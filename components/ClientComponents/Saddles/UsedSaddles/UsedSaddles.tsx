"use client"

import FilterIcon from '@/components/Icons/FilterIcon'
import React, { useState } from 'react'
import DropdownFilter from '../../Tacks/DropdownFilter'
import PriceRangeFilter from './PriceRange';
import UsedSaddlesProductList from './SaddlesCard';
import Link from 'next/link';
import CustomDialog from '@/components/reusable/Features/Dialog';
import AlertProduct from './AlertProduct';



export default function UsedSaddles() {

  const [open, setOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<string>("");
  const [discpline, setDiscpline] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [seatSize, setSeatSize] = useState<string>("");
  const [flapSize, setFlapSize] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  const handlePriceChange = (min: number, max: number) => {
    console.log('Price range changed:', min, max);
    // Update your state or make API call here
  };


  return (
    <div>
      <div className="mt-[100px] ">
        <div className='flex justify-between items-center flex-wrap gap-4'>
          <div className='flex items-center gap-4 flex-wrap'>
            <FilterIcon className="md:h-8 md:w-8 h-6 w-6" />

            {/* <PriceRangeFilter
              title="PRICE"
              minPrice={1000}
              maxPrice={10000}
              onPriceChange={handlePriceChange}
            /> */}
            <DropdownFilter
              title="DISCPLINE"
              items={discplines}
              selectedValue={discpline}
              onValueChange={setDiscpline}
            />
            <DropdownFilter
              title="BRAND"
              items={brands}
              selectedValue={brand}
              onValueChange={setBrand}
            />
            <DropdownFilter
              title="COLOR"
              items={colors}
              selectedValue={color}
              onValueChange={setColor}
            />
            <DropdownFilter
              title="SEAT SIZE"
              items={sizes}
              selectedValue={seatSize}
              onValueChange={setSeatSize}
            />
            <DropdownFilter
              title="FLAP SIZES"
              items={flapSizes}
              selectedValue={flapSize}
              onValueChange={setFlapSize}
            />
          </div>
          <div>
            <DropdownFilter
              title="SHORT BY"
              items={shortBys}
              selectedValue={sortBy}
              onValueChange={setSortBy}
            />
          </div>
        </div>
      </div>

      <div className='flex py-8 bg-[#F8F9FB] flex-col items-center justify-center gap-6 mt-8'>
        <h3 className='text-[#4C526F] lg:text-xl md:text-lg text-base leading-[124%] tracking-[.4px] '>Don't see what you are looking for?</h3>
        <button onClick={() => setOpen(true)} className={` md:px-8 px-4 md:py-4 py-3  bg-[#1F274B] hover:bg-[#1F274B]/80 transition-colors  flex items-center justify-center cursor-pointer`}>
          <span className='text-white md:text-base text-sm font-medium leading-[136%] '>CREATE AN ALERT</span>
        </button>
      </div>
      <CustomDialog open={open} setOpen={setOpen} >
        <AlertProduct/>
      </CustomDialog>
      <UsedSaddlesProductList />
    </div>
  )
}

interface Category {
  label: string;
  value: string;
}

const discplines: Category[] = [
  { label: "JUMPING", value: "Jumping" },
  { label: "CROSS-COUNTRY", value: "Cross country" },
  { label: "DRESSAGE", value: "Dressage" },
];
const brands: Category[] = [
  { label: "AIRON", value: "Airon" },
  { label: "DEVOUCOUX", value: "Devoucoux" },
  { label: "CWD", value: "CWD" },
  { label: "ANTARÉS", value: "Antarés" },
  { label: "HERMÉS", value: "Hermés" },
  { label: "BRUNO DELGRANGE", value: "Bruno Delgrange" },
  { label: "ERREPLUS", value: "Erreplus" },
  { label: "VOLTAIRE", value: "Voltaire" },
  { label: "FORESTIER", value: "Forestier" },
  { label: "PRESTIGE", value: "Prestige" },
  { label: "REMARSANCE", value: "Remarsance" },
  { label: "ÉQUIPE", value: "Équipe" },
  { label: "BUTET", value: "Butet" },
  { label: "CHILDERIC", value: "Childeric" },
];
const colors: Category[] = [
  { label: "BROWN", value: "Brown" },
  { label: "BLACK", value: "Black" },
];

const priceRanges: Category[] = [
  { label: "Under $100", value: "0-100" },
  { label: "$100 - $200", value: "100-200" },
  { label: "$200 - $300", value: "200-300" },
  { label: "$300 and above", value: "300+" },
];


const sizes: Category[] = [
  { label: "Full", value: "Full" },
  { label: "Cob", value: "Cob" },
  { label: "Pony", value: "Pony" },
];
const flapSizes: Category[] = [
  { label: "Full", value: "Full" },
  { label: "Cob", value: "Cob" },
  { label: "Pony", value: "Pony" },
  { label: "Standard", value: "Standard" },
];
const shortBys: Category[] = [
  { label: "SORT BY POPULARITY", value: "Short by popularity" },
  { label: "SORT BY LATEST", value: "Short by latest" },
];