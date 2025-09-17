"use client";

import React, { useState } from "react";
// import footer from "@/public/Footer.jpg";
// import logo from "@/public/dark-logo.png";
import Image from "next/image";

import Link from "next/link";

const companyLinks = [
  { label: "About Us", href: "#" },
  // { label: "Freebies", href: "#" },
  { label: "Premium", href: "#" },
  // { label: "Blog", href: "#" },
  { label: "Affiliate Program", href: "#" },
  // { label: "Get coupon", href: "#" },
];

const helpLinks = [
  // { label: "Knowledge Center", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Premium Support", href: "#" },
  // { label: "Sponsorships", href: "#" },
  { label: "Custom Development", href: "#" },
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [agreeToPrivacy, setAgreeToPrivacy] = useState<boolean>(false);

  const handleEmailSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!agreeToPrivacy) {
      alert("Please agree to the privacy policy");
      return;
    }
    console.log("Email submitted:", email);
    setEmail("");
    setAgreeToPrivacy(false);
  };

  return (
    <footer
      className=" text-white mulish bgPrimary"
      style={{
        backgroundImage: `url('')`, // relative to public folder
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1320px] mx-auto px-4 2xl:px-0 lg:pt-[80px] md:pt-[60px] pt-[40px] lg:pb-6 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand and Description */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="w-[64px] h-[64px] mb-auto">
                <Link href="/">
                  <Image
                    src=""
                    width={100}
                    height={100}
                    alt="login image"
                    className="w-full h-full"
                    unoptimized
                  />
                </Link>
              </div>
            </div>
            <p className="lg:text-lg md:text-base text-sm leading-[160%] mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-[44px] h-[44px] bg-[#0CAF60] rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                {/* <FacebookIcon /> */}
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#0CAF60] rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                {/* <InstaIcon /> */}
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#0CAF60] rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                {/* <TwitterIcon /> */}
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#0CAF60] rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                {/* <LinkdinIcon /> */}
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold md:text-lg lg:text-xl xl:text-2xl mb-4 tracking-[.12px] leading-[130%]  ">
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#E9E9EA] hover:text-white transition-colors duration-200 lg:text-lg md:text-base text-sm leading-[160%]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help and Support Links */}
          <div>
            <h3
              className=" text-white font-semibold md:text-lg lg:text-xl xl:text-2xl mb-4 tracking-[.12px] leading-[130%] 
"
            >
              Help and Support
            </h3>
            <ul className="space-y-4">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#E9E9EA] hover:text-white transition-colors duration-200 lg:text-lg md:text-base text-sm leading-[160%]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <div className="  rounded-sm flex items-center justify-center mr-3">
                  {/* <MessageIcon /> */}
                </div>
                <span className="text-[#E9E9EA] lg:text-lg md:text-base text-sm">
                  example@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <div className="rounded-sm flex items-center justify-center mr-3">
                  {/* <CallIcon /> */}
                </div>
                <span className="text-[#E9E9EA] lg:text-lg md:text-base text-sm">
                  (555) 123-4567
                </span>
              </div>
            </div>

            {/* Email Subscription */}
            <form onSubmit={handleEmailSubmit} className="mb-4">
              <div className="flex flex-wrap">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-l-md bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0CAF60]"
                  required
                />
                <button
                  type="submit"
                  className="shrink bg-[#0CAF60] hover:bg-green-600 px-4 py-2 rounded-r-md transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>

            {/* Privacy Policy Checkbox */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="privacy-policy"
                checked={agreeToPrivacy}
                onChange={(e) => setAgreeToPrivacy(e.target.checked)}
                className="mt-1 h-4 w-4 text-[#0CAF60] focus:ring-[#0CAF60] border-gray-300 rounded"
              />
              <label
                htmlFor="privacy-policy"
                className="ml-2 text-[#E9E9EA] lg:text-lg md:text-base text-sm"
              >
                I agree to the privacy policy
              </label>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#FFFFFF1A] mt-10 pt-4 ">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 . All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Licenses
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
