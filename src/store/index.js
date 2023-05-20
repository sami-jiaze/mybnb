import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './modules/home'
import detailReducer from './modules/detail'
import overviewReducer from './modules/overview'
import mainReducer from "./modules/main"

const store = configureStore({
  reducer: {
    home: homeReducer,
    detail: detailReducer,
    overview: overviewReducer,
    main: mainReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
