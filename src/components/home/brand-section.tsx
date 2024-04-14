import Image from "next/image"

const BrandSection = () => {


  return (
    <div className='bg-[var(--light-grey)] w-full sm:px-10 px-4 flex flex-col justify-center items-center sm:py-5 md:pt-72 lg:pt-0 gap-5 md:gap-8'>
      <div className="flex flex-col gap-1 justify-center items-center">
        <h2 className="text-[var(--dark-header)] font-semibold text-[32px]">
          Popular Brands
        </h2>
        <div className="flex justify-center items-center shadow-sm">
          <div className="bg-[var(--dark-grey)] w-[50px] h-[2px] rounded-l-full" />
          <div className="bg-[var(--dark-grey)] w-3 h-3 rounded-full min-w-3 min-h-3" />
          <div className="bg-[var(--dark-grey)] w-[50px] h-[2px] rounded-r-full" />
        </div>
        <p className="text-[var(--grey-text)]">
          The brand of hats that are widespread.
          </p>
      </div>
      <div className='grid rounded-2xl bg-white p-5 sm:grid-cols-6 ss:grid-cols-4 grid-cols-3 gap-6 max-w-[1000px] shadow-sm'>
        <div className="col-span-1 flex justify-center items-center">
          <Image src={"/images/nike-logo.png"} alt="Nike" height={375} width={666} className="w-[80%] grayscale" />
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <Image src={"/images/adidas-logo.png"} alt="Nike" height={375} width={666} className="w-[80%] grayscale" />
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <Image src={"/images/puma-logo.png"} alt="Nike" height={375} width={666} className="w-[80%] grayscale" />
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <Image src={"/images/airjordan-logo.png"} alt="Nike" height={375} width={666} className="w-[80%] grayscale" />
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <Image src={"/images/versace-logo.png"} alt="Nike" height={375} width={666} className="w-[80%] grayscale" />
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <Image src={"/images/vans-logo.png"} alt="Nike" height={375} width={666} className="w-[80%] grayscale" />
        </div>
      </div>
    </div>
  )
}

export default BrandSection