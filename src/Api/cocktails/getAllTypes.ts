import { AxiosInstance } from 'Api/axiosInstance'
import { ITypesList } from 'Models/Cocktails/alcoholic-types'

export const GetAllTypes = () => {
  const { axiosClient } = AxiosInstance()

  return {
    get_types: async () =>
      axiosClient.get<ITypesList>(`list.php?a=list`),
  }
}
