import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICocktailsList } from "Models/Cocktails/cocktails-types";
import { GetAllCocktails } from "Api/cocktails/getAllCocktails";

export const fetchCocktailList = createAsyncThunk("cocktails", async () => {
  const { get_cocktails } = GetAllCocktails();

  const response = await get_cocktails();

  return response.data.drinks;
});

interface CocktailsState extends ICocktailsList {
  loading: string;
}

const initialState: CocktailsState = {
  drinks: [],
  loading: "idle",
};

const cocktailsSlices = createSlice({
  name: "cocktails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktailList.pending, (state) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(fetchCocktailList.rejected, (state) => {
        state.loading = "reject";
      })
      .addCase(fetchCocktailList.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.loading = "success";
      });
  },
});

export default cocktailsSlices.reducer;
