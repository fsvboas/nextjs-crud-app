'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '.'

interface TanstackQueryProviderProps {
  children: React.ReactNode
}

export const TanstackQueryProvider = ({
  children,
}: TanstackQueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
