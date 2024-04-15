"use client"

import React, { useState } from 'react'
import Loader from '../loader/loader'
import Navbar from '../navbar/navbar'

import Footer from '../footer/footer'

const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(true)

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <div className='flex flex-col justify-center items-center'>
          <Navbar />
          <div className='w-full min-h-[90vh] flex justify-center items-center bg-[var(--light-grey)]'>
            This is the profile page
          </div>
          <Footer />
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