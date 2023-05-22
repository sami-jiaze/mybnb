import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from './style'
import { Rate } from 'antd'
import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right.jsx'
import Indicator from '@/base-ui/Indicator'
import classNames from 'classnames'

const RoomItem = memo(props => {
  const { itemData, itemWidth = '25%', itemClick } = props
  // 轮播图ref
  const carouRef = useRef()
  // 指示器下标
  const [curIndex, setIndex] = useState(0)

  // 轮播图箭头点击切换函数
  function handleArrowClick(e, isRight = true) {
    e.stopPropagation()
    isRight ? carouRef.current.next() : carouRef.current.prev()

    let newIndex = isRight ? curIndex + 1 : curIndex - 1
    if (newIndex < 0) {
      newIndex = itemData.picture_urls.length - 1
    }
    if (newIndex > itemData.picture_urls.length - 1) {
      newIndex = 0
    }
    setIndex(newIndex)
  }

  function liClick(e, index) {
    e.stopPropagation()
    carouRef.current.goTo(index, false);
    setIndex(index)
  }

  // RoomItem 点击事件
  function itemClickHandler(e) {
    if (itemClick) itemClick(itemData)
  }

  return (
    <ItemWrapper
      itemWidth={itemWidth}
      verifyColor={itemData?.verify_info.text_color || '#39576a'}
      onClick={itemClickHandler}
    >
      <div className="inner">
        {/* 判断是否需要轮播图  */}
        {!!itemData?.picture_urls?.length ? (
          // 轮播图
          <div className="swiper">
            <div className="control">
              <div
                className="btn left"
                onClick={e => handleArrowClick(e, false)}
              >
                <IconArrowLeft width="30" height="30" />
              </div>
              <div
                className="btn right"
                onClick={e => handleArrowClick(e, true)}
              >
                <IconArrowRight width="30" height="30" />
              </div>
            </div>
            {/* 指示器 */}
            <div className="indicator">
              <Indicator selectIndex={curIndex}>
                {itemData?.picture_urls?.map((item, index) => {
                  return (
                    <div
                      className="item"
                      key={item}
                      onClick={e => liClick(e, index)}
                    >
                      <span
                        className={classNames('dot', {
                          active: curIndex === index
                        })}
                        key={item}
                      ></span>
                    </div>
                  )
                })}
              </Indicator>
            </div>
            <Carousel ref={carouRef} dots={false}>
              {itemData.picture_urls.map(item => {
                return (
                  <div className="cover" key={item}>
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </Carousel>
          </div>
        ) : (
          // 不需要轮播图
          <div className="cover">
            <img src={itemData.picture_url} alt="" />
          </div>
        )}

        <div className="desc">{itemData.verify_info.messages.join(' ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/天</div>
        <div className="bottom">
          {/* 评分星星 */}
          <Rate
            className="rate"
            style={{ color: 'red', fontSize: '10px' }}
            disabled
            allowHalf
            defaultValue={itemData.star_rating ?? 4}
          ></Rate>
          <span className="count">{itemData.reviews_count}</span>
          <span className="extra">
            · {itemData?.bottom_info?.content || '很棒的房东'}
          </span>
        </div>
      </div>
    </ItemWrapper>
  )
})

export default RoomItem
