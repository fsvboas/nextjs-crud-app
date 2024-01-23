'use client'

import { useQuery } from '@tanstack/react-query'
import getUsers from './services/get-users'

export default function Home() {
  const { data, isLoading } = useQuery({
    queryFn: () => getUsers(),
    queryKey: ['users'],
  })

  const users = data || []

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Home page</h1>
      {isLoading
        ? 'Carregando...'
        : users?.map((user, index) => <p key={index}>{user?.name}</p>)}
    </main>
  )
}
