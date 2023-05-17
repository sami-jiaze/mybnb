import React, { memo } from 'react'
import RoomItem from '../RoomItem'
import { RoomBodyWrapper } from './style'

const RoomBody = memo(props => {
  const { roomList = [], itemWidth = '25%' } = props
  return (
    <RoomBodyWrapper>
      {roomList?.map(item => {
        return (
          <RoomItem
            itemData={item}
            key={item.id}
            itemWidth={itemWidth}
          ></RoomItem>
        )
      })}
    </RoomBodyWrapper>
  )
})

export default RoomBody
