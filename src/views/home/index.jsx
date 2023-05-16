import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './components/homeBanner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeGoodPriceData } from '../../store/modules/home'

const Home = memo(() => {
  const { goodPriceInfo } = useSelector(
    state => ({
      goodPriceInfo: state.home.goodPriceInfo
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeGoodPriceData())
  }, [dispatch])

  return (
    <HomeWrapper>
      <div>home</div>
      <div>
        {goodPriceInfo.title}
        {goodPriceInfo?.list?.map(item => {
          return (
            <li key={item.id}>
              {item.id}-{item.name}
            </li>
          )
        })}
      </div>
      <HomeBanner></HomeBanner>
    </HomeWrapper>
  )
})

export default Home
