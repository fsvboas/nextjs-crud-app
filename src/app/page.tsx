'use client'

import { Text } from '@geist-ui/core'
import { useQuery } from '@tanstack/react-query'
import { Eye, Pencil, UserPlus } from 'lucide-react'
import React from 'react'
import Button from './components/core/button'
import Column from './components/core/column'
import Row from './components/core/row'
import CreateUserModal from './components/create-user-modal'
import FiltersSection from './components/filters-section'
import UsersTable from './components/users-table'
import getUsers from './services/get-users'

export default function Home() {
  const { data, isLoading } = useQuery({
    queryFn: () => getUsers(),
    queryKey: ['users'],
  })

  const users = data || []

  const [openModal, setOpenModal] = React.useState<boolean>(false)
  const [editable, setEditable] = React.useState<boolean>(false)

  const handleModalState = () => setOpenModal(prevState => !prevState)
  const handleEditableState = () => setEditable(prevState => !prevState)

  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-6">
      <Text h1 b font="24px">
        NextJS Crud Application
      </Text>
      {/* TO-DO: Replace this text by a skeleton */}
      {isLoading ? (
        <Text h1 b font="24px">
          Loading...
        </Text>
      ) : (
        <React.Fragment>
          <Column className="space-y-6">
            <Row className="space-x-4">
              <FiltersSection />
              <Row className="space-x-2">
                <Button
                  onClick={handleModalState}
                  iconRight={<UserPlus />}
                  type="success"
                  auto
                />
                <Button
                  onClick={handleEditableState}
                  iconRight={!editable ? <Pencil /> : <Eye />}
                  type="default"
                  auto
                />
              </Row>
            </Row>
            <UsersTable users={users} editable={editable} />
          </Column>
          <CreateUserModal visible={openModal} onClose={handleModalState} />
        </React.Fragment>
      )}
    </main>
  )
}
