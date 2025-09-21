import HeroSection from '@/components/ClientComponents/HomePage/HeroSection'
import HomeBanner from '@/components/ClientComponents/HomePage/HomeBanner'
import React from 'react'

export default function ClientHomePage() {
  return (
    <div className=''>
      <div>
        <HomeBanner/>
        <HeroSection/>
      </div>
    </div>
  )
}
