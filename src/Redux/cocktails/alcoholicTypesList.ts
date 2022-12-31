import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAllTypes } from "Api/cocktails/getAllTypes";
import { ITypesList } from "Models/Cocktails/alcoholic-types";

export const fetchAlcoholicTypesList = createAsyncThunk("alcoholicTypes", async () => {
  const { get_types } = GetAllTypes();

  const response = await get_types();

  return response.data.drinks;
});

interface TypesState extends ITypesList {
    loading: string | boolean;
  }
  
  const initialState: TypesState = {
    drinks: [],
    loading: "idle",
  };

const alcoholicTypesSlices = createSlice({
  name: "alcoholicTypes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlcoholicTypesList.pending, (state) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(fetchAlcoholicTypesList.rejected, (state) => {
        state.loading = "reject";
      })
      .addCase(fetchAlcoholicTypesList.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.loading = "success";
      });
  },
});

export default alcoholicTypesSlices.reducer;
