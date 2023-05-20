import React, { memo, useState } from 'react'
import { OverWrapper } from './style'
import { useSelector } from 'react-redux'
import PictureBrow from '../../base-ui/pictureBrowser'
import OverPicture from './overPictures'

const OverView = memo(() => {
  const { NavInfo } = useSelector(state => ({
    NavInfo: state.overview.NavRoomItem
  }))
  const [showBrowser, setBrowser] = useState()

  // console.log("NavInfo", NavInfo)
  return (
    <OverWrapper>
      <OverPicture></OverPicture>
      <div></div>
      <div className="show-btn"></div>
      {/* { showBrowser && <PictureBrow></PictureBrow>} */}
    </OverWrapper>
  )
})

export default OverView
