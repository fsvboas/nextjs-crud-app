import { api } from '../libs/axios'
import { UserType } from '../types/user-type'

interface UpdateUserProps {
  user: UserType
}

async function updateUser({ user }: UpdateUserProps) {
  try {
    const { data } = await api.patch(`/users/${user.id}`, user)
    return data
  } catch (error) {
    throw error
  }
}

export default updateUser
