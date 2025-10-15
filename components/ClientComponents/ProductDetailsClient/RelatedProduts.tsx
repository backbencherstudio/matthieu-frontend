import Link from 'next/link'
import React from 'react'

const relatedItems = [
  {img:"/images/products-details/related items/related1.png",text:"Figure 8 Noseband Bridle"},
  {img:"/images/products-details/related items/related3.png",text:"Anatomic Bridle"},
  {img:"/images/products-details/related items/related2.png",text:" Drop Noseband Bridle"},
  {img:"/images/products-details/related items/related4.png",text:"DOUBLE NOSEBAND BRIDLE"},
]

export default function RelatedProduts() {
  return (
    <div className='lg:mt-12 mt-8'>
      <h2 className='text-[#1F274B] leading-[100%] tracking-[.64px] font-bold lg:text-[32px] md:text-[28px] text-2xl text-center '>Related items</h2>
      <div className='grid grid-cols-4 xl:gap-6 md:gap-4 gap-2 md:mt-10 mt-6'>
        {relatedItems?.map((item,index) => (
          <Link href="" className='relative ' key={index}>
              <div className='xl:h-[386px]'>
                <img src={item?.img} alt="" className='h-full w-full object-cover'/>
              </div>
              <div className='inset-0 absolute  bg-black/30   '></div>
              <p className='absolute top-1/2 flex justify-center w-full -translate-y-1/2  text-center text-white lg:text-2xl text-xs md:text-xl font-bold leding-[136%] md:px-4 px-2'>{item?.text}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
