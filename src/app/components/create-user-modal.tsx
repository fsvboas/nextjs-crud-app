import { Modal, Text } from '@geist-ui/core'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { queryClient } from '../libs/tanstack-query'
import createUser from '../services/create-user'
import { UserType } from '../types/user-type'
import Column from './core/column'
import Row from './core/row'
import TextInput from './core/text-input'

interface CreateUserModalProps {
  visible: boolean
  onClose: () => void
}

const CreateUserModal = ({ visible, onClose }: CreateUserModalProps) => {
  const { register, handleSubmit } = useForm<UserType>({
    defaultValues: {
      name: '',
      birthdate: '',
      phone: '',
      city: '',
      state: '',
    },
  })

  const { mutate: create, isPending: pendingCreateUser } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toast.success('User created successfully!')
      queryClient?.invalidateQueries({ queryKey: ['users'] })

      onClose()
    },
    onError: () => {
      toast.error('Oops! Error creating user.')
    },
  })

  const handleCreateUser = (user: UserType) => {
    create({ user })
  }

  return (
    <form id="create-user-form" onSubmit={handleSubmit(handleCreateUser)}>
      <Modal visible={visible} onClose={onClose}>
        <Modal.Title>Create a new user</Modal.Title>
        <Modal.Content>
          <Column className="w-full space-y-2">
            <TextInput
              placeholder="Name"
              className="w-full"
              {...register('name')}
            />
            <Row className="space-x-2">
              <TextInput
                placeholder="Date of birth"
                {...register('birthdate')}
              />
              <TextInput placeholder="Phone" {...register('phone')} />
            </Row>
            <Row className="space-x-2">
              <TextInput placeholder="City" {...register('city')} />
              <TextInput
                placeholder="State"
                className="w-full max-w-[80px]"
                {...register('state')}
              />
            </Row>
          </Column>
        </Modal.Content>
        <Modal.Action placeholder={''} passive onClick={onClose}>
          <Text p font="14px">
            Cancel
          </Text>
        </Modal.Action>
        <Modal.Action
          placeholder={''}
          form="create-user-form"
          htmlType="submit"
          loading={pendingCreateUser}
        >
          <Text p font="14px">
            Create
          </Text>
        </Modal.Action>
      </Modal>
    </form>
  )
}

export default CreateUserModal
