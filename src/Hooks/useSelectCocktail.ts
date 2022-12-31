import { ICocktailForm } from "Models/Cocktails/form-types";
import { filter } from "lodash";
import { ICocktailsList } from "Models/Cocktails/cocktails-types";

export const useSelectCocktail = (data: ICocktailsList["drinks"]) => {
  const selectCocktail = (props: ICocktailForm) => {
    return filter(data, function (item) {
      return (
        item.strCategory.toLowerCase().includes(props.category.toLowerCase()) &&
        item.strAlcoholic.toLowerCase().includes(props.type.toLowerCase()) &&
        item.strGlass.toLowerCase().includes(props.glass.toLowerCase()) &&
        props.ingredients.some(
          (ingredient: string) =>
            item.strIngredient1
              ?.toLowerCase()
              .includes(ingredient.toLowerCase()) ||
            item.strIngredient2
              ?.toLowerCase()
              .includes(ingredient.toLowerCase()) ||
            item.strIngredient3
              ?.toLowerCase()
              .includes(ingredient.toLowerCase()) ||
            item.strIngredient4
              ?.toLowerCase()
              .includes(ingredient.toLowerCase()) ||
            item.strIngredient5
              ?.toLowerCase()
              .includes(ingredient.toLowerCase()) ||
            item.strIngredient6
              ?.toLowerCase()
              .includes(ingredient.toLowerCase()) ||
            item.strIngredient7
              ?.toLowerCase()
              .includes(ingredient.toLowerCase()) ||
            item.strIngredient8
              ?.toLowerCase()
              .includes(ingredient.toLowerCase()) ||
            item.strIngredient9
              ?.toLowerCase()
              .includes(ingredient.toLowerCase()) ||
            item.strIngredient10
              ?.toLowerCase()
              ?.includes(ingredient.toLowerCase()) ||
            item.strIngredient11
              ?.toLowerCase()
              ?.includes(ingredient.toLowerCase()) ||
            item.strIngredient12
              ?.toLowerCase()
              ?.includes(ingredient.toLowerCase()) ||
            item.strIngredient13
              ?.toLowerCase()
              ?.includes(ingredient.toLowerCase()) ||
            item.strIngredient14
              ?.toLowerCase()
              ?.includes(ingredient.toLowerCase()) ||
            item.strIngredient15
              ?.toLowerCase()
              .includes(ingredient.toLowerCase())
        )
      );
    });
  };

  return { selectCocktail };
};
