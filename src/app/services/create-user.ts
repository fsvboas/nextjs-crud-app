import { api } from '../libs/axios'
import { UserType } from '../types/user-type'

interface CreateUserProps {
  user: UserType
}

async function createUser({ user }: CreateUserProps) {
  try {
    const { data } = await api.post('/users', user)
    return data
  } catch (error) {
    throw error
  }
}

export default createUser
