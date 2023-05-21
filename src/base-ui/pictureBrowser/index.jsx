import React, { memo, useEffect, useState } from 'react'
import {
  CSSTransition,
  SwitchTransition,
} from 'react-transition-group'

import { PictureWrapper } from './style'
import IconClose from '../../assets/svg/icon_close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconTriangle from '@/assets/svg/icon_triangle_arrow.jsx'

const PictureBrow = memo(props => {
  const { pictureUrls, showBtnClick } = props
  // 当前图片页数
  const [curIndex, setCurIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  // 箭头关闭按钮
  function closeBtn() {
    if (showBtnClick) showBtnClick()
  }
  function controlClick(isNext = true) {
    let newIndex = isNext ? curIndex + 1 : curIndex - 1
    if (newIndex < 0) {
      newIndex = pictureUrls.length - 1
    }
    if (newIndex > pictureUrls.length - 1) {
      newIndex = 0
    }
    setCurIndex(newIndex)
    setIsNext(isNext)
  }

  return (
    <PictureWrapper isNext={isNext}>
      <div className="top">
        <div className="close-btn" onClick={closeBtn}>
          <IconClose></IconClose>
        </div>
      </div>
      <div className="content">
        {/* 左右控制按钮 */}
        <div className="control">
          <div className="btn left" onClick={e => controlClick(false)}>
            <IconArrowLeft width={60} height={60}></IconArrowLeft>
          </div>
          <div className="btn right" onClick={e => controlClick(true)}>
            <IconArrowRight width={60} height={60}></IconArrowRight>
          </div>
        </div>
        <div className="c-picture">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={pictureUrls[curIndex]}
              classNames="pic"
              timeout={400}
            >
              <img src={pictureUrls[curIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>15/30:</span>
              <span>sdfdsf</span>
            </div>
            <div className="toggle">
              英寸恶企鹅
              <IconTriangle></IconTriangle>
            </div>
          </div>
          <div className="list">
            {pictureUrls.map(item => {
              return (
                <div className="item" key={item}>
                  <img src={item} alt="" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </PictureWrapper>
  )
})

export default PictureBrow
