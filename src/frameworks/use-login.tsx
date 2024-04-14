import { useMutation } from "@tanstack/react-query"
import api from "@/api/api"

const handleLogin = async (inputData: any) => {
  console.log(inputData)
  console.log("reached the login function")
  const response = await api.post("/auth/login", inputData)
  console.log(response)
  return response
}

export const useLoginMutation = () => {
  return (
    useMutation({
      mutationFn: (inputData: any) => handleLogin(inputData)
    })
  )
}