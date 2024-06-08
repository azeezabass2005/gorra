import { ArrowDown, ArrowUp, DiamondPercent, Wallet2,  } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const ProfitSummary = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
      <div className='flex items-center gap-4 w-full justify-between'>
        <div className='flex items-center gap-3'>
          <div className='h-16 w-16 rounded-2xl flex justify-center items-center bg-[#fcffcc]'>
            <DiamondPercent className='h-10 w-10 text-[#ffff00] ' />
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[var(--dark-header)] text-[18px] font-semibold'>
              $85393
            </h3>
            <p className='text-[var(--grey-text)] text-[14px]'>
              You have revenue
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-end text-[12px]'>
          <div className='flex flex-row items-center gap-1'>
            <ArrowUp className='h-3 w-3 text-[#ffff00]' />
            <p className='text-[var(--grey-text)]'>
              60%
            </p>
          </div>
          <Link href="#" className='underline text-[va(--grey-text)]'>
            details
          </Link>
        </div>
      </div>
      <div className='flex items-center gap-4 w-full justify-between'>
        <div className='flex items-center gap-3'>
          <div className='h-16 w-16 rounded-2xl flex justify-center items-center bg-[#e6ffe6]'>
            <Wallet2 className='h-10 w-10 text-[#00ff00] ' />
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[var(--dark-header)] text-[18px] font-semibold'>
              $85393
            </h3>
            <p className='text-[var(--grey-text)] text-[14px]'>
              You have profit
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-end text-[12px]'>
          <div className='flex flex-row items-center gap-1'>
            <ArrowUp className='h-3 w-3 text-[#00ff00]' />
            <p className='text-[var(--grey-text)]'>
              60%
            </p>
          </div>
          <Link href="#" className='underline text-[va(--grey-text)]'>
            details
          </Link>
        </div>
      </div>
      <div className='flex items-center gap-4 w-full justify-between'>
        <div className='flex items-center gap-3'>
          <div className='h-16 w-16 rounded-2xl flex justify-center items-center bg-[#ffe1e1]'>
            <DiamondPercent className='h-10 w-10 text-[#ff0000] ' />
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[var(--dark-header)] text-[18px] font-semibold'>
              $85393
            </h3>
            <p className='text-[var(--grey-text)] text-[14px]'>
              You have lost
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-end text-[12px]'>
          <div className='flex flex-row items-center gap-1'>
            <ArrowDown className='h-3 w-3 text-[#ff0000]' />
            <p className='text-[var(--grey-text)]'>
              60%
            </p>
          </div>
          <Link href="#" className='underline text-[va(--grey-text)]'>
            details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfitSummary