"use client"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Separator } from "../ui/separator"
import { useSignupMutation } from "@/frameworks/use-signup"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { toast } from "react-toastify"
import { EyeIcon, EyeOffIcon } from "lucide-react"

const SignupForm = ({ setModalIsOpen }: any) => {

  const {mutate: registerUser, isPending, data, isError, isSuccess} = useSignupMutation()
  const [passwordIsShowing, setPasswordIsShowing] = useState(false)

  const signupFormSchema = z.object({
    firstName: z.string().min(3, {
      message: "First Name can't be less that three characters."
    }),
    lastName: z.string().min(3, {
      message: "Last Name can't be less that three characters."
    }),
    email: z.string().min(3, {
      message: "Email can't be less that three characters."
    }),
    password: z.string().min(5, {
      message: "Password can't be less than 5 characters"
    })
  })
  const signupForm = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  })

  useEffect(() => {
    const handleErrorSuccess = () => {
      if(isError) {
        console.log(`an error occured`)
        // @ts-ignore
        console.log(error?.response?.data?.message)
        //@ts-ignore
        toast(error?.response?.data?.message || "An error occured", {
          type: 'error',
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        console.log(data)
      } else if(isSuccess) {
        console.log(data)
        console.log(data?.data?.token)
        Cookies.set("token", data?.data?.token)
        toast("You are successfully registered", {
          type: 'success',
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
          });
        console.log(`User successfully registered.`)
        setModalIsOpen(false)
        
      }
    }
    handleErrorSuccess()
  }, [isError, isSuccess])

  const handleFormSubmit = (values: z.infer<typeof signupFormSchema>) => {
    console.log(values)
    registerUser(values)
  }
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center w-full">
        <h2 className="text-[var(--dark-header)] font-semibold text-[18px]">
          Sign Up
        </h2>
        <div className="flex justify-center items-center shadow-sm">
          <div className="bg-[var(--dark-grey)] w-[20px] h-[1px] rounded-l-full" />
          <div className="bg-[var(--dark-grey)] w-2 h-2 rounded-full min-w-2 min-h-2" />
          <div className="bg-[var(--dark-grey)] w-[20px] h-[1px] rounded-r-full" />
        </div>
        <p className="text-[var(--grey-text)] text-[14px]">
          Create a new gorra account.
        </p>
      </div>
      <Separator className='my-1' />
      <Form {...signupForm}>
        <form onSubmit={signupForm.handleSubmit(handleFormSubmit)} className="flex flex-col gap-3 w-full">
          <FormField
            control={signupForm.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-1">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g John" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-1">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g Doe" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-1">Email</FormLabel>
                <FormControl>
                  <Input placeholder="e.g capping@gmail.com" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="px-1">Password</FormLabel>
                <FormControl>
                  <Input type={passwordIsShowing ? "text" : "password"} placeholder="password" {...field} />
                </FormControl>
                <span className="absolute right-[20px] top-[50%] text-primary" onClick={(() => setPasswordIsShowing((prev) => (!prev)))}>
                  {passwordIsShowing ? (<EyeOffIcon className="h-4 w-4" />) : (<EyeIcon className="h-4 w-4" />)}
                </span>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='w-full flex justify-center items-center rounded-2xl mt-3'>
            Sign up
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default SignupForm