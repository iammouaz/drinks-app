import { Button, Input, Select } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { ICocktailForm, ISteps } from "Models/Cocktails/form-types";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CocktailFormSchema } from "Schemas/DrinksFormSchema";
import { motion } from "framer-motion";
import { ErrorMessage } from "@hookform/error-message";
import { useTranslation } from "react-i18next";
import { fetchCategoriesList } from "Redux/cocktails/categoriesList";
import { useAppDispatch, useAppSelector } from "Hooks/useReduxHooks";
import { fetchAlcoholicTypesList } from "Redux/cocktails/alcoholicTypesList";
import { fetchGlassesList } from "Redux/cocktails/glassesList";
import { fetchIngredientsList } from "Redux/cocktails/IngredientsList";
import Loader from "Components/Animations/Loader";

interface CocktailFormProps {
  setsteps: Dispatch<SetStateAction<ISteps>>;
  steps: ISteps;
}

const CocktailForm: React.FunctionComponent<CocktailFormProps> = ({
  setsteps,
  steps,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(CocktailFormSchema),
  });

  const onSubmit = (data: ICocktailForm) => {
    setsteps({ ...steps, step: 3 });

    //Set Time Out to show loading
    setTimeout(() => {
      setsteps({ step: 3, form: { ...steps.form, ...data } });
    }, 2000);
  };
  const { t } = useTranslation("translation");
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCategoriesList());
    dispatch(fetchAlcoholicTypesList());
    dispatch(fetchGlassesList());
    dispatch(fetchIngredientsList());
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {data.categories.loading !== "success" ||
      data.alcoholicTypes.loading !== "success" ||
      data.glasses.loading !== "success" ||
      data.ingredients.loading !== "success" ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-8 my-4 container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col gap-3">
              <Select
                {...register("category")}
                name="category"
                _focus={{ bgColor: "white" }}
                variant="filled"
                placeholder={`${t("category")}`}
              >
                {data?.categories.drinks.map((category, index) => (
                  <option
                    key={`category ${index}`}
                    value={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </Select>

              <span className="text-red-600">
                <motion.div
                  animate={{ x: [null, -15, 15, 0] }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                  <ErrorMessage errors={errors} name="category" />
                </motion.div>
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <Select
                {...register("type")}
                name="type"
                _focus={{ bgColor: "white" }}
                variant="filled"
                placeholder={`${t("type")}`}
              >
                {data?.alcoholicTypes.drinks.map((type, index) => (
                  <option
                    key={`type ${index}`}
                    value={type.strAlcoholic}
                  >
                    {type.strAlcoholic}
                  </option>
                ))}
              </Select>
              <span className="text-red-600">
                <motion.div
                  animate={{ x: [null, -15, 15, 0] }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                  <ErrorMessage errors={errors} name="type" />
                </motion.div>
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <Select
                {...register("glass")}
                name="glass"
                _focus={{ bgColor: "white" }}
                variant="filled"
                placeholder={`${t("glass")}`}
              >
                {data?.glasses.drinks.map((glass, index) => (
                  <option
                    key={`glass ${index}`}
                    value={glass.strGlass}
                  >
                    {glass.strGlass}
                  </option>
                ))}
              </Select>
              <span className="text-red-600">
                <motion.div
                  animate={{ x: [null, -15, 15, 0] }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                  <ErrorMessage errors={errors} name="glass" />
                </motion.div>
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <Select
                {...register("ingredients")}
                name="ingredients"
                _focus={{ bgColor: "white" }}
                variant="filled"
                placeholder={`${t("ingredients")}`}
              >
                {data?.ingredients.drinks.map((ingredient, index) => (
                  <option
                    key={`ingerdient ${index} `}
                    value={ingredient.strIngredient1}
                  >
                    {ingredient.strIngredient1}
                  </option>
                ))}
              </Select>
              <span className="text-red-600">
                <motion.div
                  animate={{ x: [null, -15, 15, 0] }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                  <ErrorMessage errors={errors} name="ingredients" />
                </motion.div>
              </span>
            </div>
          </div>
        </div>
      )}

      <Button float="right" type="submit">
        {t("next")}
      </Button>
    </form>
  );
};

export default CocktailForm;
