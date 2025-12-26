import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

/*
{
  id: string,
  title: string,
  description: string,
  priority: string,
  status: string,
  assignee: string,
  projectId: string,
}
*/

const TASKS_URL = 'http://localhost:3000/tasks';

export const getTasksAsync = createAsyncThunk('tasks/getList', async (projectId = '') => {
  const url = projectId ? `${TASKS_URL}/${projectId}` : TASKS_URL;
  const result = await axios.get(url);
  return result.data;
});

export const saveTaskAsync = createAsyncThunk('tasks/save', async (task) => {
  if (task.id) {
    // Update existing task
    const result = await axios.put(`${TASKS_URL}/${task.id}`, task);
    return result.data;
  } else {
    // Create new task
    const result = await axios.post(TASKS_URL, task);
    return result.data;
  }
});

export const deleteTaskAsync = createAsyncThunk('tasks/delete', async (taskId) => {
  await axios.delete(`${TASKS_URL}/${taskId}`);
  return taskId;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(getTasksAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTasksAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getTasksAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(saveTaskAsync.fulfilled, (state, action) => {
        const index = state.data.findIndex(t => t.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        } else {
          state.data.push(action.payload);
        }
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.data = state.data.filter(t => t.id !== action.payload);
      });
  }
})

export default tasksSlice.reducer