import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <div className='shadow-sm focus:shadow-md px-1.5 py-1.5 rounded-2xl bg-[var(--pure-white)] w-[270px] lg:flex hidden justify-between items-center h-[43px]'>
        <input type='text' className='px-2 py-1 text-[14px] outline-none border-none bg-[var(--pure-white)]' placeholder='Search Modeshion...' />
        <div className='flex justify-center items-center p-2 w-[37px] h-[32px] rounded-[.85rem] bg-[var(--dark-grey)]'>
          <Search className='h-full text-white' />
        </div>
      </div>
      <div className='lg:hidden flex'>
        <div className='flex justify-center items-center p-2 w-[32px] h-[32px] rounded-full bg-[var(--dark-grey)]'>
          <Search className='h-full text-white' />
        </div>
      </div>
    </div>
  )
}

export default SearchBar