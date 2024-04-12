import { popularProducts } from "@/constants"
import { ArrowBigRightDash, Heart, ShoppingBag, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"

const PopularProducts = () => {
  const convertToLocalCurrency = (input: number) => {
    const inCurrencyForm = input.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })
    return inCurrencyForm
  }

  return (
    <div className='bg-[var(--light-grey)] w-full flex flex-col justify-center items-center'>
      <div className="flex flex-col justify-center items-center max-w-[1600px] pt-12 sm:px-10 px-4 pb-24 md:gap-8 gap-5">
        <div className="flex flex-col gap-1 justify-center items-center">
          <h2 className="text-[var(--dark-header)] font-semibold text-[32px]">
            Popular Products
          </h2>
          <div className="flex justify-center items-center shadow-sm">
            <div className="bg-[var(--dark-grey)] w-[50px] h-[2px] rounded-l-full" />
            <div className="bg-[var(--dark-grey)] w-3 h-3 rounded-full min-w-3 min-h-3" />
            <div className="bg-[var(--dark-grey)] w-[50px] h-[2px] rounded-r-full" />
          </div>
          <p className="text-[var(--grey-text)]">
            Our products that are trending and in vogue.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center lg:gap-5 gap-4">
          {popularProducts.map((product, index) => (
            <div key={index} className={`bg-white shadow-sm rounded-2xl ${index > 4 ? "ss:flex hidden" : "flex"} items-center justify-between flex-col gap-3 p-4 xs:w-[280px] w-[290px]`}>
              <div className="flex w-full flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <ShoppingBag className="h-4 w-4" />
                  <Heart className="h-4 w-4" />
                </div>
                <div className="flex flex-col items-center justify-center gap-[1px] bg-white shadow-sm rounded-full">
                <Star strokeWidth={0} fill="#ffdf00" className="h-4 w-4 text-[var(--gold)] shadow-sm" />
                <p className="text-[10px]">
                  {product.rating}
                </p>
                </div>
              </div>
              <Image src={product.img} alt={'facecap'} width={500} height={200} className="w-[130px] h-[130px] object-contain" />
              <div className="w-full flex justify-start flex-col gap-1">
                <p className="text-[12px] text-[var(--grey-text)]">{product.category}</p>
                <h3 className="text-[var(--dark-header)] font-semibold text-[16px]">
                {product.name}
                </h3>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="font-semibold text-[var(--dark-header)] text-[14px]">
                  {convertToLocalCurrency(product.price)}
                </p>
                <div className="flex gap-2 justify-center items-center">
                  <div className="w-3 h-3 min-w-3 min-h-3 rounded-full bg-[#4f4747]" />
                  <div className="w-3 h-3 min-w-3 min-h-3 rounded-full bg-[#26499d]" />
                  <div className="w-3 h-3 min-w-3 min-h-3 rounded-full bg-[#c944e3]" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button className='flex gap-2 items-center'>
          <span>More Products</span> <ArrowBigRightDash />
        </Button>
      </div>
    </div>
  )
}

export default PopularProducts