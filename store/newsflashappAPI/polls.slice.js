import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_poll_list = createAsyncThunk(
  "polls/api_v1_poll_list",
  async payload => {
    const response = await apiService.api_v1_poll_list(payload)
    return response.data
  }
)
export const api_v1_poll_create = createAsyncThunk(
  "polls/api_v1_poll_create",
  async payload => {
    const response = await apiService.api_v1_poll_create(payload)
    return response.data
  }
)
export const api_v1_poll_retrieve = createAsyncThunk(
  "polls/api_v1_poll_retrieve",
  async payload => {
    const response = await apiService.api_v1_poll_retrieve(payload)
    return response.data
  }
)
export const api_v1_poll_update = createAsyncThunk(
  "polls/api_v1_poll_update",
  async payload => {
    const response = await apiService.api_v1_poll_update(payload)
    return response.data
  }
)
export const api_v1_poll_partial_update = createAsyncThunk(
  "polls/api_v1_poll_partial_update",
  async payload => {
    const response = await apiService.api_v1_poll_partial_update(payload)
    return response.data
  }
)
export const api_v1_poll_destroy = createAsyncThunk(
  "polls/api_v1_poll_destroy",
  async payload => {
    const response = await apiService.api_v1_poll_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const pollsSlice = createSlice({
  name: "polls",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_poll_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_poll_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_poll_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_poll_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_poll_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_poll_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_poll_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_poll_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_poll_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_poll_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_poll_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_poll_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_poll_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_poll_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_poll_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_poll_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_poll_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_poll_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_poll_list,
  api_v1_poll_create,
  api_v1_poll_retrieve,
  api_v1_poll_update,
  api_v1_poll_partial_update,
  api_v1_poll_destroy,
  slice: pollsSlice
}
