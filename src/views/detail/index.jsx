import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import EntireFilter from './components/entirFilter'
import EntireRooms from './components/entirRooms'
import EntirePagn from './components/entirePagn'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchEntireRoomListData } from '../../store/modules/detail'
import { changeHeadConfigAction } from '../../store/modules/main'

const Detail = memo(() => {
  const { EntireRoomsInfo } = useSelector(
    state => ({
      entireRoomsInfo: state.detail.entireRoomsInfo
    }),
    shallowEqual
  )
  
  const pInfo = {
    offset: 0,
    size: 20
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireRoomListData(pInfo))
    dispatch(changeHeadConfigAction({isFixed: true}))
  }, [dispatch])

  return (
    <DetailWrapper>
      <EntireFilter></EntireFilter>
      <EntireRooms EntireRoomsInfo={EntireRoomsInfo}></EntireRooms>
      <EntirePagn></EntirePagn>
    </DetailWrapper>
  )
})

export default Detail
