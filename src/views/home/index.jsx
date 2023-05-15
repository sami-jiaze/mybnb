import React, { memo, useEffect } from 'react'
import MyRequest from '../../services'

const index = memo(() => {
  useEffect(()=>{
    MyRequest.get({url: "/home"}).then(res=>{
      console.log(res);
    })
  },[])
  
  return (
    <div>home</div>
  )
})

export default index