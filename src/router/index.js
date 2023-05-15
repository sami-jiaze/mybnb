import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(()=>import("@/views/home"))
const Detail = React.lazy(()=>import("@/views/detail/"))
const Overview = React.lazy(()=>import("@/views/overview/"))


const routes = [
  {
    path: '/',
    element : <Navigate to="/home" />
  },
  {
    path: '/home',
    element : <Home></Home>
  },
  {
    path: '/detail',
    element : <Detail></Detail>
  },
  {
    path: '/overview',
    element : <Overview></Overview>
  }
]

export default routes