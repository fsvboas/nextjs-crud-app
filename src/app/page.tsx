'use client'

import { Text } from '@geist-ui/core'
import { useQuery } from '@tanstack/react-query'
import { UserPlus } from 'lucide-react'
import Button from './components/core/button'
import Column from './components/core/column'
import Row from './components/core/row'
import FiltersSection from './components/filters-section'
import UsersTable from './components/users-table'
import getUsers from './services/get-users'

export default function Home() {
  const { data, isLoading } = useQuery({
    queryFn: () => getUsers(),
    queryKey: ['users'],
  })

  const users = data || []

  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-6">
      <Text h1 b font="24px">
        NextJS Crud Application
      </Text>
      <Column className="space-y-6">
        <Row className="space-x-4">
          <FiltersSection />
          <Button iconRight={<UserPlus />} type="success" auto />
        </Row>
        <UsersTable users={users} />
      </Column>
    </main>
  )
}
