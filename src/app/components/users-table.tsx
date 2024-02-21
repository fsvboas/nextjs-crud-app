import { Table } from '@geist-ui/core'

type UserType = {
  id: string
  name: string
}

interface UsersTableProps {
  users: UserType[]
}

const UsersTable = ({ users }: UsersTableProps) => {
  return (
    <Table data={users}>
      <Table.Column prop="name" label="Name" />
      <Table.Column prop="birthdate" label="Date of birth" />
      <Table.Column prop="phone" label="Phone" />
      <Table.Column prop="city" label="City" />
      <Table.Column prop="state" label="State" />
    </Table>
  )
}

export default UsersTable
