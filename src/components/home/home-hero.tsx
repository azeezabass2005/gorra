import React from 'react'
import { Button } from '../ui/button'
import { ArrowBigRightDash } from 'lucide-react'
import Image from 'next/image'

const HomeHero = () => {
  return (
    <div className=' bg-[var(--light-grey)] w-full flex justify-center items-center'>
      <div className='w-full flex lg:justify-between justify-center lg:flex-row flex-col items-center min-h-[min(90vh,700px)] md:mt-[80px] mt-[60px] lg:py-10 py-4 gap-10 max-w-[1600px]'>
        <div className='flex flex-col gap-3 md:basis-3/5 lg:px-10 px-4'>
          <h2 className='vs:text-[36px] text-[30px] lg:text-[38px] font-semibold text-[var(--dark-header)] max-w-[580px]'>
            Your outfit is incomplete without a nice and befitting hat from Gorra.
          </h2>
          <p className='max-w-[540px] leading-[28px] md:text-[18px]'>
            Modeshion is the home to beautifully designed and crafted hats made from different materials. Is it baseball hat?, a picnic hat?, unisex hat? and the likes? Modeshion is your go-to store.
          </p>
          <div className='flex items-center justify-around w-full max-w-[450px] gap-2 px-5 py-3 bg-white rounded-2xl shadow-sm mt-4'>
            <div className='flex flex-col'>
              <p className='text-foreground-muted text-[14px] font-semibold'>
                Material
              </p>
              <h3 className='text-[18px] text-[var(--dark-header)] font-semibold'>
                Leather
              </h3>
            </div>
            <div className='h-[40px] w-[1px] bg-[var(--normal-grey)] rounded-full' />
            <div className='flex flex-col'>
              <p className='text-foreground-muted text-[14px] font-semibold'>
                Sex
              </p>
              <h3 className='text-[18px] text-[var(--dark-header)] font-semibold'>
                Unisex
              </h3>
            </div>
            <div className='h-[40px] w-[1px] bg-[var(--normal-grey)] rounded-full' />
            <Button className='flex gap-2 items-center'>
              <span>Explore</span> <ArrowBigRightDash />
            </Button>
          </div>
        </div>
        <div className='lg:basis-3/5 md:h-full h-[500px] lg:-mt-8 md:mt-48 mt-10 flex relative w-[480px]'>
          <div className="bg-[var(--normal-grey)] rounded-2xl flex justify-center w-[200px] h-[200px] items-center p-5 rotate-45 overflow-hidden absolute left-0 vs:left-0 md:top-[-120px] top-[40px]">
            <Image src={"/images/firstcap.png"} alt={'facecap'} width={500} height={200} className="w-[170px] h-[170px] object-contain -rotate-45" />
          </div>
          <div className="bg-[var(--normal-grey)] rounded-2xl flex justify-center w-[100px] h-[100px] items-center p-5 rotate-45 overflow-hidden absolute  vs:left-[200px] left-[200px] md:top-[-160px]">
            <Image src={"/images/firstcap.png"} alt={'facecap'} width={500} height={200} className="w-[80px] h-[80px] object-contain -rotate-45" />
          </div>
          <div className="bg-[var(--normal-grey)] rounded-2xl flex justify-center w-[300px] h-[300px] items-center p-5 rotate-45 overflow-hidden absolute vs:left-[250px] left-[250px] md:top-[-80px] top-[80px]">
            <Image src={"/images/firstcap.png"} alt={'facecap'} width={500} height={200} className="w-[250px] h-[250px] object-contain -rotate-45" />
          </div>
          <Button className='flex gap-2 items-center absolute md:top-[150px] vs:left-[65px] left-[65px] top-[360px]'>
              <span>Newest Arrivals</span> <ArrowBigRightDash />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HomeHero