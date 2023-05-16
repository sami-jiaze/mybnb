import React, { memo, useEffect } from 'react'
import MyRequest from '../../services'
import { HomeWrapper } from './style'
import HomeBanner from './components/homeBanner'

const Home = memo(() => {
  // useEffect(()=>{
  //   MyRequest.get({url: "/home"}).then(res=>{
  //     console.log(res);
  //   })
  // },[])
  
  return (
    <HomeWrapper>
      <div>home</div>
      <HomeBanner></HomeBanner>
    </HomeWrapper>
  )
})

export default Home