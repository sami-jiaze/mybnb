import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './components/homeBanner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeGoodPriceData } from '../../store/modules/home'
import SectionHeader from '../../components/sectionHeader'
import RoomItem from '../../components/RoomItem'

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
      <HomeBanner></HomeBanner>
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <ul className='room-list'>
            {goodPriceInfo?.list?.map(item => {
              return <RoomItem itemData={item} key={item.id}></RoomItem>
            })}
          </ul>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
