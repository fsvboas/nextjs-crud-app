import { Modal, Text } from '@geist-ui/core'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'
import { queryClient } from '../libs/tanstack-query'
import createUser from '../services/create-user'
import { UserType } from '../types/user-type'
import Column from './core/column'
import MaskInput from './core/mask-input'
import Row from './core/row'
import TextInput from './core/text-input'

interface CreateUserModalProps {
  visible: boolean
  onClose: () => void
}

const createUserSchema = z.object({
  name: z.string().min(1),
  birthdate: z.string().min(10).max(10),
  phone: z.string(),
  city: z.string().min(1),
  state: z.string(),
})

const CreateUserModal = ({ visible, onClose }: CreateUserModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserType>({
    resolver: zodResolver(createUserSchema),
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

  React.useEffect(() => {
    reset()
  }, [visible])

  return (
    <form id="create-user-form" onSubmit={handleSubmit(handleCreateUser)}>
      <Modal visible={visible} onClose={onClose}>
        <Modal.Title>Create a new user</Modal.Title>
        <Modal.Content>
          <Column className="w-full space-y-2">
            <TextInput
              label="Name"
              placeholder="Felippe Vilas Boas"
              className="w-full"
              {...register('name')}
              error={errors.name && 'Please enter a name'}
            />
            <Row className="space-x-2">
              <MaskInput
                label="Birthdate"
                mask="9999/99/99"
                placeholder="YYYY-MM-DD"
                {...register('birthdate')}
                error={errors.birthdate && 'Please enter a valid birthdate'}
              />
              <MaskInput
                label="Phone"
                mask="(99) 99999-9999"
                placeholder="(99) 99999-9999"
                {...register('phone')}
                error={errors.phone && 'Please enter a valid phone'}
              />
            </Row>
            <Row className="space-x-2">
              <TextInput
                label="City"
                placeholder="São Paulo"
                {...register('city')}
              />
              <TextInput
                label="State"
                placeholder="SP"
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
