"use client"

import React, { useState } from 'react'
import Loader from '../loader/loader'
import Navbar from '../navbar/navbar'
import HomeHero from './home-hero'
import BrandSection from './brand-section'
import PopularProducts from './popular-products'
import FeaturedProducts from './featured-products'

const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(true)

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <div className='flex flex-col justify-center items-center'>
          <Navbar />
          <HomeHero />
          <BrandSection />
          <PopularProducts />
          <FeaturedProducts />
        </div>
      )}
    </>
  )
}

export default HomePage
// return (
//   <>
//     {loading ? (
//       <Loader setLoading={setLoading} />
//     ) : (
//       <div>
//         <Navbar />
//       </div>
//     )}
//   </>
// )