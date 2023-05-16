import React, { memo } from 'react'
import { FooterWrapper } from './style'

const AppFooter = memo(() => {
  const footerData = [
    {
      name: '爱彼迎',
      list: ['工作机会', '爱彼迎新闻', '政策', '无障碍设施']
    },
    {
      name: '发现',
      list: ['信任与安全', '旅行基金', '商务差旅', '爱彼迎杂志', 'Airbnb.org']
    },
    {
      name: '出租',
      list: ['为什么要出租', '待客之道', '房东义务', '开展体验', '资源中心']
    },
    {
      name: '客服支持',
      list: ['帮助', '邻里支持']
    }
  ]
  return (
    <FooterWrapper>
      <div className="wrapper">
        <div className="service">
          {footerData.map(item => {
            return (
              <div className="item" key={item.name}>
                <div className="name">{item.name}</div>
                <div className="list">
                  <ul>
                    {item.list.map(iten => {
                      return (
                        <li key={iten}>
                          <div className="iten" >{iten}</div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
        <div className="statement">© 2023 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301</div>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter
