"use client"

import React, { useState } from 'react'
import Loader from '../loader/loader'
import Navbar from '../navbar/navbar'

import Footer from '../footer/footer'

import ProfileContent from './profile-content'

const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(true)

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <div className='flex flex-col justify-center items-center'>
          <Navbar />
          <ProfileContent />
          <Footer />
        </div>
      )}
    </>
  )
}

export default HomePage