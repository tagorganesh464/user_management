import React from 'react'
import NavigationBar from './navbar/NavigationBar'
import { Outlet } from 'react-router-dom'

function RootLayOut() {
   
  return (
    <div>



<NavigationBar></NavigationBar>
<Outlet></Outlet>
    </div>
  )
}

export default RootLayOut