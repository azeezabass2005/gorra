import { useMutation } from "@tanstack/react-query"
import api from "@/api/api"

const handleLogin = async (inputData: any) => {
  console.log(inputData)
  const response = await api.post("/login", inputData)
  return response
}

export const useLoginMutation = () => {
  return (
    useMutation({
      mutationFn: (inputData: any) => handleLogin(inputData)
    })
  )
}