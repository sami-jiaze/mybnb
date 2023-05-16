import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import HeadLeft from './components/headLeft'
import HeadRight from './components/headRight'
import HeadCenter from './components/headCenter'

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <HeadLeft></HeadLeft>
      <HeadCenter></HeadCenter>
      <HeadRight></HeadRight>
    </HeaderWrapper>
  )
})

export default Header