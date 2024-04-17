import { Delete, Edit, Edit2, Edit2Icon, Edit3, PlusCircleIcon, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Dialog } from '../ui/dialog'

const ProfileContent = () => {
  return (
    <div className='w-full min-h-[80vh] flex justify-center items-center px-10 pt-32 pb-10'>
      <div className='w-full max-w-[750px] grid grid-cols-[1fr_1fr] gap-5 justify-center items-center'>
        <div className='rounded-2xl flex flex-col h-full col-span-1 bg-white shadow-md'>
          <div className='w-full flex justify-between items-center p-4 bg-[var(--lightest-grey)] rounded-t-2xl'>
            <h3 className='text-[var(--dark-header)] text-[18px] font-semibold'>
              Personal Informtion
            </h3>
            <div>
              <Edit className='h-4 w-4' />
            </div>
          </div>
          <div className='flex flex-row p-4 gap-5'>
            <div className='flex flex-col gap-2 items-center w-fit'>
              <div className='bg-[var(--light-grey)] h-[90px] w-[90px] flex justify-center items-center shadow-sm rounded-full'>
                <Image src={"/images/useravatar.png"} alt={"avatar"} height={100} width={100} className='h-[80px] w-[80px] rounded-full' />
              </div>
              <Button variant={"outline"} className='flex justify-between w-fit items-center gap-2 text-[12px] px-1.5 font-normal py-1 h-6'>
                Change <Edit3 className={"h-3 w-3"} />
              </Button>
            </div>
            <div className='flex flex-col gap-3 items-start'>
              <div className='flex flex-col gap-1'>
                <p>
                  Full Name:
                </p>
                <p className={"font-semibold text-[var(--dark-header)]"}>
                  Erling Halaand
                </p>
              </div>
              <div className='flex flex-col gap-1'>
                <p>
                  Email Address:
                </p>
                <p className={"font-semibold text-[var(--dark-header)]"}>
                  erlinghalaand@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='rounded-2xl flex flex-col h-full col-span-1 bg-white shadow-md'>
        <div className='w-full flex justify-between items-center p-4 bg-[var(--lightest-grey)] rounded-t-2xl'>
            <h3 className='text-[var(--dark-header)] text-[18px] font-semibold'>
              Delivery Address
            </h3>
            <div>
              <PlusCircleIcon className='h-4 w-5' />
            </div>
          </div>
          <div className='p-4 flex flex-col gap-3'>
            <div className='flex justify-between items-center py-2 px-3 rounded-2xl bg-[var(--lightest-grey)]'>
              <p className='font-semibold text-[14px] text-[var(--dark-header)]'>
                5, Etihad Stadium, Manchester City
              </p>
              <div className='flex flex-row items-center gap-2'>
                <Edit2Icon className='h-3 w-3' />
                <Trash2 className='h-3 w-3' />
              </div>
            </div>
            <div className='flex justify-between items-center py-2 px-3 rounded-2xl bg-[var(--lightest-grey)]'>
              <p className='font-semibold text-[14px] text-[var(--dark-header)]'>
                22, Anfield Stadium, Liverpool
              </p>
              <div className='flex flex-row items-center gap-2'>
                <Edit2Icon className='h-3 w-3' />
                <Trash2 className='h-3 w-3' />
              </div>
            </div>
          </div>
        </div>
        <div className='p-10 rounded-2xl h-56 col-span-2 bg-[#0ff]'>

        </div>
      </div>
    </div>
  )
}

export default ProfileContent