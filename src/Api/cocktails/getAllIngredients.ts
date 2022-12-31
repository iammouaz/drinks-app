import { AxiosInstance } from 'Api/axiosInstance'
import { IIngredientsList } from 'Models/Cocktails/ingredients-types'

export const GetAllIngredients = () => {
  const { axiosClient } = AxiosInstance()

  return {
    get_ingredients: async () =>
      axiosClient.get<IIngredientsList>(`list.php?i=list`),
  }
}
