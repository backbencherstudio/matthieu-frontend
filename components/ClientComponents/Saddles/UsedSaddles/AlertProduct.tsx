import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function AlertProduct() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const brands = [
    { id: 'arion', label: 'ARION' },
    { id: 'devoucoux', label: 'DEVOUCOUX' },
    { id: 'cwd', label: 'CWD' },
    { id: 'antares', label: 'ANTARES' },
    { id: 'hermes', label: 'HERMÈS' },
    { id: 'bruno-delgrange', label: 'BRUNO DELGRANGE' },
    { id: 'erreplus', label: 'ERREPLUS' },
    { id: 'voltaire', label: 'VOLTAIRE' },
    { id: 'forestier', label: 'FORESTIER' },
    { id: 'prestige', label: 'PRESTIGE' },
    { id: 'renaissance', label: 'RENAISSANCE' },
    { id: 'equipe', label: 'ÉQUIPE' },
    { id: 'butet', label: 'BUTET' },
    { id: 'childeric', label: 'CHILDÉRIC' }
  ];

  const disciplines = [
    { id: 'jumping', label: 'JUMPING' },
    { id: 'cross-country', label: 'CROSS COUNTRY' },
    { id: 'dressage', label: 'DRESSAGE' }
  ];

  const seatSizes = [
    { id: '14', label: '14"' },
    { id: '14.8', label: '14.8"' },
    { id: '15.5', label: '15.5"' },
    { id: '16', label: '16"' },
    { id: '16.5', label: '16.5"' },
    { id: '17', label: '17"' },
    { id: '17.5', label: '17.5"' },
    { id: '18.5', label: '18.5"' },
    { id: '18.5-2', label: '18.5"' },
    { id: '19', label: '19"' }
  ];

  const colors = [
    { id: 'light-brown', label: 'LIGHT BROWN' },
    { id: 'dark-brown', label: 'DARK BROWN' },
    { id: 'black', label: 'BLACK' }
  ];

  const onSubmit = (data) => {
    console.log(data);
    alert('Alert submitted successfully!');
  };

  return (
    <div className="h-[95vh]  overflow-y-auto bg-[#1F274B]  lg:px-12 px-6 lg:py-8 py-4 custom-scroll">
      <div className="">
        <h1 className="text-white text-3xl font-bold text-center mb-8 tracking-wide">
          ALERT ME WHEN YOU FIND<br />WHAT I'M LOOKING FOR
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Price Range */}
          <div>
            <label className="text-white text-sm font-medium mb-3 block tracking-wide">
              PRICE
            </label>
            <div className="relative">
              <input
                type="range"
                min="1000"
                max="10000"
                step="100"
                defaultValue="5500"
                {...register('priceMin')}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-gray-600"
              />
              <div className="flex justify-between text-gray-400 text-xs mt-2">
                <span>$1,000</span>
                <span>$10,000</span>
              </div>
            </div>
          </div>

          {/* Three Column Section */}
          <div className="grid grid-cols-3 gap-6">
            {/* Brand Column */}
            <div>
              <label className="text-white text-sm font-medium mb-3 block tracking-wide">
                BRAND
              </label>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <label key={brand.id} className="flex items-center text-white text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      value={brand.id}
                      {...register('brands')}
                      className="w-3.5 h-3.5 mr-2 accent-gray-400"
                    />
                    <span className="tracking-wide">{brand.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Discipline & Color Column */}
            <div>
              <label className="text-white text-sm font-medium mb-3 block tracking-wide">
                DISCPLINE
              </label>
              <div className="space-y-2 mb-6">
                {disciplines.map((discipline) => (
                  <label key={discipline.id} className="flex items-center text-white text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      value={discipline.id}
                      {...register('disciplines')}
                      className="w-3.5 h-3.5 mr-2 accent-gray-400"
                    />
                    <span className="tracking-wide">{discipline.label}</span>
                  </label>
                ))}
              </div>

              <label className="text-white text-sm font-medium mb-3 block tracking-wide">
                COLOR
              </label>
              <div className="space-y-2">
                {colors.map((color) => (
                  <label key={color.id} className="flex items-center text-white text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      value={color.id}
                      {...register('colors')}
                      className="w-3.5 h-3.5 mr-2 accent-gray-400"
                    />
                    <span className="tracking-wide">{color.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Seat Size Column */}
            <div>
              <label className="text-white text-sm font-medium mb-3 block tracking-wide">
                SEAT SIZE
              </label>
              <div className="space-y-2">
                {seatSizes.map((size) => (
                  <label key={size.id} className="flex items-center text-white text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      value={size.id}
                      {...register('seatSizes')}
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
            <h2 className="text-white text-sm font-medium mb-4 tracking-wide">
              CONTACT INFORMATION
            </h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  {...register('firstName', { required: true })}
                  className="w-full px-4 py-3 text-sm bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <input
                  type="text"
                  placeholder="LAST NAME"
                  {...register('lastName', { required: true })}
                  className="w-full px-4 py-3 text-sm bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <input
                type="email"
                placeholder="E-MAIL"
                {...register('email', { required: true })}
                className="w-full px-4 py-3 text-sm bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />

              <input
                type="tel"
                placeholder="PHONE NUMBER"
                {...register('phone')}
                className="w-full px-4 py-3 text-sm bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="TOWN"
                  {...register('town')}
                  className="w-full px-4 py-3 text-sm bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <input
                  type="text"
                  placeholder="STATE"
                  {...register('state')}
                  className="w-full px-4 py-3 text-sm bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
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