import React, { memo, useState } from 'react'
import { OverWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import PictureBrow from '../../base-ui/pictureBrowser'
import OverPicture from './overPictures'

const OverView = memo(() => {
  const { NavInfo } = useSelector(
    state => ({
      NavInfo: state.overview.NavRoomItem
    }),
    shallowEqual
  )
  const [showBrowser, setBrowser] = useState(false)

  // console.log("NavInfo", NavInfo)
  return (
    <OverWrapper>
      <OverPicture
        showBtnClickOn={e => setBrowser(true)}
      ></OverPicture>
      <div className="show-btn" onClick={e => setBrowser(true)}>
        显示更多照片
      </div>
      {/* 图片查看蒙层 */}
      {showBrowser && (
        <PictureBrow
          pictureUrls={NavInfo.picture_urls}
          showBtnClick={e => setBrowser(false)}
        ></PictureBrow>
      )}
    </OverWrapper>
  )
})

export default OverView
