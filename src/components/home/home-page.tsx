"use client"

import React, { useState } from 'react'
import Loader from '../loader/loader'
import Navbar from '../navbar/navbar'
import HomeHero from './home-hero'

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