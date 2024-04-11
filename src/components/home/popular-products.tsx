const PopularProducts = () => {
  return (
    <div className='bg-[var(--light-grey)] py-20 w-full flex flex-col justify-center items-center sm:px-10'>
      <div className="flex flex-col gap-1 justify-center items-center">
        <h2 className="text-[var(--dark-header)] font-semibold text-[32px]">
          Popular Products
        </h2>
        <div className="flex justify-center items-center shadow-sm">
          <div className="bg-[var(--dark-grey)] w-[50px] h-[2px] rounded-l-full" />
          <div className="bg-[var(--dark-grey)] w-3 h-3 rounded-full min-w-3 min-h-3" />
          <div className="bg-[var(--dark-grey)] w-[50px] h-[2px] rounded-r-full" />
        </div>
      </div>
    </div>
  )
}

export default PopularProducts