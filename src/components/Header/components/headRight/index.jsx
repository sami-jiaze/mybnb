import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGrobal from '@/assets/svg/icon-global.jsx'
import IconMenu from '@/assets/svg/icon-profile-menu.jsx'
import IconAvatar from '@/assets/svg/icon-profile-avatar.jsx'

const HeadRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)
  // 添加window监听
  useEffect(() => {
    function windowHandlieClick() {
      setShowPanel(false)
    }
    window.addEventListener('click', windowHandlieClick)
    return () => {
      window.removeEventListener('click', windowHandlieClick)
    }
  }, [])

  const btnClick = (e) => {
    setShowPanel(!showPanel)
    e.stopPropagation()
  }

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGrobal></IconGrobal>
        </span>
      </div>
      <div className="profile" onClick={btnClick}>
        <IconAvatar></IconAvatar>
        <IconMenu></IconMenu>
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租</div>
              <div className="item">房源体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeadRight
