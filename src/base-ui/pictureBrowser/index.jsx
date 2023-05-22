import React, { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { PictureWrapper } from './style'
import IconClose from '../../assets/svg/icon_close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconTriangle from '@/assets/svg/icon_triangle_arrow'
import Indicator from '@/base-ui/Indicator'
import classNames from 'classnames'

const PictureBrow = memo(props => {
  const { pictureUrls, showBtnClick } = props
  // 当前图片页数
  const [curIndex, setCurIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)
  const [ishowList, setShowList] = useState(true)

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
  // 箭头左右选项
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
  // 点击单个图片预览切换
  function liClick(index) {
    setIsNext(index > curIndex)
    setCurIndex(index)
  }
  // 是否展示小列表
  function showListClick() {
    let isShowList = ishowList
    setShowList(!isShowList)
  }

  return (
    <PictureWrapper isNext={isNext} showList={ishowList}>
      {/* 头部关闭按钮 */}
      <div className="top">
        <div className="close-btn" onClick={closeBtn}>
          <IconClose></IconClose>
        </div>
      </div>
      {/* 主体内容 */}
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
        {/* 展示图片 */}
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
      {/* 预览部分 */}
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                第{curIndex + 1}/{pictureUrls.length}
              </span>
              <span>张图片</span>
            </div>
            <div className="toggle">
              <span onClick={e => showListClick()}>隐藏图片列表</span>
              <IconTriangle></IconTriangle>
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={curIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={classNames('item', {
                      active: curIndex === index
                    })}
                    key={item}
                    onClick={e => liClick(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </PictureWrapper>
  )
})

export default PictureBrow
