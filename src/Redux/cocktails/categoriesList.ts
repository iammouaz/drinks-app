import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAllcategories } from "Api/cocktails/getAllcategories";
import { ICategoriesList } from "Models/Cocktails/categories-types";

export const fetchCategoriesList = createAsyncThunk("categories", async () => {
  const { get_categories } = GetAllcategories();

  const response = await get_categories();

  return response.data.drinks;
});

interface CategoriesState extends ICategoriesList {
    loading: string;
  }
  
  const initialState: CategoriesState = {
    drinks: [],
    loading: "idle",
  };

const categoriesSlices = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesList.pending, (state) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(fetchCategoriesList.rejected, (state) => {
        state.loading = "reject";
      })
      .addCase(fetchCategoriesList.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.loading = "success";
      });
  },
});

export default categoriesSlices.reducer;
