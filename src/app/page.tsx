'use client'

import { Text } from '@geist-ui/core'
import { useQuery } from '@tanstack/react-query'
import { Eye, Pencil, UserPlus } from 'lucide-react'
import React from 'react'
import Button from './components/core/button'
import Column from './components/core/column'
import Row from './components/core/row'
import Show from './components/core/show'
import FiltersSection from './components/filters-section'
import UserFormModal from './components/user-form-modal'
import UsersTable from './components/users-table'
import getUsers from './services/get-users'

interface HomeProps {
  searchParams: {
    name: string
    birthdate: string
    phone: string
    city: string
    state: string
  }
}

export default function Home({ searchParams }: HomeProps) {
  const { data, isLoading } = useQuery({
    queryFn: () => getUsers(),
    queryKey: ['users'],
  })

  const users = data || []

  const filteredUsers = users?.filter(user => {
    if (!searchParams) return

    return (
      (!searchParams.name ||
        user.name?.toLowerCase().includes(searchParams.name.toLowerCase())) &&
      (!searchParams.birthdate ||
        user.birthdate
          ?.toLowerCase()
          .includes(searchParams.birthdate.toLowerCase())) &&
      (!searchParams.phone ||
        user.phone?.toLowerCase().includes(searchParams.phone.toLowerCase())) &&
      (!searchParams.city ||
        user.city?.toLowerCase().includes(searchParams.city.toLowerCase())) &&
      (!searchParams.state ||
        user.state?.toLowerCase().includes(searchParams.state.toLowerCase()))
    )
  })

  const [openModal, setOpenModal] = React.useState<boolean>(false)
  const [editable, setEditable] = React.useState<boolean>(false)

  const handleEditableState = () => setEditable(prevState => !prevState)

  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-6">
      <Text h1 b font="24px">
        NextJS Crud Application
      </Text>
      <Show
        when={!isLoading}
        fallback={
          <Text h1 b font="24px">
            Loading...
          </Text>
        }
      >
        <React.Fragment>
          <Column className="space-y-6">
            <Row className="space-x-4">
              <FiltersSection />
              <Row className="space-x-2">
                <Button
                  onClick={() => setOpenModal(true)}
                  iconRight={<UserPlus />}
                  placeholder={''}
                  type="success"
                  auto
                />
                <Button
                  onClick={handleEditableState}
                  placeholder={''}
                  iconRight={!editable ? <Pencil /> : <Eye />}
                  type="default"
                  auto
                />
              </Row>
            </Row>
            <UsersTable users={filteredUsers} editable={editable} />
          </Column>
          <UserFormModal
            visible={openModal}
            onClose={() => setOpenModal(false)}
          />
        </React.Fragment>
      </Show>
    </main>
  )
}
