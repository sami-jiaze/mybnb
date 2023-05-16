import React, { memo } from 'react'
import { CenterWrapper } from './style'
import IconSearch from '@/assets/svg/icon-search-bar.jsx'

const HeadCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="search-bar">
        <div className="text">搜索...</div>
        <span className='icon'>
          <IconSearch></IconSearch>
        </span>
      </div>
    </CenterWrapper>
  )
})

export default HeadCenter
