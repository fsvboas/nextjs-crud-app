import { Modal, Text } from '@geist-ui/core'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'
import { queryClient } from '../libs/tanstack-query'
import createUser from '../services/create-user'
import updateUser from '../services/update-user'
import { UserType } from '../types/user-type'
import { states } from '../utils/states'
import Column from './core/column'
import MaskInput from './core/mask-input'
import Row from './core/row'
import SelectInput from './core/select-input'
import Show from './core/show'
import TextInput from './core/text-input'

interface UserFormModalProps {
  visible: boolean
  onClose: () => void
  userToEdit?: UserType
}

const createUserSchema = z.object({
  name: z.string().min(1),
  birthdate: z.string().min(10).max(10),
  phone: z.string(),
  city: z.string().min(1),
  state: z.string(),
})

const UserFormModal = ({
  visible,
  onClose,
  userToEdit,
}: UserFormModalProps) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserType>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: userToEdit?.name || '',
      birthdate: userToEdit?.birthdate || '',
      phone: userToEdit?.phone || '',
      city: userToEdit?.city || '',
      state: userToEdit?.state || '',
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
  const { mutate: update, isPending: pendingUpdateUser } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      toast.success('User updated successfully!')
      queryClient?.invalidateQueries({ queryKey: ['users'] })
      onClose()
    },
    onError: () => {
      toast.error('Oops! Error updating user.')
    },
  })

  const handleCreateUser = (user: UserType) => {
    create({ user })
  }

  const handleUpdateUser = (user: UserType) => {
    if (!userToEdit) return

    const payload = {
      id: userToEdit.id,
      name: user.name,
      birthdate: user.birthdate,
      phone: user.phone,
      city: user.city,
      state: user.state,
    }

    update({ user: payload })
  }

  const handleSubmitForm = Boolean(userToEdit)
    ? handleSubmit(handleUpdateUser)
    : handleSubmit(handleCreateUser)

  const isEdit = Boolean(userToEdit)

  const username = userToEdit?.name

  const stateOptions = states?.map(state => ({
    value: state,
    label: state,
  }))

  React.useEffect(() => {
    if (userToEdit) {
      setValue('name', userToEdit.name || '')
      setValue('birthdate', userToEdit.birthdate || '')
      setValue('phone', userToEdit.phone || '')
      setValue('city', userToEdit.city || '')
      setValue('state', userToEdit.state || '')
    }
  }, [userToEdit, setValue])

  return (
    <Modal visible={visible} onClose={onClose}>
      <form id="user-form" onSubmit={handleSubmitForm}>
        <Show
          when={isEdit}
          fallback={<Modal.Title>Create a new user</Modal.Title>}
        >
          <Column>
            <Modal.Title>Update user</Modal.Title>
            <Modal.Subtitle>{username}</Modal.Subtitle>
          </Column>
        </Show>
        <Modal.Content>
          <Column className="w-full space-y-2">
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Name"
                  placeholder="Felippe Vilas Boas"
                  className="w-full"
                  value={value}
                  onChange={onChange}
                  error={errors.name && 'Please enter a name'}
                />
              )}
            />

            <Row className="space-x-2">
              <Controller
                control={control}
                name="birthdate"
                render={({ field: { onChange, value } }) => (
                  <MaskInput
                    label="Birthdate"
                    mask="9999/99/99"
                    placeholder="YYYY/MM/DD"
                    value={value}
                    onChange={onChange}
                    error={errors.birthdate && 'Please enter a valid birthdate'}
                  />
                )}
              />

              <Controller
                control={control}
                name="phone"
                render={({ field: { onChange, value } }) => (
                  <MaskInput
                    label="Phone"
                    mask="(99) 99999-9999"
                    placeholder="(99) 99999-9999"
                    value={value}
                    onChange={onChange}
                    error={errors.phone && 'Please enter a valid phone'}
                  />
                )}
              />
            </Row>
            <Row className="space-x-2">
              <Controller
                control={control}
                name="city"
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    label="City"
                    placeholder="São Paulo"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="state"
                render={({ field: { onChange, value } }) => (
                  <SelectInput
                    label="State"
                    placeholder="SP"
                    value={value}
                    onChange={onChange}
                    options={stateOptions}
                  />
                )}
              />
            </Row>
          </Column>
        </Modal.Content>
        <Row>
          <Modal.Action placeholder={''} passive onClick={onClose}>
            <Text p font="14px">
              Cancel
            </Text>
          </Modal.Action>
          <Modal.Action
            placeholder={''}
            form="user-form"
            htmlType="submit"
            loading={pendingCreateUser || pendingUpdateUser}
          >
            <Show
              when={isEdit}
              fallback={
                <Text p font="14px" className="!text-green-500 font-bold">
                  Create
                </Text>
              }
            >
              <Text p font="14px" className="!text-orange-500 font-bold">
                Update
              </Text>
            </Show>
          </Modal.Action>
        </Row>
      </form>
    </Modal>
  )
}

export default UserFormModal
