import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getEntireList } from '@/services/modules/detail'

export const fetchEntireRoomListData = createAsyncThunk(
  'fetchEntireRoomListData',
  async (payload, getState) => {
    // console.log("payload", payload);
    // console.log("getState", getState);
    getState.dispatch(changeIsLoadingAction(true))
    const res = await getEntireList(payload)
    getState.dispatch(changeIsLoadingAction(false))
    // console.log(res)
    const roomList = res.data.list
    const count = res.data.totalCount
    const currentPage = res.data.currentPage
    getState.dispatch(changeCurrentPageAction(currentPage))
    getState.dispatch(changeRoomListAction(roomList))
    getState.dispatch(changeTotalCountAction(count))
  }
)

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    count: 0,
    roomList: [],
    currentPage: 0,
    isLoading: false
  },
  reducers: {
    changeRoomListAction(state, res) {
      // console.log("res", res);
      state.roomList = res.payload
    },
    changeTotalCountAction(state, res) {
      // console.log("res", res);
      state.count = res.payload
    },
    changeCurrentPageAction(state, res) {
      // console.log('res', res)
      state.currentPage = res.payload
    },
    changeIsLoadingAction(state, res) {
      state.isLoading = res.payload
    }
  }
})

export const {
  changeRoomListAction,
  changeTotalCountAction,
  changeCurrentPageAction,
  changeIsLoadingAction
} = detailSlice.actions
export default detailSlice.reducer
