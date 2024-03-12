import { Button, Table } from '@geist-ui/core'
import { Pencil, Trash2 } from 'lucide-react'
import React from 'react'
import { UserType } from '../types/user-type'
import Row from './core/row'
import DeleteConfirmationModal from './delete-confirmation-modal'
import UserFormModal from './user-form-modal'

interface UsersTableProps {
  users: UserType[]
  editable?: boolean
}

const UsersTable = ({ users, editable }: UsersTableProps) => {
  const [selectedUser, setSelectedUser] = React.useState<UserType>({
    id: '',
    name: '',
    birthdate: '',
    phone: '',
    city: '',
    state: '',
  })
  const [openUserFormModal, setOpenUserFormModal] =
    React.useState<boolean>(false)
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    React.useState<boolean>(false)

  const renderActionsButtons = (value: any, rowData: any, index: number) => {
    return (
      <Row className="space-x-2">
        <Button
          onClick={() => {
            setSelectedUser(rowData)
            setOpenUserFormModal(true)
          }}
          disabled={editable === false}
          iconRight={<Pencil />}
          type="default"
          auto
        />
        <Button
          onClick={() => {
            setSelectedUser(rowData)
            setOpenDeleteConfirmationModal(true)
          }}
          disabled={editable === false}
          iconRight={<Trash2 />}
          type="error"
          auto
        />
      </Row>
    )
  }

  return (
    <Table data={users}>
      <Table.Column prop="name" label="Name" width={250} />
      <Table.Column prop="birthdate" label="Date of birth" />
      <Table.Column prop="phone" label="Phone" />
      <Table.Column prop="city" label="City" />
      <Table.Column prop="state" label="State" />
      <Table.Column
        prop="actions"
        label="Actions"
        render={renderActionsButtons}
      />
      <DeleteConfirmationModal
        visible={openDeleteConfirmationModal}
        onClose={() => setOpenDeleteConfirmationModal(false)}
        user={selectedUser as UserType}
      />
      <UserFormModal
        visible={openUserFormModal}
        onClose={() => setOpenUserFormModal(false)}
        userToEdit={selectedUser}
      />
    </Table>
  )
}

export default UsersTable
