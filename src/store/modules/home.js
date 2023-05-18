import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeLongforData,
  getHomeRecommendData
} from '../../services'

// 高性价比
export const fetchHomeGoodPriceData = createAsyncThunk(
  'fetchHomePriceData',
  async (payload, { dispatch }) => {
    const res = await getHomeGoodPriceData()
    dispatch(changeGoodPriceAction(res));
  }
)
// 想去
export const fetchHomeLongforData = createAsyncThunk(
  'fetchHomeLongforData',
  async (payload, { dispatch }) => {
    const res = await getHomeLongforData()
    dispatch(changeLongforInfo(res))
  }
)
// 高评分
export const fetchHomeHighScoreData = createAsyncThunk(
  'fetchHomeScoreData',
  async (payload, store) => {
    // console.log(payload, store);
    getHomeHighScoreData().then(res=>{
      store.dispatch(changeHighScoreAction(res));
    })
  }
)
// 折扣
export const fetchHomeDiscountData = createAsyncThunk(
  'fetchHomeDiscountData',
  async () => {
    const res = await getHomeDiscountData()
    return res
  }
)
// 热门推荐
export const fetchHomeRecommendData = createAsyncThunk(
  'fetchHomeRecommendData',
  async () => {
    const res = await getHomeRecommendData()
    return res
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    highScoreInfo: [],
    goodPriceInfo: [],
    discountInfo: [],
    recommendInfo: [],
    longforInfo: []
  },
  reducers: {
    changeGoodPriceAction(state, res) {
      console.log('changeGoodPriceAction', res)
      state.goodPriceInfo = res.payload.data
    },
    changeHighScoreAction(state, res) {
      state.highScoreInfo = res.payload.data
    },
    changeDiscountInfo(state, res) {
      state.discountInfo = res.payload.data
    },
    changeRecommendInfo(state, res) {
      state.recommendInfo = res.payload.data
    },
    changeLongforInfo(state, res){
      state.longforInfo = res.payload.data
    }
  },
  extraReducers: {
    // [fetchHomeGoodPriceData.fulfilled](state, res) {
    //   state.goodPriceInfo = res.payload.data
    // },
    // [fetchHomeHighScoreData.fulfilled](state, res) {
    //   state.highScoreInfo = res.payload.data
    // },
    [fetchHomeDiscountData.fulfilled](state, res) {
      // console.log('fetchHomeDiscountData', res.payload.data)
      state.discountInfo = res.payload.data
    },
    [fetchHomeRecommendData.fulfilled](state, res) {
      // console.log('fetchHomeDiscountData', res.payload.data)
      state.recommendInfo = res.payload.data
    }
  }
})

export const {
  changeGoodPriceAction,
  changeHighScoreAction,
  changeDiscountInfo,
  changeRecommendInfo,
  changeLongforInfo
} = homeSlice.actions
export default homeSlice.reducer
