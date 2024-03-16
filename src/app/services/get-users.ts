import { api } from '../libs/axios'
import { UserType } from '../types/user-type'

async function getUsers() {
  try {
    const { data } = await api.get<UserType[]>('/users')
    return data
  } catch (error) {
    throw error
  }
}

export default getUsers
