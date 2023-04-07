


import './App.css'
import React from 'react'
import User from './components/user/User'
import AddUser from './components/adduser/AddUser'
import RemoveUser from './components/removeusers/RemoveUser'
import RootLayOut from './components/RootLayOut'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'


function App() {

  
  const routerObj=createBrowserRouter([
    { 
      path:"/",
      element:<RootLayOut />,
      errorElement:<ErrorPage />,
      children:[
        { 
          path:"/",
          element:<AddUser />
        },
        { 
          path:"/users",
          element:<User />
        },
        { 
          path:"/remove-users",
          element:<RemoveUser />
        }





      ]
    }







  ])
  
  return (
   <div>

<RouterProvider router={routerObj}></RouterProvider>

   </div>
    
  )
}

export default App
