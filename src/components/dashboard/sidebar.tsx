import { LayoutDashboard } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-start w-[300px]'>
      <div className='flex flex-col gap-2 w-full'>
        <Link href={"/dashboard"} className={`w-full py-2 px-3 rounded-2xl`}>
          <LayoutDashboard />
        </Link>
      </div>
    </div>
  )
}

export default Sidebar