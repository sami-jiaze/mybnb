import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo(props => {
  const { selectIndex } = props
  const contentRef = useRef()

  useEffect(() => {
    // 当前的个体
    const selectItemEl = contentRef.current.children[selectIndex]
    const ItemElLeft = selectItemEl.offsetLeft
    const ItemElWidth = selectItemEl.clientWidth
    // 传入的整体
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth
    // 移动的距离
    let distance = ItemElLeft + ItemElWidth * 0.5 - contentWidth * 0.5
    // 特殊情况处理
    if (distance < 0) distance = 0
    const totalDistance = contentScroll - contentWidth
    if (distance > 0) distance = totalDistance

    contentRef.current.style.transform = `translate(${-distance}px)`

    // console.log('ItemElLeft', ItemElLeft)
    // console.log('ItemElWidth', ItemElWidth)
    // console.log('contentWidth', contentWidth)
    // console.log('distance', distance)
    // console.log('totalDistance', totalDistance)
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

export default Indicator
