import React, { memo, useState } from 'react'
import { OverPictureWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'

const OverPicture = memo(props => {
  const { showBtnClickOn } = props
  const { NavInfo } = useSelector(
    state => ({
      NavInfo: state.overview.NavRoomItem
    }),
    shallowEqual
  )

  // 进入图片列表详情
  function handleClick() {
    if (showBtnClickOn) showBtnClickOn()
  }

  return (
    <OverPictureWrapper>
      <div className="pictures">
        {/* 左边大图片 */}
        <div className="left" onClick={handleClick}>
          <div className="item">
            <img src={NavInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        {/* 右边小图片 */}
        <div className="right" onClick={handleClick}>
          {NavInfo?.picture_urls?.slice(1, 5).map(item => {
            return (
              <div className="item" key={item}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            )
          })}
        </div>
      </div>
    </OverPictureWrapper>
  )
})

export default OverPicture
