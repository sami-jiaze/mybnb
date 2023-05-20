import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import HeadLeft from './components/headLeft'
import HeadRight from './components/headRight'
import HeadCenter from './components/headCenter'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import { ThemeProvider } from 'styled-components'

const Header = memo(() => {
  const { headConfig } = useSelector(
    state => ({
      headConfig: state.main.headConfig
    }),
    shallowEqual
  )
  // const { scrollY } = useScrollPosition()
  const { isFixed, topAlpha } = headConfig
  // console.log(isFixed);
  // const isAlpha = topAlpha && scrollY
  return (
    <ThemeProvider theme={{topAlpha}}>
      <HeaderWrapper
        className={classNames({ fixed: isFixed })}
        isAlpha={topAlpha}
      >
        <HeadLeft></HeadLeft>
        <HeadCenter></HeadCenter>
        <HeadRight></HeadRight>
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default Header
