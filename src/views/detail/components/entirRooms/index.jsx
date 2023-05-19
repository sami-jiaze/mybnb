import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RoomWrapper } from './style'
import RoomItem from '@/components/RoomItem'
import { useNavigate } from 'react-router-dom'
import { changeNavRoomItemData } from '../../../../store/modules/overview'

const EntireRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector(
    state => ({
      roomList: state.detail.roomList,
      totalCount: state.detail.count,
      isLoading: state.detail.isLoading
    }),
    shallowEqual
  )

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandler = useCallback(
    item => {
      // 往redux存储数据
      dispatch(changeNavRoomItemData(item))
      navigate('/overview')
    },
    [navigate, dispatch]
  )

  return (
    <RoomWrapper>
      <h2 className="title">共{totalCount}多处住所</h2>
      <div className="list">
        {roomList.map(item => {
          return (
            <RoomItem
              itemData={item}
              itemWidth="20%"
              key={item.id}
              itemClick={itemClickHandler}
            ></RoomItem>
          )
        })}
      </div>
      {/* 蒙层 */}
      {isLoading && <div className="cover"></div>}
    </RoomWrapper>
  )
})

export default EntireRooms
