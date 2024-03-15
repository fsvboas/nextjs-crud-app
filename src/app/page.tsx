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

export default function Home() {
  const [searchByName, setSearchByName] = React.useState('')
  const [searchByDateOfBirth, setSearchByDateOfBirth] = React.useState('')
  const [searchByPhone, setSearchByPhone] = React.useState('')
  const [searchByCity, setSearchByCity] = React.useState('')
  const [searchByState, setSearchByState] = React.useState('')

  const { data, isLoading } = useQuery({
    queryFn: () => getUsers(),
    queryKey: ['users'],
  })

  const users = data || []

  const filteredUsers = users?.filter(
    user =>
      user?.name?.toLowerCase()?.includes(searchByName?.toLowerCase()) &&
      user?.birthdate
        ?.toLowerCase()
        ?.includes(searchByDateOfBirth?.toLowerCase()) &&
      user?.phone?.toLowerCase()?.includes(searchByPhone?.toLowerCase()) &&
      user?.city?.toLowerCase()?.includes(searchByCity?.toLowerCase()) &&
      user?.state?.toLowerCase()?.includes(searchByState?.toLowerCase()),
  )

  const setFilters = {
    setSearchByName,
    setSearchByDateOfBirth,
    setSearchByPhone,
    setSearchByCity,
    setSearchByState,
  }

  const [openModal, setOpenModal] = React.useState<boolean>(false)
  const [editable, setEditable] = React.useState<boolean>(false)

  const handleEditableState = () => setEditable(prevState => !prevState)

  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-6">
      <Text h1 b font="24px">
        NextJS Crud Application
      </Text>
      {/* TO-DO: Replace this text by a skeleton */}
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
              <FiltersSection setFilters={setFilters} />
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
