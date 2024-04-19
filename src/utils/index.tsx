import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from 'react-toastify'


export const handleLogout = (setUserPopoverIsOpen: any, router: any) => {
  console.log("Logout button clicked")
  Cookies.remove("token")
  Cookies.remove("roles")
  if(setUserPopoverIsOpen !== undefined && setUserPopoverIsOpen !== null) {
    setUserPopoverIsOpen(false)
  }
  router.replace("/")
  toast("You successfully logged out", {
    type: "success"
  })
}

export const convertToLocalCurrency = (input: number) => {
  const inCurrencyForm = input.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })
  return inCurrencyForm
}