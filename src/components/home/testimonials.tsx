"use client"

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'

import { testimonials } from '@/constants'
import "swiper/css"
import "swiper/css/effect-coverflow"
import Image from 'next/image'
import { QuoteIcon } from 'lucide-react'
import { Separator } from '../ui/separator'

const Testimonials = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null)

  return (
    <div className='bg-[var(--light-grey)] w-full flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center max-w-[1600px] sm:px-10 px-4 md:gap-10 gap-8'>
        <div className="flex flex-col gap-1 justify-center items-center">
          <h2 className="text-[var(--dark-header)] font-semibold text-[32px]">
            Testimonials
          </h2>
          <div className="flex justify-center items-center shadow-sm">
            <div className="bg-[var(--dark-grey)] w-[50px] h-[2px] rounded-l-full" />
            <div className="bg-[var(--dark-grey)] w-3 h-3 rounded-full min-w-3 min-h-3" />
            <div className="bg-[var(--dark-grey)] w-[50px] h-[2px] rounded-r-full" />
          </div>
          <p className='text-[var(--grey-text)]'>
            Discover what our satisfied customer have to say.
          </p>
        </div>
        <div className='w-full flex justify-center items-center'>
          <Swiper
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 80,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
            loop={true}
            pagination={true}
            navigation={true}
            spaceBetween={50}
            className='max-w-[1000px] flex items-center py-10 min-h-[320px]'
          >
            {
              testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className='min-h-[250px] h-[250px] w-[300px] max-w-[300px] rounded-2xl bg-white shadow-md p-4'>
                  <div className='flex flex-row justify-between items-center'>
                    <div className='flex items-center gap-3'>
                      <div className='bg-[var(--light-grey)] flex justify-center items-center rounded-full h-[50px] w-[50px] min-h-[50px] min-w-[50px] shadow-sm'>
                        <Image src={testimonial.image} height={300} width={300} alt={testimonial.name} className='h-[30px] w-[30px] object-contain' />
                      </div>
                      <h2 className='text-[var(--dark-header)] font-semibold'>
                        &#8212; {testimonial.name}
                      </h2>
                    </div>
                    <QuoteIcon className='text-[var(--light-grey)] h-[50px] w-[50px]' />
                  </div>
                  <Separator className='my-3' />
                  <div className='mt-3'>
                    <p className='text-[var(--grey-text)] text-[15px]'>
                      {testimonial.testimonial}
                    </p>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonials