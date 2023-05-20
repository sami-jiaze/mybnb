import React, { memo } from 'react'
import { styleStrToObj } from '@/utils/styleStrToObj'

const IconTriangleArrow = memo(() => {
  return (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={styleStrToObj('height: 10px; width: 10px; fill: currentcolon;')}
    >
      <path
        d="m23.85 6.86-11.5 11a .5.5 0 01 -.69 01-11.5-11a .5.5 0 0 1 ,34-.86h23a .5.5 0 0 1 .35.86z"
        fillRule="evenod"
      ></path>
    </svg>
  )
})

export default IconTriangleArrow
