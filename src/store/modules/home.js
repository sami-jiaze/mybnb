import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeGoodPriceData } from '../../services'

export const fetchHomeGoodPriceData = createAsyncThunk('fetchHomeData', async() => {
  const res = await getHomeGoodPriceData()
  return res;
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    homeList: [],
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceAction(state, res) {
      console.log("changeGoodPriceAction", res);
      state.goodPriceInfo = res.payload.data
    }
  },
  extraReducers: {
    [fetchHomeGoodPriceData.fulfilled](state, res) {
      console.log("payload", res.payload.data);
      state.goodPriceInfo = res.payload.data
    }
  }
})

export const { changeGoodPriceAction } = homeSlice.actions
export default homeSlice.reducer
