'use client'

import { Text } from '@geist-ui/core'
import { UserPlus } from 'lucide-react'
import Button from './components/core/button'
import Row from './components/core/row'
import FiltersSection from './components/filters-section'

export default function Home() {
  // const { data, isLoading } = useQuery({
  //   queryFn: () => getUsers(),
  //   queryKey: ['users'],
  // })

  // const users = data || []

  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-6">
      <Text h1 b font="24px">
        NextJS Crud Application
      </Text>
      <Row className="space-x-4">
        <FiltersSection />
        <Button iconRight={<UserPlus />} type="success" auto />
      </Row>
    </main>
  )
}
