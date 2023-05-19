import { createSlice } from "@reduxjs/toolkit";

const overviewSlice = createSlice({
  name: 'overview',
  initialState: {
    NavRoomItem: {}
  },
  reducers: {
    changeNavRoomItemData(state, {payload}){
      state.NavRoomItem = payload
    }
  }
})

export const { changeNavRoomItemData } = overviewSlice.actions
export default overviewSlice.reducer