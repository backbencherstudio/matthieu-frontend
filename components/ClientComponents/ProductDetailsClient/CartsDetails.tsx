import React, { useState } from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';
import MinusIcon from '@/components/Icons/MinusIcon';

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

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');

  const subtotal = 590.00;
  const shipping = 15.00;
  const taxRate = 0.08;
  const couponDiscount = appliedCoupon ? 0.00 : 0.00;

  const tax = (subtotal + shipping) * taxRate;
  const total = subtotal + shipping + tax - couponDiscount;

  const summaryItems = [
    { label: "Subtotal", value: subtotal, },
    { label: "Shipping", value: shipping,  },
    { label: "Tax (8%)", value: tax,  },
    { label: "Coupon Discount", value: -couponDiscount,  },
  ];

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      setAppliedCoupon(couponCode);
      // In a real app, you would validate the coupon here
    }
  };

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
              <div className="flex items-center gap-2 ">
                <div className='flex gap-4 items-center bg-[#F3F3F4] p-1.5'>
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className=" flex items-center cursor-pointer text-[#1D1F2C] hover:text-[#1D1F2C]/50"
                  >
                    <MinusIcon className="" />
                  </button>
                  <span className=" text-center text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
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


      {/* //checkout section  */}
      <div className="mt-auto">
        <div className=" ">
          {/* Coupon Section */}
          <div className="flex flex-col gap-3">
            <label htmlFor="coupon" className="text-[#1F274B] md:text-lg text-base font-extrabold leaqding-[100%]">
              Have a coupon?
            </label>
            <div className="relative px-[2px] md:px-[1px]">
              <input
                type="text"
                id="coupon"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="GTH678"
                className="flex-1 pl-4  md:py-3.5 py-2.5 border border-[#1F274B3D]  focus:outline-none focus:ring-1 focus:ring-[#1F274B] focus:border-transparent w-full text-[#4C526F] md:text-base leading-[100%] font-normal bg-[#F8FAFB]"
              />
              <button
                onClick={handleApplyCoupon}
                className="px-4 py-2 absolute top-1/2 -translate-y-1/2  right-3 text-base leading-[100%] font-normal text-white bg-[#1F274B] hover:bg-[#1F274B]/90 cursor-pointer"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Divider */}
          {/* <hr className="" /> */}

          {/* Price Breakdown */}
          <div className="space-y-5 mt-6 pb-4 border-b">
            {summaryItems.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between md:text-base text-sm leading-[100%] font-normal text-[#4C526F] `}
              >
                <span>{item.label}</span>
                <span className={` ${item?.label === "Coupon Discount" && "text-[#F38B94]"}`}>
                  ${(item?.value).toFixed(2)}
                </span>
              </div>
            ))}
          </div>


          {/* Total */}
          <div className="flex justify-between items-center mt-6 text-[#4C526F] lg:text-2xl md:text-xl text-lg ">
            <span className="leading-[100%] font-extrabold">
              Total Amount
            </span>
            <span className="leading-[100%] font-normal" >
              ${total.toFixed(2)}
            </span>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-[#1F274B] text-white py-4  hover:bg-[#1F274B]/90 transition-colors md:text-lg font-normal leading-[132%] cursor-pointer text-base md:mt-8 mt-6">
            Checkout Now
          </button>
        </div>
      </div>

    </div>
  );
}


