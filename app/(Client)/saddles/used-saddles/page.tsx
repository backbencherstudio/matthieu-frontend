import BreadCrumb from '@/components/ClientComponents/reuseable/BreadCrumb';
import UsedSaddles from '@/components/ClientComponents/Saddles/UsedSaddles/UsedSaddles';
import ContactTeamIcon from '@/components/Icons/ContactTeamIcon';
import ForwardArrowIcon from '@/components/Icons/ForwardArrowIcon';
import ShippingIcon from '@/components/Icons/ShippingIcon';
import TrialIcon from '@/components/Icons/TrialIcon';

import React from 'react'

const iconsItems = [
    {
        label: "Contact our team for more information", icon: <ContactTeamIcon className='lg:w-[60px] lg:h-[60px] md:w-[40px] md:h-[40px] w-[32px] h-[32px]'/>,
    },
    {
        label: "Explore our trial options", icon: <TrialIcon className='lg:w-[60px] lg:h-[60px] md:w-[40px] md:h-[40px] w-[32px] h-[32px]' />,
    },
    {
        label: "Fast and secure shipping", icon: <ShippingIcon className='lg:w-[60px] lg:h-[60px] md:w-[40px] md:h-[40px] w-[32px] h-[32px]' />,
    },
]

export default function UsedSaddlesPage() {


  const breadLink = [
    {
      label: "SADDLES",
      href: "/saddles",
    },
    {
      label: "USED SADDLES",
      href: "/saddles/used-saddles",
    },
  ];

  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div className='maxContainer'>
        <div className=' lg:pt-[80px] lg:pb-[60px] pt-[60px] pb-[50px]'>
          <div className='text-center flex items-center justify-center flex-col gap-6'>
            <h2 className='textSecondary lg:text-[40px] md:text-[36px] text-[28px] font-bold leading-[100%] tracking-[.8px]'>Used saddles</h2>
            <div className='md:flex hidden'>
              {iconsItems?.map((item, index) => (
                <div key={item?.label} className='flex items-center   ' >
                  <div className='flex flex-col items-center justify-center gap-6'>
                    <span>{item?.icon}</span>
                    <p className='text-[#4C526F] lg:text-xl md:text-lg text-base leading-[124%] tracking-[.4px] md:max-w-[215px] capitalize'>{item?.label}</p>
                  </div>
                  {index !== iconsItems?.length - 1 && (
                    <span className='md:mx-8 mx-4'><ForwardArrowIcon className='lg:w-12 lg:h-12 md:w-[40px] md:h-[40px] w-[32px] h-[32px]' /></span>
                  )}
                </div>
              ))}

            </div>
          </div>
          <UsedSaddles />
        </div>
      </div>
    </div>
  )
}
