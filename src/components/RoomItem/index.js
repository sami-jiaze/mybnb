import React, { memo } from 'react'
import { ItemWrapper } from './style'
import { Rate } from 'antd'

const RoomItem = memo(props => {
  const { itemData } = props
  return (
    <ItemWrapper verifyColor={itemData?.verify_info.text_color || '#39576a'}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages.join(' ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/天</div>
        <div className="bottom">
          <Rate style={{ color: 'red', fontSize: '13px' }} disabled allowHalf defaultValue={itemData.star_rating ?? 4.2}></Rate>
          <span className="count">{itemData.reviews_count}</span>
          <span className="extra">· {itemData?.bottom_info?.content || '很棒的房东'}</span>
        </div>
      </div>
    </ItemWrapper>
  )
})

export default RoomItem
