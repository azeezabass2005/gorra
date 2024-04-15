import Image from 'next/image'
import React, { useState } from 'react'
import NavMenu from './menu-bar'
import Link from 'next/link'
import SearchBar from './search-bar'
import { BombIcon, ChevronDown, Heart, LayoutDashboard, LogOutIcon, ShoppingBag, UserRound, X } from 'lucide-react'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { motion } from 'framer-motion'
import { Dialog, DialogTrigger } from '../ui/dialog'
import AuthModalWrapper from '../auth/auth-modal-wrapper'
import Cookies from 'js-cookie'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { useRouter } from 'next/navigation'

//  xl:bg-[#ffffff20] xl:backdrop-blur-lg  xl:w-[1500px] xl:top-[30px] xl:shadow-md xl:rounded-2xl

const Navbar = () => {
  const [navShowing, setNavShowing] = useState(false)
  const [collectionIsShowing, setCollectionIsShowing] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [userPopoverIsOpen, setUserPopoverIsOpen] = useState(false)
  //@ts-ignore
  const roles = Cookies.get("roles") !== undefined ? JSON.parse(Cookies.get("roles")) : []
  console.log(roles)
  const collectionVariants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0 },
  };

  const router = useRouter()
  const handleLogout = () => {
    console.log("Logout button clicked")
    Cookies.remove("token")
    Cookies.remove("roles")
    setUserPopoverIsOpen(false)
    router.replace("/")
  }

  return (
    <div className='lg:px-10 px-4 py-3 md:h-[80px] h-[60px] bg-[var(--lightest-grey)] flex items-center justify-between lg:gap-8 gap-6 z-[9] fixed top-0 w-full xl:top-[30px] max-w-[100vw] xl:w-[1500px] xl:rounded-2xl'>
      <div className='flex items-center lg:gap-8 gap-6'>
        <Link href={"/"} className='flex flex-row items-center gap-1'>
          <Image src={"/images/logo.svg"} height={35} width={35} alt='logo' className='' />
          <h2 className='font-semibold text-[20px]'>
            Gorra
          </h2>
        </Link>
        <NavMenu roles={roles} />
      </div>
      <div className='flex items-center lg:gap-8 sm:gap-6 gap-4 h-full'>
        <SearchBar />
        <div className='lg:flex hidden items-center gap-2'>
          <div className='flex flex-col items-center gap-[1px]'>
            <div className='flex flex-col items-center'>
              <div className='bg-[var(--dark-grey)] p-1 rounded-lg flex justify-center items-center text-white text-[8px] h-4 w-5'>
                <span>
                  5
                </span>
              </div>
              <div className='down-triangle' />
            </div>
            <ShoppingBag className='h-4 w-4' />
          </div>
          <div className='flex items-end'>
            <Heart className='h-4 w-4 mt-5' />
          </div>
        </div>
        {Cookies.get("token") === "" || Cookies.get("token") == undefined ? (
          <Dialog open={modalIsOpen} onOpenChange={setModalIsOpen}>
            <DialogTrigger>
              <span className='sm:flex hidden text-[var(--light-grey)] text-[14px] font-semibold bg-primary px-3 py-2 rounded-2xl justify-center items-center gap-2 font'>
                <UserRound className='sm:text-white h-4 w-4' />
                <span className='sm:flex hidden'>
                Login
                </span>
              </span>
            </DialogTrigger>
            <AuthModalWrapper setModalIsOpen={setModalIsOpen} />
          </Dialog>
        ) : (
          <Popover open={userPopoverIsOpen} onOpenChange={setUserPopoverIsOpen}>
            <PopoverTrigger>
              <span className='bg-white h-[34px] w-[34px] rounded-full sm:flex hidden justify-center items-center shadow-sm'>
                <Image src={"/images/useravatar.png"} height={30} width={30} alt={"Me"} className='h-[30px] w-[30px] rounded-full' />
              </span>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-2 px-5">
              <div>
                Profile
              </div>
              <Separator />
              <div className='text-destructive cursor-pointer flex items-center gap-2' onClick={() => handleLogout()}>
                Logout <LogOutIcon className='h-3 w-4' />
              </div>
            </PopoverContent>
          </Popover>
        )}
    </div>
      <div className='md:hidden flex'>
        <LayoutDashboard className='h-5 w-5' onClick={() => setNavShowing((prev) => (!prev))} />
        <div className={`absolute z-[100] w-[100vw] min-h-[100vh] top-0 right-0 grid grid-rows-1 xs:grid-cols-[1fr_2fr] grid-cols-[.5fr_2fr] ${!navShowing ? "translate-x-[100%]" : ""} duration-500 transition-transform ease-in-out`}>
          <div className={`${navShowing ? "backdrop-blur-lg" : ""} w-full bg-transparent row-span-1 min-h-full`} onClick={() => setNavShowing((prev) => (!prev))}>
          </div>
          <div className='bg-[#fff] p-5 flex flex-col row-span-1'>
            <div className='w-full flex justify-between items-center'>
              <Link href={"/"} className='flex flex-row items-center gap-1'>
                <Image src={"/images/logo.svg"} height={35} width={35} alt='logo' className='' />
                <h2 className='font-semibold text-[20px]'>
                  Gorra
                </h2>
              </Link>
              <X className='h-5 w-5' onClick={() => setNavShowing((prev) => (!prev))} />
            </div>
            <div className='py-5 flex flex-col gap-3'>
              <div className='flex flex-col gap-3'>
                <div className='bg-[var(--lightest-grey)] px-4 py-2.5 rounded-2xl'>
                  <div className={`bg-[var(--lightest-grey)] w-full ${collectionIsShowing ? "pb-2.5" : ""} rounded-md flex justify-between items-center`} onClick={() => setCollectionIsShowing((prev) => (!prev))}>
                    <span>Collections</span><ChevronDown className={`${collectionIsShowing ? "rotate-180" : ""}  transition duration-200 h-4 w-4`} />
                  </div>
                  <motion.div variants={collectionVariants} animate={collectionIsShowing ? 'open' : 'closed'} transition={{ duration: 0.3 }} className={`${collectionIsShowing ? "flex" : "hidden"} flex-col gap-1`}>
                    <Separator />
                    <div className="flex flex-col gap-3 items-start justify-start px-2 py-2">
                      <h3 className="uppercase text-[14px] font-[500] text-[var(--dark-header)]">
                        Product Categories
                      </h3>
                      <div className="flex flex-col gap-2 pl-3">
                        <Link href={"/men"} className="flex items-center gap-2 text-muted-foreground text-[14px]"><BombIcon className="h-2 w-2" /> Cutton Caps</Link>
                        <Link href={"/woman"} className="flex items-center gap-2 text-muted-foreground text-[14px]"><BombIcon className="h-2 w-2" />Baseball Cap</Link>
                        <Link href={"/unisex"} className="flex items-center gap-2 text-muted-foreground text-[14px]"><BombIcon className="h-2 w-2" />Straw Caps</Link>
                        <Link href={"/unisex"} className="flex items-center gap-2 text-muted-foreground text-[14px]"><BombIcon className="h-2 w-2" />Limited Time Offer</Link>
                        <Link href={"/unisex"} className="flex items-center gap-2 text-muted-foreground text-[14px]"><BombIcon className="h-2 w-2" />Baseball Hat</Link>
                        <Link href={"/newest-arrivals"} className="flex items-center gap-2 text-muted-foreground text-[14px]"><BombIcon className="h-2 w-2" />Newest Arrivals</Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <Link href={"/products"} className='bg-[var(--lightest-grey)] px-4 py-2.5 rounded-2xl'>
                  Products
                </Link>
                <Link href={"/about-us"} className='bg-[var(--lightest-grey)] px-4 py-2.5 rounded-2xl'>
                  About Us
                </Link>
                {roles.includes("Admin") && (
                  <Link href={"/about-us"} className='bg-[var(--lightest-grey)] px-4 py-2.5 rounded-2xl'>
                  Admin Dashboard
                </Link>
                )}
              </div>
              <div className="bg-[var(--normal-grey)] rounded-lg flex justify-center items-center p-5">
                <Image src={"/images/firstcap.png"} alt={'facecap'} width={500} height={200} className="w-[200px] h-[200px] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='fixed bottom-[1rem] left-0 w-full flex justify-center items-center'>
        <div className='px-7 py-3 rounded-full bg-[#ffffff20] shadow-md backdrop-blur-md flex items-cneter gap-8 items-end'>
          <div className='flex flex-col items-center gap-[1px]'>
            <div className='flex flex-col items-center'>
              <div className='bg-[var(--dark-grey)] p-1 rounded-lg flex justify-center items-center text-white text-[8px] h-4 w-5'>
                <span>
                  5
                </span>
              </div>
              <div className='down-triangle' />
            </div>
            <ShoppingBag className='h-4 w-4' />
          </div>
          <div className='flex items-end'>
            <Heart className='h-4 w-4 mt-5' />
          </div>
          {Cookies.get("token") == "" || Cookies.get("token") == undefined ? (
            <span className='flex items-end' onClick={() => setModalIsOpen(true)}>
              <UserRound className='h-4 w-4 mt-5' />
            </span>
          ) : (
            <Link href={"/profile"} className='flex items-end' onClick={() => setModalIsOpen(true)}>
              <UserRound className='h-4 w-4 mt-5' />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar


// this is the remove.bg api key
// Te3vbg5JYQ8BUeoiFkvFUgxR