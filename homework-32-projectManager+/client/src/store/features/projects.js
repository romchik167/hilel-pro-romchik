import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

/*
  project: {
    id: string,
    title: string,
    priority: string,
    description: string,
  }

  CRUD
*/

const PROJECTS_URL = 'http://localhost:3000/projects';

export const getProjectsAsync = createAsyncThunk('projects/getList', async () => {
  const result = await axios.get(PROJECTS_URL);
  return result.data;
});

export const saveProjectAsync = createAsyncThunk('projects/save', async (project) => {
  if (project.id) {
    // Update existing project
    const result = await axios.put(`${PROJECTS_URL}/${project.id}`, project);
    return result.data;
  } else {
    // Create new project
    const result = await axios.post(PROJECTS_URL, project);
    return result.data;
  }
});

export const deleteProjectAsync = createAsyncThunk('projects/delete', async (projectId) => {
  await axios.delete(`${PROJECTS_URL}/${projectId}`);
  return projectId;
});

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    // addProject: (state, action) => {
    //   // generate id
    //   // if integer needed:
    //   // const id = Date.now();
    //   const id = uuidv4(); // each time - new unique id

    //   // add to store
    //   const newProject = {
    //     id,
    //     ...action.payload,
    //   };
      
    //   state.data.push(newProject);
    // }
  },
  extraReducers: builder => {
    builder
      .addCase(getProjectsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProjectsAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getProjectsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(saveProjectAsync.fulfilled, (state, action) => {
        const index = state.data.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        } else {
          state.data.push(action.payload);
        }
        state.loading = false;
      })
      .addCase(deleteProjectAsync.fulfilled, (state, action) => {
        state.data = state.data.filter(p => p.id !== action.payload);
      });
  }
});

export default projectsSlice.reducer;