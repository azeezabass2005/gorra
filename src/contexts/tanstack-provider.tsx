"use client"

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const TanstackQueryProvider = ({ children }: any) => {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default TanstackQueryProvider