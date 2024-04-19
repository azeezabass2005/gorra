import { ArrowBigRightDash, Delete, Edit, Edit2, Edit2Icon, Edit3, Heart, LogOut, PlusCircleIcon, ShoppingBag, Star, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Dialog } from '../ui/dialog'
import { popularProducts } from '@/constants'
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { toast } from "react-toastify"

const ProfileContent = () => {

  const convertToLocalCurrency = (input: number) => {
    const inCurrencyForm = input.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })
    return inCurrencyForm
  }

  const router = useRouter()
  const handleLogout = () => {
    console.log("Logout button clicked")
    Cookies.remove("token")
    Cookies.remove("roles")
    router.replace("/")
    toast("You successfully logged out", {
      type: "error"
    })
  }

  return (
    <div className='w-full flex flex-col gap-8 sm:gap-10 justify-center items-center px-10 md:pt-32 pt-20 pb-20'>
      <div className="flex flex-col gap-1 justify-center items-center">
          <h2 className="text-[var(--dark-header)] font-semibold text-[32px]">
            Profile
          </h2>
          <div className="flex justify-center items-center shadow-sm">
            <div className="bg-[var(--dark-grey)] w-[50px] h-[2px] rounded-l-full" />
            <div className="bg-[var(--dark-grey)] w-3 h-3 rounded-full min-w-3 min-h-3" />
            <div className="bg-[var(--dark-grey)] w-[50px] h-[2px] rounded-r-full" />
          </div>
          <p className='text-[var(--grey-text)] text-center'>
            Make changes to your profile information.
          </p>
        </div>
      <div className='w-full sm:max-w-[800px] max-w-[500px] grid sm:grid-cols-[1fr_1fr_1fr_1fr] grid-cols-[1fr] sm:gap-5 gap-8 justify-center items-center'>
        <div className='rounded-2xl flex flex-col h-full sm:col-span-2 col-span-1 bg-white ss:shadow-md shadow-sm'>
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
        <div className='rounded-2xl flex flex-col h-full sm:col-span-2 col-span-1 bg-white ss:shadow-md shadow-sm'>
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

        <div className='rounded-2xl sm:flex hidden flex-col gap-2 justify-center items-center sm:col-span-3 col-span-1 bg-white ss:shadow-md shadow-sm'>
          <div className='w-full flex justify-between items-center p-4 bg-[var(--lightest-grey)] rounded-t-2xl'>
            <h3 className='text-[var(--dark-header)] text-[18px] font-semibold'>
              Products you may like
            </h3>
            <div>
              <ArrowBigRightDash className='h-4 w-5' />
            </div>
          </div>
          <div className='flex flex-row w-full justify-around items-center gap-2 p-3 overflow-auto'>
            {popularProducts.slice(0,3).map((product, index) => (
                <div key={index} className={`bg-white ss:shadow-md shadow-sm rounded-2xl ${index > 4 ? "ss:flex hidden" : "flex"} items-center justify-between flex-col gap-1.5 p-4 xs:w-[145px] w-[145px]`}>
                  <div className="flex w-full flex-row justify-between items-center">
                    <div className="flex flex-row gap-1 items-center">
                      <ShoppingBag className="h-2 w-2" />
                      <Heart className="h-2 w-2" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-[.5px] bg-white shadow-sm rounded-full">
                    <Star strokeWidth={0} fill="#ffdf00" className="h-2 w-2 text-[var(--gold)] shadow-sm" />
                    <p className="text-[5px]">
                      {product.rating}
                    </p>
                    </div>
                  </div>
                  <Image src={product.img} alt={'facecap'} width={250} height={100} className="w-[65px] h-[65px] object-contain" />
                  <div className="w-full flex justify-start flex-col gap-1">
                    <p className="text-[6px] text-[var(--grey-text)]">{product.category}</p>
                    <h3 className="text-[var(--dark-header)] font-semibold text-[8px]">
                    {product.name}
                    </h3>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <p className="font-semibold text-[var(--dark-header)] text-[7px]">
                      {convertToLocalCurrency(product.price)}
                    </p>
                    <div className="flex gap-2 justify-center items-center">
                      <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-full bg-[#4f4747]" />
                      <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-full bg-[#26499d]" />
                      <div className="w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-full bg-[#c944e3]" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className='rounded-2xl flex flex-col h-full justify-center items-center col-span-1 bg-white'>
          <button className='px-4 py-2 rounded-2xl flex items-center justify-between w-fit gap-3 bg-destructive text-white'>
            Logout <LogOut className='h-3 w-4' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileContent