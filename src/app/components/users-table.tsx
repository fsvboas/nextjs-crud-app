import { Button, Table, Text } from '@geist-ui/core'
import { TableColumnRender } from '@geist-ui/core/esm/table'
import { Pencil, Trash2 } from 'lucide-react'
import React from 'react'
import PhoneFormatter from '../helpers/phone-formatter'
import { UserType } from '../types/user-type'
import Row from './core/row'
import Show from './core/show'
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

  const renderActionsButtons: TableColumnRender<any> = (
    value,
    rowData,
    index,
  ) => {
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

  const renderPhoneHandler: TableColumnRender<UserType> = (
    value,
    rowData,
    index,
  ) => {
    return <PhoneFormatter>{rowData.phone}</PhoneFormatter>
  }

  return (
    <Table data={users} className="relative">
      <Show
        when={Boolean(users.length)}
        fallback={
          <Row className="absolute w-full justify-center py-10">
            <Text h3 className="!text-black-300">
              Não há dados.
            </Text>
          </Row>
        }
      >
        <Table.Column prop="name" label="Name" width={250} />
        <Table.Column prop="birthdate" label="Date of birth" />
        <Table.Column prop="phone" label="Phone" render={renderPhoneHandler} />
        <Table.Column prop="city" label="City" />
        <Table.Column prop="state" label="State" />
        <Table.Column
          prop="actions"
          label="Actions"
          render={renderActionsButtons}
        />
      </Show>
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
