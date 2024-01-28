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
      <Table.Column prop="name" label="Nome" />
      <Table.Column prop="birthdate" label="Data de nascimento" />
      <Table.Column prop="phone" label="Telefone" />
      <Table.Column prop="city" label="Cidade" />
      <Table.Column prop="state" label="Estado" />
    </Table>
  )
}

export default UsersTable
