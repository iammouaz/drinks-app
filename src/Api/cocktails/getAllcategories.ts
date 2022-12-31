import { AxiosInstance } from 'Api/axiosInstance'
import { ICategoriesList } from 'Models/Cocktails/categories-types'

export const GetAllcategories = () => {
  const { axiosClient } = AxiosInstance()

  return {
    get_categories: async () =>
      axiosClient.get<ICategoriesList>(`list.php?c=list`),
  }
}
