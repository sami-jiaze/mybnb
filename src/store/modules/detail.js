import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getEntireList } from '@/services/modules/detail'

export const fetchEntireRoomListData = createAsyncThunk(
  'fetchEntireRoomListData',
  async (payload, getState) => {
    // console.log("payload", payload);
    // console.log("getState", getState);
    const res = await getEntireList(payload)
    console.log(res);
    const roomList = res.data.list
    const count = res.data.totalCount
    getState.dispatch(changeRoomListAction(roomList))
    getState.dispatch(changeTotalCountAction(count))
  }
)

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    count: 0,
    roomList: []
  },
  reducers: {
    changeRoomListAction(state, res) {
      // console.log("res", res);
      state.roomList = res.payload
    },
    changeTotalCountAction(state, res) {
      // console.log("res", res);
      state.count = res.payload
    }
  }
})

export const { changeRoomListAction, changeTotalCountAction } =
  detailSlice.actions
export default detailSlice.reducer
