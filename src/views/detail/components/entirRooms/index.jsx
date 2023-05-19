import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { RoomWrapper } from './style'
import RoomItem from '@/components/RoomItem'

const EntireRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector(
    state => ({
      roomList: state.detail.roomList,
      totalCount: state.detail.count,
      isLoading: state.detail.isLoading
    }),
    shallowEqual
  )

  return (
    <RoomWrapper>
      <h2 className="title">共{totalCount}多处住所</h2>
      <div className="list">
        {roomList.map(item => {
          return (
            <RoomItem itemData={item} itemWidth="20%" key={item.id}></RoomItem>
          )
        })}
      </div>
      {/* 蒙层 */}
      {isLoading && <div className="cover"></div>}
    </RoomWrapper>
  )
})

export default EntireRooms
