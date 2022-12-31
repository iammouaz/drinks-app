import { AxiosInstance } from "Api/axiosInstance";
import { IGlassesList } from "Models/Cocktails/glasses-types";

export const GetAllGlasses = () => {
  const { axiosClient } = AxiosInstance();

  return {
    get_glasses: async () => axiosClient.get<IGlassesList>(`list.php?g=list`),
  };
};
