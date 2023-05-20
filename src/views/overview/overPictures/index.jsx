import React, { memo } from 'react'
import { OverPictureWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'

const OverPicture = memo(() => {
  const { NavInfo } = useSelector(state => ({
    NavInfo: state.overview.NavRoomItem
  }),shallowEqual)

  return (
    <OverPictureWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item">
            <img src={NavInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
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
