import React, { memo } from 'react'
import { OverWrapper } from './style'
import { useSelector } from 'react-redux'

const OverView = memo(() => {
  const { NavInfo } = useSelector(state => ({
    NavInfo: state.overview.NavRoomItem
  }))

  console.log("NavInfo", NavInfo)
  return <OverWrapper>over</OverWrapper>
})

export default OverView
