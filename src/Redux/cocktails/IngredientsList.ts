import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAllIngredients } from "Api/cocktails/getAllIngredients";
import { IIngredientsList } from "Models/Cocktails/ingredients-types";

export const fetchIngredientsList = createAsyncThunk("ingredients", async () => {
  const { get_ingredients } = GetAllIngredients();

  const response = await get_ingredients();

  return response.data.drinks;
});

interface IngredientsState extends IIngredientsList {
  loading: string;
}

const initialState: IngredientsState = {
  drinks: [],
  loading: "idle",
};

const ingredientsSlices = createSlice({
  name: "ingredients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredientsList.pending, (state) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(fetchIngredientsList.rejected, (state) => {
        state.loading = "reject";
      })
      .addCase(fetchIngredientsList.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.loading = "success";
      });
  },
});

export default ingredientsSlices.reducer;
