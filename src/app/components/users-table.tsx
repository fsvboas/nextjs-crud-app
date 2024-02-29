import { Button, Table } from '@geist-ui/core'
import { Pencil, Trash2 } from 'lucide-react'
import Row from './core/row'

type UserType = {
  id: string
  name: string
}

interface UsersTableProps {
  users: UserType[]
  editable?: boolean
}

const UsersTable = ({ users, editable }: UsersTableProps) => {
  const renderSettingsButtons = () => {
    return (
      <Row className="space-x-2">
        <Button
          onClick={() => null}
          disabled={editable === false}
          iconRight={<Pencil />}
          type="default"
          auto
        />
        <Button
          onClick={() => null}
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
        render={renderSettingsButtons}
      />
    </Table>
  )
}

export default UsersTable
