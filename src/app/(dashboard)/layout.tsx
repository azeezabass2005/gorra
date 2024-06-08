import Sidebar from '@/components/dashboard/sidebar'
import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'

const layout = ({ children }: any) => {
  return (
    <div className='flex flex-row p-5 max-h-[100vh]'>
      <Sidebar />
      <ScrollArea className='w-full'>
        {children}
      </ScrollArea>
    </div>
  )
}

export default layout