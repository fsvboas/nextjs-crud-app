import { Modal, Text } from '@geist-ui/core'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { queryClient } from '../libs/tanstack-query'
import deleteUser from '../services/delete-user'
import { UserType } from '../types/user-type'

interface DeleteConfirmationModalProps {
  user: UserType
  visible: boolean
  onClose: () => void
}

const DeleteConfirmationModal = ({
  user,
  visible,
  onClose,
}: DeleteConfirmationModalProps) => {
  const { mutate: del, isPending: pendingCreateUser } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      toast.success('User deleted successfully!')
      queryClient?.invalidateQueries({ queryKey: ['users'] })
      onClose()
    },
    onError: () => {
      toast.error('Oops! Error deleting user.')
    },
  })

  const handleDeleteUser = (user: UserType) => {
    del({ userId: user?.id })
  }

  const username = user?.name

  return (
    <Modal visible={visible} onClose={onClose}>
      <Modal.Title>Delete user</Modal.Title>
      <Modal.Subtitle>{username}</Modal.Subtitle>
      <Modal.Content>
        <Text p font="14px">
          Are you sure you want to delete this user permanently?
        </Text>
      </Modal.Content>
      <Modal.Action placeholder={''} passive onClick={onClose}>
        <Text p font="14px">
          Cancel
        </Text>
      </Modal.Action>
      <Modal.Action
        placeholder={''}
        loading={pendingCreateUser}
        onClick={() => handleDeleteUser(user)}
      >
        <Text p font="14px" className="!text-red-500 font-bold">
          Delete
        </Text>
      </Modal.Action>
    </Modal>
  )
}

export default DeleteConfirmationModal
