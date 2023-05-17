import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollWapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo(props => {
  const [showRight, setShowRight] = useState()
  const [showLeft, setShowLeft] = useState()
  const scrollRef = useRef()
  const totalDistanceRef = useRef()
  // 位移位置记录
  const [posIndex, setPosIndex] = useState(0)

  // 组件渲染完毕, 判断是否显示右侧的按钮
  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth // 内容区的真实宽度
    const clientWidth = scrollRef.current.clientWidth // 可视区域宽度

    const totalWidth = scrollWidth - clientWidth // 可以滚动的距离
    totalDistanceRef.current = totalWidth
    setShowRight(totalWidth > scrollRef.current.children[posIndex].offsetLeft)
  }, [props.children])

  const controlClickHandle = isRight => {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollRef.current.children[newIndex]
    // offsetLeft offsetTop值的获取跟父级元素没关系，
    // 而是跟其上一级的定位元素(除position:static;外的所有定位如fixed,relative,absolute)有关系

    const newOffsetLeft = newEl.offsetLeft
    scrollRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex)
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ScrollWapper>
      {showLeft && (
        <div className="control left" onClick={e => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={e => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div className="scroll-content" ref={scrollRef}>
          {props.children}
        </div>
      </div>
    </ScrollWapper>
  )
})

export default ScrollView
