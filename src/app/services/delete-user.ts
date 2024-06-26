import { api } from '../libs/axios'

interface DeleteUserProps {
  userId: string
}

export async function deleteUser({ userId }: DeleteUserProps) {
  try {
    const { data } = await api.delete(`/users/${userId}`)
    return data
  } catch (error) {
    throw error
  }
}
