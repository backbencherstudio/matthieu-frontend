import { useState } from "react";
import { useForm } from "react-hook-form";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

export default function AlertProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [value, setValue] = useState<[number, number]>([1000, 6000]);

  const brands = [
    { id: "arion", label: "ARION" },
    { id: "devoucoux", label: "DEVOUCOUX" },
    { id: "cwd", label: "CWD" },
    { id: "antares", label: "ANTARÉS" },
    { id: "hermes", label: "HERMÉS" },
    { id: "bruno-delgrange", label: "BRUNO DELGRANGE" },
    { id: "erreplus", label: "ERREPLUS" },
    { id: "voltaire", label: "VOLTAIRE" },
    { id: "forestier", label: "FORESTIER" },
    { id: "prestige", label: "PRESTIGE" },
    { id: "renaissance", label: "RENAISSANCE" },
    { id: "equipe", label: "ÉQUIPE" },
    { id: "butet", label: "BUTET" },
    { id: "childeric", label: "CHILDÉRIC" },
  ];

  const disciplines = [
    { id: "jumping", label: "JUMPING" },
    { id: "cross-country", label: "CROSS COUNTRY" },
    { id: "dressage", label: "DRESSAGE" },
  ];

  const seatSizes = [
    { id: "14", label: '14"' },
    { id: "14.5", label: '14.5"' },
    { id: "15", label: '15"' },
    { id: "15.5", label: '15.5"' },
    { id: "16", label: '16"' },
    { id: "16.5", label: '16.5"' },
    { id: "17", label: '17"' },
    { id: "17.5", label: '17.5"' },
    { id: "18.5", label: '18.5"' },
    { id: "18.5-2", label: '18.5"' },
    { id: "19", label: '19"' },
  ];

  const colors = [
    { id: "light-brown", label: "LIGHT BROWN" },
    { id: "dark-brown", label: "DARK BROWN" },
    { id: "black", label: "BLACK" },
  ];

  const onSubmit = (data) => {
    console.log(data);
    alert("Alert submitted successfully!");
  };

  return (
    <div className="h-[95vh] md:w-[708px] overflow-y-auto bg-[#1F274B]  lg:px-12 px-6 lg:py-8 py-4 custom-scroll">
      <div className="">
        <h1 className="text-white lg:text-[40px] md:text-[36px] text-2xl font-extrabold text-center  leading-[136%]">
          ALERT ME WHEN YOU FIND WHAT I'M LOOKING FOR
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 lg:mt-12 md:mt-8 mt-6"
        >
          {/* Price Range */}
          <div>
            <label className="text-white lg:text-2xl md:text-xl text-lg leading-[100%]">
              PRICE
            </label>
            <div className="bg-white  p-4 mt-4 flex flex-col gap-4">
              <div className=" mt-1 ">
                <RangeSlider
                  min={1000}
                  max={6000}
                  step={0}
                  // value={value}
                  onInput={setValue}
                />
              </div>
              <div className="flex justify-between items-center text-[#4C526F] leading-[100%] text-sm ">
                <span>${value?.[0]}</span>
                <span>${value?.[1]}</span>
              </div>
            </div>
          </div>

          {/* Three Column Section */}
          <div className="grid grid-cols-3 md:gap-6 gap-2">
            {/* Brand Column */}
            <div>
              <label className="text-white lg:text-2xl md:text-xl text-lg leading-[100%] mb-5 block">
                BRAND
              </label>
              <div className="md:space-y-3 space-y-2.5">
                {brands.map((brand) => (
                  <label
                    key={brand.id}
                    className="flex items-center text-white md:text-sm text-xs cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={brand.id}
                      {...register("brands")}
                      className="w-3.5 h-3.5 mr-2 accent-gray-400"
                    />
                    <span className="tracking-wide">{brand.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Discipline & Color Column */}
            <div>
              <label className="text-white lg:text-2xl md:text-xl text-lg leading-[100%] mb-5 block">
                DISCPLINE
              </label>
              <div className="md:space-y-3 space-y-2.5">
                {disciplines.map((discipline) => (
                  <label
                    key={discipline.id}
                    className="flex items-center text-white md:text-sm text-xs cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={discipline.id}
                      {...register("disciplines")}
                      className="w-3.5 h-3.5 mr-2 accent-gray-400"
                    />
                    <span className="tracking-wide">{discipline.label}</span>
                  </label>
                ))}
              </div>

              <label className="text-white lg:text-2xl md:text-xl text-lg leading-[100%] mb-5 block md:mt-9 mt-6">
                COLOR
              </label>
              <div className="space-y-2">
                {colors.map((color) => (
                  <label
                    key={color.id}
                    className="flex items-center text-white md:text-sm text-xs cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={color.id}
                      {...register("colors")}
                      className="w-3.5 h-3.5 mr-2 accent-gray-400"
                    />
                    <span className="tracking-wide">{color.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Seat Size Column */}
            <div>
              <label className="text-white lg:text-2xl md:text-xl text-lg leading-[100%] mb-5 block">
                SEAT SIZE
              </label>
              <div className="md:space-y-3 space-y-2.5">
                {seatSizes.map((size) => (
                  <label
                    key={size.id}
                    className="flex items-center text-white md:text-sm text-xs cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={size.id}
                      {...register("seatSizes")}
                      className="w-3.5 h-3.5 mr-2 accent-gray-400"
                    />
                    <span className="tracking-wide">{size.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-white lg:text-2xl md:text-xl text-lg leading-[100%] mb-6 block">
              CONTACT INFORMATION
            </h2>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  {...register("firstName", { required: true })}
                  className="w-full md:px-4 px-3 py-4 leading-[100%] text-sm bg-white placeholder-[#696E86] focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <input
                  type="text"
                  placeholder="LAST NAME"
                  {...register("lastName", { required: true })}
                  className="w-full md:px-4 px-3 py-4 text-sm bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <input
                type="email"
                placeholder="E-MAIL"
                {...register("email", { required: true })}
                className="w-full md:px-4 px-3 py-4 text-sm bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />

              <input
                type="tel"
                placeholder="PHONE NUMBER"
                {...register("phone")}
                className="w-full md:px-4 px-3 py-4 text-sm bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="TOWN"
                  {...register("town")}
                  className="w-full md:px-4 px-3 py-4 text-sm bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <input
                  type="text"
                  placeholder="STATE"
                  {...register("state")}
                  className="w-full md:px-4 px-3 py-4 text-sm bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-white text-[#1e2847] text-sm font-semibold tracking-wide hover:bg-gray-100 transition-colors"
            >
              SUBMIT MY ALERT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
