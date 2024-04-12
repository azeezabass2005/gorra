import { Search } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const SearchBar = () => {
  return (
    <div>
      <div className='shadow-sm focus:shadow-md px-1.5 py-1.5 rounded-2xl bg-[var(--pure-white)] w-[270px] lg:flex hidden justify-between items-center h-[43px]'>
        <input type='text' className='px-2 py-1 text-[14px] outline-none border-none bg-[var(--pure-white)]' placeholder='Search Gorra...' />
        <Button className='flex justify-center items-center p-2 w-[37px] h-[32px] rounded-[.85rem]'>
          <Search className='h-full text-white' />
        </Button>
      </div>
      <div className='lg:hidden flex'>
        <Button className='flex justify-center items-center p-2 w-[32px] h-[32px] rounded-full'>
          <Search className='h-full text-white' />
        </Button>
      </div>
    </div>
  )
}

export default SearchBar