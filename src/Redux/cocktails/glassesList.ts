import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAllGlasses } from "Api/cocktails/getAllGlasses";
import { IGlassesList } from "Models/Cocktails/glasses-types";

export const fetchGlassesList = createAsyncThunk("glasses", async () => {
  const { get_glasses } = GetAllGlasses();

  const response = await get_glasses();

  return response.data.drinks;
});

interface GlassesState extends IGlassesList {
  loading: string;
}

const initialState: GlassesState = {
  drinks: [],
  loading: "idle",
};

const glassesSlices = createSlice({
  name: "glasses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGlassesList.pending, (state) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(fetchGlassesList.rejected, (state) => {
        state.loading = "reject";
      })
      .addCase(fetchGlassesList.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.loading = "success";
      });
  },
});

export default glassesSlices.reducer;
