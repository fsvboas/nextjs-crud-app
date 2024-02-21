import api from '../libs/axios/api'
import { UserType } from '../types/user-type'

type CreateUserResponseType = {
  id: string
  name: string
}[]

interface CreateUserProps {
  user: UserType
}

async function createUser({ user }: CreateUserProps) {
  try {
    const { data } = await api.post<CreateUserResponseType>('/users', user)
    return data
  } catch (error) {
    throw error
  }
}

export default createUser
