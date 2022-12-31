import { AxiosInstance } from 'Api/axiosInstance'
import { ICocktailsList } from 'Models/Cocktails/cocktails-types'

export const GetAllCocktails = () => {
  const { axiosClient } = AxiosInstance()

  return {
    get_cocktails: async () =>
      axiosClient.get<ICocktailsList>(`search.php?s`),
  }
}
