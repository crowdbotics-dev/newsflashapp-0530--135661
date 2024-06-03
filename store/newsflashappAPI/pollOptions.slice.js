import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_polloption_list = createAsyncThunk(
  "pollOptions/api_v1_polloption_list",
  async payload => {
    const response = await apiService.api_v1_polloption_list(payload)
    return response.data
  }
)
export const api_v1_polloption_create = createAsyncThunk(
  "pollOptions/api_v1_polloption_create",
  async payload => {
    const response = await apiService.api_v1_polloption_create(payload)
    return response.data
  }
)
export const api_v1_polloption_retrieve = createAsyncThunk(
  "pollOptions/api_v1_polloption_retrieve",
  async payload => {
    const response = await apiService.api_v1_polloption_retrieve(payload)
    return response.data
  }
)
export const api_v1_polloption_update = createAsyncThunk(
  "pollOptions/api_v1_polloption_update",
  async payload => {
    const response = await apiService.api_v1_polloption_update(payload)
    return response.data
  }
)
export const api_v1_polloption_partial_update = createAsyncThunk(
  "pollOptions/api_v1_polloption_partial_update",
  async payload => {
    const response = await apiService.api_v1_polloption_partial_update(payload)
    return response.data
  }
)
export const api_v1_polloption_destroy = createAsyncThunk(
  "pollOptions/api_v1_polloption_destroy",
  async payload => {
    const response = await apiService.api_v1_polloption_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const pollOptionsSlice = createSlice({
  name: "pollOptions",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_polloption_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_polloption_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_polloption_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_polloption_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_polloption_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_polloption_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_polloption_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_polloption_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_polloption_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_polloption_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_polloption_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_polloption_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_polloption_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_polloption_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_polloption_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_polloption_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_polloption_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_polloption_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_polloption_list,
  api_v1_polloption_create,
  api_v1_polloption_retrieve,
  api_v1_polloption_update,
  api_v1_polloption_partial_update,
  api_v1_polloption_destroy,
  slice: pollOptionsSlice
}
