import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import HeadLeft from './components/headLeft'
import HeadRight from './components/headRight'
import HeadCenter from './components/headCenter'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'

const Header = memo(() => {
  const { headConfig } = useSelector(
    state => ({
      headConfig: state.main.headConfig
    }),
    shallowEqual
  )
  const { isFixed } = headConfig
  // console.log(isFixed);

  return (
    <HeaderWrapper className={classNames({fixed: isFixed})}>
      <HeadLeft></HeadLeft>
      <HeadCenter></HeadCenter>
      <HeadRight></HeadRight>
    </HeaderWrapper>
  )
})

export default Header
