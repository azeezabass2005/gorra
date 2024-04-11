import Image from "next/image"

const BrandSection = () => {


  return (
    <div className='bg-[var(--light-grey)] w-full sm:px-10 px-5 flex flex-col justify-center items-center sm:py-10 md:pt-72 lg:pt-10 gap-5'>
      <div className="flex flex-col gap-2">
        <h2 className="text-[var(--dark-header)] font-semibold text-[32px]">
          Popular Brands
        </h2>
        <div>
          {/* <div className="bg-[#f00] w-[50px] h-2 rounded-" /> */}
        </div>
      </div>
      <div className='grid rounded-2xl bg-white p-5 sm:grid-cols-6 ss:grid-cols-4 grid-cols-3 gap-6 max-w-[900px] shadow-sm'>
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