import api from "@/api/api"
import { useMutation } from "@tanstack/react-query"

const handleSignup = async (inputData: any) => {
  console.log(inputData)
  console.log(`reached the signup function`)
  const response = await api.post("/auth/register", inputData)
  console.log(response)
  return response
}

export const useSignupMutation = () => {
  return(
    useMutation({
      mutationFn: (inputData: any) => handleSignup(inputData)
    })
  )
}