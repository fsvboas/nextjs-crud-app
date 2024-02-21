import { Modal, Text } from '@geist-ui/core'
import Column from './core/column'
import Row from './core/row'
import TextInput from './core/text-input'

interface CreateUserModalProps {
  visible: boolean
  onClose: () => void
}

const CreateUserModal = ({ visible, onClose }: CreateUserModalProps) => {
  // const [user, setUser] = React.useState<UserType | undefined>(undefined)

  const handleSubmitForm = () => {
    // Submit Data
    onClose()
  }

  return (
    <Modal visible={visible} onClose={onClose}>
      <Modal.Title>Create a new user</Modal.Title>
      <Modal.Content>
        <form>
          <Column className="space-y-2 items-center w-full">
            <TextInput crossOrigin placeholder="Name" width={23} />
            <Row className="space-x-2">
              <TextInput crossOrigin placeholder="Date of birth" />
              <TextInput crossOrigin placeholder="Phone" />
            </Row>
            <Row className="space-x-2">
              <TextInput crossOrigin placeholder="City" width={18} />
              <TextInput crossOrigin placeholder="State" />
            </Row>
          </Column>
        </form>
      </Modal.Content>
      <Modal.Action placeholder={''} passive onClick={onClose}>
        <Text p font="14px">
          Cancel
        </Text>
      </Modal.Action>
      <Modal.Action placeholder={''} onClick={handleSubmitForm}>
        <Text p font="14px">
          Create
        </Text>
      </Modal.Action>
    </Modal>
  )
}

export default CreateUserModal
