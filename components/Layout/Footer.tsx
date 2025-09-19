"use client";

import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import Link from "next/link";


const Footer: React.FC = () => {

  const [checked, setChecked] = React.useState(false)

  return (
    <footer

    >
      {/* =========footer top ======== */}
      <div className="lg:py-9 py-6 bgPrimary px-5 2xl:px-0">
        <div className="max-w-[555px] mx-auto">
          <h1 className="text-center text-white font-extrabold lg:text-2xl text-xl leading-[100%] ">Stay in touch</h1>
          <div>
            <form >
              <div className="flex flex-wrap gap-3 mt-6 mb-4 ">
                <input type="email" placeholder="EMAIL" className="bg-[#F8FAFB] upppercase text-[#777980] text-base leading-[100%] font-normal flex-1 px-5 inputStyle" />
                <button type="submit" className="text-base leading-[136%] md:py-4  py-3 md:px-8 px-4 bg-[#5465B3] text-white uppercase font-normal">send</button>
              </div>
              <div className="flex text-white items-center justify-center gap-3">
                <Checkbox
                  id="controlled"
                  checked={checked}
                  className="cursor-pointer"
                  onCheckedChange={(value) => setChecked(value === true)}
                />
                <Label htmlFor="controlled" className="font-normal leading-[100%] md:text-base text-sm tracking-[0.32px] ]">SIGN ME UP FOR EXCLUSIVE OFFERS FROM ARION SELLIER USA.</Label>
              </div>
            </form>
          </div>
        </div>
      </div>


      <div className="bgPrimary my-8 ">
        <div className=" maxContainer py-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {footerData.map((section, index) => (
              <div key={index}>
                {/* Main Category Title */}
                <h3 className="text-white font-normal lg:text-2xl text-xl leading-[100%]  mb-6">
                  {section.title}
                </h3>

                {/* Handle SADDLE category with subcategories */}
                {section.subcategories ? (
                  <div className="space-y-6">
                    {section.subcategories.map((subcategory, subIndex) => (
                      <div key={subIndex}>
                        {/* Subcategory Title */}
                        <h4 className="text-[#FFFFFFCC] lg:text-xl text-base underline-offset-1  leading-[100%] underline mb-4">
                          {subcategory.name}
                        </h4>
                        {/* Subcategory Links */}
                        <ul className="space-y-4">
                          {subcategory.links.map((link, linkIndex) => (
                            <li className="p-0 leading-[100%]" key={linkIndex}>
                              <Link
                                href={link.href}
                                className="text-[#FFFFFFCC] hover:text-white font-normal  md:text-base text-sm leading-[100%]  transition-colors duration-200 "
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Handle other categories with direct links */
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="p-0 leading-[100%]">
                        <Link 
                          href={link.href}
                          className="text-[#FFFFFFCC] hover:text-white font-normal   md:text-base text-sm leading-[100%]  transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;



// Footer data structure
const footerData = [
  {
    title: "SADDLE",
    subcategories: [
      {
        name: "ARION",
        links: [
          { name: "JUMPING", href: "#" },
          { name: "DRESSAGE", href: "#" },
          { name: "CROSS COUNTRY", href: "#" }
        ]
      },
      {
        name: "ATLAS",
        links: [
          { name: "JUMPING", href: "#" },
          { name: "DRESSAGE", href: "#" },
          { name: "CROSS COUNTRY", href: "#" }
        ]
      },
      {
        name: "USED SADDLE",
        links: []
      },
      {
        name: "ATHENA",
        links: [
          { name: "JUMPING", href: "#" },
          { name: "DRESSAGE", href: "#" },
          { name: "CROSS COUNTRY", href: "#" }
        ]
      }
    ]
  },
  {
    title: "SHOP",
    links: [
      { name: "BRIDLES", href: "#" },
      { name: "REINS", href: "#" },
      { name: "MARTINGALES", href: "#" },
      { name: "GIRTHS", href: "#" },
      { name: "STIRRUP LEATHERS", href: "#" },
      { name: "BOOTS", href: "#" },
      { name: "HALTERS & ROPES", href: "#" },
      { name: "LEATHER CARE", href: "#" },
      { name: "ACCESSORIES", href: "#" }
    ]
  },
  {
    title: "ARION",
    links: [
      { name: "OUR STORY", href: "#" },
      { name: "MEET THE TEAM", href: "#" },
      { name: "WORKSHOP", href: "#" },
      { name: "AMBASSADORS", href: "#" },
      { name: "BLOG", href: "#" },
      { name: "CAREERS", href: "#" }
    ]
  },
  {
    title: "CUSTOMER RELATIONS",
    links: [
      { name: "CONTACT US", href: "#" },
      { name: "HELP/FAQ", href: "#" },
      { name: "SIZE GUIDE", href: "#" },
      { name: "CARE INSTRUCTIONS", href: "#" },
      { name: "SHIPPING AND RETURNS", href: "#" }
    ]
  }
];