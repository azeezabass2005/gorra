import React from 'react'
import { Button } from '../ui/button'
import { Bell } from 'lucide-react'

const Subscribe = () => {
  return (
    <div className='bg-[var(--light-grey)] w-full flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center max-w-[1000px] sm:px-10 px-4 pb-24 md:gap-10 gap-8'>
        <div className="flex flex-col gap-1 justify-center items-center">
          <h2 className="text-[var(--dark-header)] font-semibold text-[32px]">
            Subscribe
          </h2>
          <div className="flex justify-center items-center shadow-sm">
            <div className="bg-[var(--dark-grey)] w-[50px] h-[2px] rounded-l-full" />
            <div className="bg-[var(--dark-grey)] w-3 h-3 rounded-full min-w-3 min-h-3" />
            <div className="bg-[var(--dark-grey)] w-[50px] h-[2px] rounded-r-full" />
          </div>
          <p className='text-[var(--grey-text)]'>
            Subscribe to get the latest news about us.
          </p>
        </div>
        <div className='flex flex-col ss:gap-5 gap-4 justify-center items-center w-fit rounded-2xl bg-white shadow-md ss:py-5 py-4 ss:px-8 px-4'>
          <div className='flex flex-col ss:gap-1 justify-center items-center max-w-[500px]'>
            <h3 className='ss:text-[20px] text-[18px] font-semibold text-center'>
              Would you love to hear more Gorra related and hat related news?
            </h3>
            <p className='text-[var(--grey-text)] text-center ss:text-[16px] text-[14px]'>
              If yes, a subscription to our news letter can keep you updated about latest trends.
            </p>
          </div>
          <div className='drop-shadow-md border-[1px] focus-within:border-[1.5px] border-primary p-1 rounded-2xl bg-[var(--pure-white)] ss:w-[400px] vs:w-[280px] w-[250px] flex justify-between items-center'>
            <input type='text' className='py-1 px-2 text-[14px] outline-none border-none bg-[var(--pure-white)]' placeholder='Subscribe to Gorra...' />
            <Button className='flex ss:justify-between justify-center items-center gap-3 ss:px-3 px-2 py-2 h-full rounded-[.85rem]'>
              <span className='ss:flex hidden'>
                Subscribe
              </span>
              <Bell className='ss:h-3 ss:w-3 h-4 w-5 text-white' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe