import React, { memo, useCallback, useEffect, useState } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './components/homeBanner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  fetchHomeDiscountData,
  fetchHomeGoodPriceData,
  fetchHomeHighScoreData,
  fetchHomeLongforData,
  fetchHomePlusData,
  fetchHomeRecommendData
} from '../../store/modules/home'
import SectionHeader from '../../components/SectionHeader'
import RoomBody from '../../components/RoomBody'
import HomeRecommend from './components/homeRecommend'
import SectionTabs from '../../components/SectionTabs'
import { isEmptyObject } from '../../utils/isEmptyObject'
import SectionFooter from '../../components/SectionFooter'
import HomeLongfor from './components/homeLongfor'
import HomePlus from './components/homePlus'
import { changeHeadConfigAction } from '../../store/modules/main'

const Home = memo(() => {
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo
  } = useSelector(
    state => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo
    }),
    shallowEqual
  )

  const tabNamesList = discountInfo.dest_address?.map(item => item.name) ?? {}
  // useState初始值只对首次渲染生效
  const [tabName, setTabName] = useState()
  // 接受来着子组件SectionTabs的回调函数
  const tabClickHandler = useCallback(function (index, name) {
    setTabName(name)
  }, [])

  useEffect(() => {
    setTabName(Object.keys(discountInfo.dest_list ?? {})[0] ?? '')
  }, [discountInfo.dest_list])

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeGoodPriceData())
    dispatch(fetchHomeHighScoreData())
    dispatch(fetchHomeDiscountData())
    dispatch(fetchHomeRecommendData())
    dispatch(fetchHomeLongforData())
    dispatch(fetchHomePlusData())
    dispatch(changeHeadConfigAction({isFixed: true,topAlpha: true}))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        {/* 高性价比 */}
        <div className="good-price">
          {isEmptyObject(goodPriceInfo) && (
            <>
              <SectionHeader title={goodPriceInfo.title}></SectionHeader>
              <RoomBody roomList={goodPriceInfo?.list}></RoomBody>
              <SectionFooter />
            </>
          )}
        </div>
        {/* 高评分 */}
        <div className="high-score">
          {isEmptyObject(highScoreInfo) && (
            <>
              <SectionHeader title={highScoreInfo.title}></SectionHeader>
              <RoomBody roomList={highScoreInfo?.list}></RoomBody>
              <SectionFooter />
            </>
          )}
        </div>
        {/* 折扣 */}
        <div className="discount">
          {isEmptyObject(discountInfo) && (
            <>
              <SectionHeader
                title={discountInfo.title}
                subtitle={discountInfo.subtitle}
              ></SectionHeader>
              <SectionTabs
                tabNames={tabNamesList}
                tabClick={tabClickHandler}
              ></SectionTabs>
              <RoomBody
                roomList={discountInfo.dest_list?.[tabName]}
                itemWidth="33.3%"
              ></RoomBody>
              <SectionFooter />
            </>
          )}
        </div>
        {/* 推荐 */}
        {isEmptyObject(recommendInfo) && (
          <HomeRecommend infoData={recommendInfo}></HomeRecommend>
        )}
        {/* 想去 */}
        {isEmptyObject(longforInfo) && (
          <HomeLongfor infoData={longforInfo}></HomeLongfor>
        )}
        {/* plus */}
        {isEmptyObject(plusInfo) && <HomePlus infoData={plusInfo}></HomePlus>}
      </div>
    </HomeWrapper>
  )
})

export default Home
