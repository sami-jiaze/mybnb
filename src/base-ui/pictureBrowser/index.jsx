import React, { memo, useEffect } from 'react'
import { PictureWrapper } from './style'

const PictureBrow = memo(() => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return <PictureWrapper>PictureBrow</PictureWrapper>
})

export default PictureBrow
