import React from 'react'
import { DialogClose, DialogContent, DialogHeader } from '../ui/dialog'
import { X } from 'lucide-react'
import { Separator } from '../ui/separator'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import LoginForm from './login-form'
import SignupForm from './signup-form'
import Link from 'next/link'

const AuthModalWrapper = ({ setModalIsOpen }: any) => {
  return (
    <DialogContent>
      <Tabs defaultValue='login' className='flex flex-col'>
        <div className='flex flex-row items-center justify-between'>
          <Link href={"/"} className='flex flex-row items-center gap-1'>
            <Image src={"/images/logo.svg"} height={28} width={28} alt='logo' className='' />
            <h2 className='font-semibold md:flex hidden'>
              Gorra
            </h2>
          </Link>
          <TabsList>
            <TabsTrigger value='login'>
              Login
            </TabsTrigger>
            <TabsTrigger value='signup'>
              Signup
            </TabsTrigger>
          </TabsList>
          <div onClick={() => setModalIsOpen(false)} className='ring-offset-background border-[1.5px] rounded-md p-[2px] border-[var(--normal-grey)]'>
            <X className='h-4 w-4 cursor-pointer' />
          </div>
        </div>
        <Separator className='my-2' />
        <TabsContent value="login" className='flex flex-row sm:justify-between justify-center items-center gap-3'>
          <div className='sm:basis-1/2 w-full max-w-[400px]'>
            <LoginForm setModalIsOpen={setModalIsOpen} />
          </div>
          <div className='sm:flex hidden justify-center items-center basis-1/2 rounded-br-2xl h-full min-h-[400px]'>
            <Image src='/images/loginimg.jpg' alt={"firstcap"} height={700} width={700} className={`w-full rounded-br-2xl h-full object-cover`} />
          </div>
          {/* <div className='sm:flex hidden justify-center items-center basis-1/2 bg-[var(--normal-grey)] rounded-br-2xl p-10 h-full min-h-[400px]'>
            <Image src='/images/loginimg.jpg' alt={"firstcap"} height={500} width={500} className={`basis-2/5 w-full`} />
          </div> */}
        </TabsContent>
        <TabsContent value="signup" className='flex flex-row sm:justify-between justify-center items-center gap-3'>
          <div className='sm:basis-1/2 w-full max-w-[400px]'>
            <SignupForm setModalIsOpen={setModalIsOpen} />
          </div>
          <div className='sm:flex hidden justify-center items-center basis-1/2 rounded-br-2xl h-full min-h-[400px]'>
            <Image src='/images/loginimg.jpg' alt={"firstcap"} height={700} width={700} className={`w-full rounded-br-2xl h-full object-cover`} />
          </div>
        </TabsContent>
      </Tabs>
    </DialogContent>
  )
}

export default AuthModalWrapper