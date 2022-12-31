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
        item.strIngredient1?.toLowerCase().includes(props.ingredients.toLowerCase()) ||
        item.strIngredient2?.toLowerCase().includes(props.ingredients.toLowerCase()) ||
        item.strIngredient3?.toLowerCase().includes(props.ingredients.toLowerCase()) ||
        item.strIngredient4?.toLowerCase().includes(props.ingredients.toLowerCase()) ||
        item.strIngredient5?.toLowerCase().includes(props.ingredients.toLowerCase()) ||
        item.strIngredient6?.toLowerCase().includes(props.ingredients.toLowerCase()) ||
        item.strIngredient7?.toLowerCase().includes(props.ingredients.toLowerCase()) ||
        item.strIngredient8?.toLowerCase().includes(props.ingredients.toLowerCase()) ||
        item.strIngredient9?.toLowerCase().includes(props.ingredients.toLowerCase()) ||
        item.strIngredient10
          ?.toLowerCase()
          ?.includes(props.ingredients.toLowerCase()) ||
        item.strIngredient11
          ?.toLowerCase()
          ?.includes(props.ingredients.toLowerCase()) ||
        item.strIngredient12
          ?.toLowerCase()
          ?.includes(props.ingredients.toLowerCase()) ||
        item.strIngredient13
          ?.toLowerCase()
          ?.includes(props.ingredients.toLowerCase()) ||
        item.strIngredient14
          ?.toLowerCase()
          ?.includes(props.ingredients.toLowerCase()) ||
        item.strIngredient15?.toLowerCase().includes(props.ingredients.toLowerCase())
      );
    });
  };

  return { selectCocktail };
};
