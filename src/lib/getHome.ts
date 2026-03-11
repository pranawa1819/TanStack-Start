import { axiosInstance } from './axiosInstance'
import { endpoint } from './endPoints'

export const getHome = async (userId:number) => {
  const res = await axiosInstance.get(endpoint.home,{params:{userId: userId}})
  return res.data
}
