import React, { memo } from 'react'
import { PagnWrapper } from './style'
import { Pagination } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPageAction, fetchEntireRoomListData } from '../../../../store/modules/detail'

const EntirePagn = memo(() => {
  const { totalCount, currentPage, roomList } = useSelector(state => ({
    totalCount: state.detail.count,
    currentPage: state.detail.currentPage,
    roomList: state.detail.roomList
  }))

  const totalPages = Math.ceil(totalCount / 20)
  const startPage = currentPage * 20 + 1
  const endPage = (currentPage + 1) * 20

  const dispatch = useDispatch()
  function handlePageHandler(event, page) {
    const payload = {
      offset: (page - 1) * 20,
      size: 20
    }
    dispatch(changeCurrentPageAction(page - 1))
    dispatch(fetchEntireRoomListData(payload))
  }

  return (
    <PagnWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={10} color="primary" onChange={handlePageHandler} />
          <div className="desc">
            第 {startPage} - {endPage} 个房源，共超过{totalCount}个
          </div>
        </div>
      )}
    </PagnWrapper>
  )
})

export default EntirePagn
