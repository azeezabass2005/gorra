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
import { useLoginMutation } from "@/frameworks/use-login"
import { useEffect } from "react"
import { useToast } from "../ui/use-toast"

const LoginForm = () => {
  const { toast } = useToast()
  const { mutate: logUserIn, data, isSuccess, isError, error } = useLoginMutation()

  const loginFormSchema = z.object({
    email: z.string().min(3, {
      message: "Email can't be less that three characters."
    }),
    password: z.string().min(5, {
      message: "Password can't be less than 5 characters"
    })
  })
  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
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
        toast({
          variant: "destructive",
          title: "Error",
          //@ts-ignore
          description: error?.response?.data?.message
        })
        console.log(data)
      } else if(isSuccess) {
        console.log(`user successfully logged in`)
        toast({
          title: "Success",
          description: "You are successfully logged in. ✔✔"
        })
      }
    }
    handleErrorSuccess()
  }, [isError, isSuccess])

  const handleFormSubmit = (values: z.infer<typeof loginFormSchema>) => {
    console.log(values)
    logUserIn(values)
  }
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center w-full">
        <h2 className="text-[var(--dark-header)] font-semibold text-[18px]">
          Login
        </h2>
        <div className="flex justify-center items-center shadow-sm">
          <div className="bg-[var(--dark-grey)] w-[20px] h-[1px] rounded-l-full" />
          <div className="bg-[var(--dark-grey)] w-2 h-2 rounded-full min-w-2 min-h-2" />
          <div className="bg-[var(--dark-grey)] w-[20px] h-[1px] rounded-r-full" />
        </div>
        <p className="text-[var(--grey-text)] text-[14px]">
          Login to your existing gorra account.
        </p>
      </div>
      <Separator className='my-2' />
      <Form {...loginForm}>
        <form onSubmit={loginForm.handleSubmit(handleFormSubmit)} className="flex flex-col gap-3 w-full">
          <FormField
            control={loginForm.control}
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
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-1">Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='w-full flex justify-center items-center rounded-2xl mt-4'>
            Login
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default LoginForm