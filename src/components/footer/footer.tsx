import React from 'react'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className='w-full ss:text-[16px] text-[14px] flex justify-center items-center p-3 md:p-5 bg-[var(--lightest-grey)] z-[1000] text-[var(--grey-text)]'>
      &copy; Gorra Hats Int Ltd. {year}
    </div>
  )
}

export default Footer