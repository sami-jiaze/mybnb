import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    headConfig: {
      isFixed: false
    }
  },
  reducers: {
    changeHeadConfigAction(state, { payload }) {
      state.headConfig = payload
    }
  }
})

export const { changeHeadConfigAction } = mainSlice.actions
export default mainSlice.reducer