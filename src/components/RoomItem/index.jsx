import React, { memo, useRef } from 'react'
import { ItemWrapper } from './style'
import { Rate } from 'antd'
import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right.jsx'

const RoomItem = memo(props => {
  const { itemData, itemWidth = '25%', itemClick } = props
  // 轮播图ref
  const carouRef = useRef()

  // 轮播图箭头点击切换函数
  function handleArrowClick(e, isRight = true) {
    e.stopPropagation()
    isRight ? carouRef.current.next() : carouRef.current.prev()
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
        {!!itemData?.picture_urls?.length ? (
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
            <Carousel ref={carouRef}>
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
          <div className="cover">
            <img src={itemData.picture_url} alt="" />
          </div>
        )}
        {/* <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div> */}

        <div className="desc">{itemData.verify_info.messages.join(' ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/天</div>
        <div className="bottom">
          {/* 星星 */}
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
