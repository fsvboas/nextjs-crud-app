import api from '../libs/axios/api'

type GetUsersResponseType = {
  id: string
  name: string
}[]

async function getUsers() {
  try {
    const { data } = await api.get<GetUsersResponseType>('/users')
    return data
  } catch (error) {
    throw error
  }
}

export default getUsers
