import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPeople, getPersonById } from '../api/swapiApi';

export const fetchPeople = createAsyncThunk(
  'people/fetchPeople',
  async () => {
    const data = await getPeople();
    return data;
  }
);

export const fetchPersonDetails = createAsyncThunk(
  'people/fetchPersonDetails',
  async (id) => {
    const data = await getPersonById(id);
    return data;
  }
);

const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    list: [],
    selectedPerson: null,
    loading: false,
    detailsLoading: false,
    error: null
  },
  reducers: {
    clearSelectedPerson: (state) => {
      state.selectedPerson = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPersonDetails.pending, (state) => {
        state.detailsLoading = true;
        state.error = null;
      })
      .addCase(fetchPersonDetails.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.selectedPerson = action.payload;
      })
      .addCase(fetchPersonDetails.rejected, (state, action) => {
        state.detailsLoading = false;
        state.error = action.error.message;
      });
  }
});

export const { clearSelectedPerson } = peopleSlice.actions;
export default peopleSlice.reducer;