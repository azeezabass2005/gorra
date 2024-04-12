import { footerLinks } from '@/constants'
import { LocateIcon, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className='w-full ss:text-[16px] text-[14px] flex justify-center items-center px-3 md:px-10 py-4 bg-[var(--lightest-grey)] z-[1000] text-[var(--grey-text)]'>
     <div className='flex flex-row flex-wrap items-start md:gap-16 gap-8 w-full max-w-[900px] md:justify-between justify-center'>
      <Link href={"/"} className='flex flex-row items-center gap-1'>
        <Image src={"/images/logo.svg"} height={35} width={35} alt='logo' className='' />
        <h2 className='font-semibold text-[20px]'>
          Gorra
        </h2>
      </Link>
      {footerLinks.map((footerLink, index) => (
        <div key={index} className='flex flex-col gap-2'>
          <h2 className='font-semibold text-[var(--dark-header)]'>
            {footerLink.title}
          </h2>
          <div className='flex flex-col gap-1'>
            {footerLink.links.map((linkItem, index) => (
              <Link key={`${index}-${linkItem.linkName.toLowerCase()}`} href={linkItem.link} className='text-[14px]'>
                {linkItem.linkName}
              </Link>
            ))}
          </div>
        </div>
      ))}
      <div className='flex flex-col gap-2'>
        <h2 className='font-semibold text-[var(--dark-header)]'>
          Contact
        </h2>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-2 text-[14px]'>
            <Phone className='h-3 w-3' /> <a href="tel:+2349160649124">+2349160649124</a>
          </div>
          <div className='flex items-center gap-2 text-[14px]'>
            <Phone className='h-3 w-3' /> <a href="tel:+2348121771495">+2348121771495</a>
          </div>
          <div className='flex items-center gap-2 text-[14px]'>
            <Mail className='h-3 w-3' /> <a href="mailto:info@gorra.com">info@gorra.com</a>
          </div>
          <div className='flex items-center gap-2 text-[14px]'>
            <MapPin className='h-3 w-3' /> <span>5, Etihad Stadium, Manchester City.</span>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Footer