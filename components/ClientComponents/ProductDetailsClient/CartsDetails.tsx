import React, { useState } from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';
import MinusIcon from '@/components/Icons/MinusIcon';
import PlusIcon from '@/components/Icons/PlusIcon';
import DeleteIcon from '@/components/Icons/DashboardIcons/DeleteIcon';

interface CartItem {
  id: string;
  name: string;
  sku: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartsDetails() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Hunter Jumper Saddle',
      sku: 'BR7D2NS',
      price: 330.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=100&h=100&fit=crop'
    },
    {
      id: '2',
      name: 'Double Noseband Bridle',
      sku: 'BR7D2NS',
      price: 260.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=100&h=100&fit=crop'
    }
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="">
      <div className=" ">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex  gap-4 bg-white py-4  border-b border-[#ECEFF3] last:border-b-0 items-stretch"
          >
            {/* Product Image */}
            <div className='flex-shrink-0'>
              <img
                src={item.image}
                alt={item.name}
                className="w-[102px] h-[104px] object-cover "
              />
            </div>

            {/* Product Details */}
            <div className="flex-1 border flex  flex-col justify-between">
              <div className='flex flex-col gap-2'>
                <h3 className="text-[#4C526F] md:text-lg text-base leading-[100%] font-extrabold">{item.name}</h3>
                <p className="text-sm text-[#4C526F] font-normal leading-[100%]">SKU: {item.sku}</p>
                <div className='flex  gap-4 '>
                  <span className='text-sm text-[#4C526F] font-normal leading-[100%] uppercase'>size: pony</span>
                  <span className='text-sm text-[#4C526F] font-normal leading-[100%] uppercase'>color: brawn</span>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <div className='flex gap-4 items-center bg-[#F3F3F4] p-1.5'>
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className=" flex items-center cursor-pointer text-[#1D1F2C] hover:text-[#1D1F2C]/50"
                  >
                    <MinusIcon className="" />
                  </button>
                  <span className="text-[#1D1F2C] md:text-base text-sm font-extrabold leading-[100%] py-[2px]">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="flex items-center cursor-pointer text-[#1D1F2C] hover:text-[#1D1F2C]/50"
                  >
                    <PlusIcon className="" />
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="cursor-pointer "
                >
                  <DeleteIcon className="size-5 scale-100 hover:scale-120 duration-200" />
                </button>
              </div>
            </div>

            {/* Price and Quantity Info */}
            <div className="text-right flex flex-col justify-between border">
              <p className="text-lg font-semibold text-gray-900">
                ${item.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500 ">Qty: {item.quantity}</p>
            </div>
          </div>
          // <div
          //   key={item.id}
          //   className="flex gap-4 bg-white py-4 border-b border-[#ECEFF3] last:border-b-0 items-stretch"
          // >
          //   {/* Product Image */}
          //   <div className="flex-shrink-0">
          //     <img
          //       src={item.image}
          //       alt={item.name}
          //       className="w-[98px] h-[98px] object-cover"
          //     />
          //   </div>

          //   {/* Product Details */}
          //   <div className="flex-1 flex flex-col justify-between border">
          //     <div>
          //       <h3 className="text-[#4C526F] md:text-lg text-base font-extrabold leading-[100%]">
          //         {item.name}
          //       </h3>
          //       <p className="text-sm text-[#4C526F] font-normal leading-[100%]">
          //         SKU: {item.sku}
          //       </p>
          //     </div>

          //     {/* Quantity Controls */}
          //     <div className="flex items-center gap-2 mt-2">
          //       <button
          //         onClick={() => updateQuantity(item.id, -1)}
          //         className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
          //       >
          //         <Minus className="w-3 h-3" />
          //       </button>
          //       <span className="w-8 text-center text-sm">{item.quantity}</span>
          //       <button
          //         onClick={() => updateQuantity(item.id, 1)}
          //         className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
          //       >
          //         <Plus className="w-3 h-3" />
          //       </button>
          //       <button
          //         onClick={() => removeItem(item.id)}
          //         className="ml-2 text-red-500 hover:text-red-700"
          //       >
          //         <Trash2 className="w-4 h-4" />
          //       </button>
          //     </div>
          //   </div>

          //   {/* Price and Quantity Info */}
          //   <div className="text-right flex flex-col justify-between border">
          //     <p className="text-lg font-semibold text-gray-900">
          //       ${item.price.toFixed(2)}
          //     </p>
          //     <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
          //   </div>
          // </div>

        ))}
      </div>
    </div>
  );
}