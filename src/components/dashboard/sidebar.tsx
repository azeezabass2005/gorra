"use client"

import { BriefcaseBusiness, FileText, LayoutDashboard, ShoppingBag, UsersRound, WalletMinimal } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathName = usePathname()
  return (
    <div className='flex flex-col gap-10 justify-start w-[260px] py-5 bg-[var(--lightest-grey)] min-h-[93vh] rounded-2xl shadow-md'>
      
      <div className='flex w-full justify-center items-center'>
        <Link href={"/"} className='flex flex-row items-center gap-2 w-[80%]'>
          <Image src={"/images/logo.svg"} height={28} width={28} alt='logo' className='' />
          <h2 className='font-bold text-[18px] text-primary'>
            Gorra Hats
          </h2>
        </Link>
      </div>
      <div className='flex flex-col gap-3 w-full justify-center items-center'>
        <Link href={"/dashboard"} className={`${pathName == "/dashboard" ? "bg-[var(--normal-grey)] text-[var(--dark-header)] font-semibold" : ""}  w-[80%] py-2 px-4 rounded-2xl flex items-center gap-3 text-[var(--grey-text)]`}>
          <LayoutDashboard className='h-4 w-4' />
          <span className='text-[17px]'>
            Dashboard
          </span>
        </Link>
        <Link href={"/customer"} className={`${pathName == "/customer" ? "bg-[var(--normal-grey)] text-[var(--dark-header)] font-semibold" : ""} w-[80%] py-2 px-4 rounded-2xl flex items-center gap-3 text-[var(--grey-text)]`}>
          <UsersRound className='h-4 w-4' />
          <span className='text-[17px]'>
            Customer
          </span>
        </Link>
        <Link href={"/sales"} className={`${pathName == "/sales" ? "bg-[var(--normal-grey)] text-[var(--dark-header)] font-semibold" : ""} w-[80%] py-2 px-4 rounded-2xl flex items-center gap-3 text-[var(--grey-text)]`}>
          <WalletMinimal className='h-4 w-4' />
          <span className='text-[17px]'>
            Sales
          </span>
        </Link>
        <Link href={"/product-admin"} className={`${pathName == "/product-admin" ? "bg-[var(--normal-grey)] text-[var(--dark-header)] font-semibold" : ""} w-[80%] py-2 px-4 rounded-2xl flex items-center gap-3 text-[var(--grey-text)]`}>
          <ShoppingBag className='h-4 w-4' />
          <span className='text-[17px]'>
            Product
          </span>
        </Link>
        <Link href={"/inventory"} className={`${pathName == "/inventory" ? "bg-[var(--normal-grey)] text-[var(--dark-header)] font-semibold" : ""} w-[80%] py-2 px-4 rounded-2xl flex items-center gap-3 text-[var(--grey-text)]`}>
          <BriefcaseBusiness className='h-4 w-4' />
          <span className='text-[17px]'>
            Inventory
          </span>
        </Link>
        <Link href={"/report"} className={`${pathName == "/report" ? "bg-[var(--normal-grey)] text-[var(--dark-header)] font-semibold" : ""} w-[80%] py-2 px-4 rounded-2xl flex items-center gap-3 text-[var(--grey-text)]`}>
          <FileText className='h-4 w-4' />
          <span className='text-[17px]'>
            Report
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar