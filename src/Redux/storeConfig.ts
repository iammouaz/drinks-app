import { configureStore } from "@reduxjs/toolkit";
import cocktails from "Redux/cocktails/cocktailList";
import categories from "Redux/cocktails/categoriesList";
import ingredients from "Redux/cocktails/IngredientsList";
import glasses from "Redux/cocktails/glassesList";
import alcoholicTypes from "Redux/cocktails/alcoholicTypesList";

export const store = configureStore({
  reducer: {
    cocktails,
    categories,
    ingredients,
    glasses,
    alcoholicTypes,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
