import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLeyaut from './layout/MainLeyaut'
import Home from './pages/Home'
function App() {
  let router=createBrowserRouter([
    {
      path:"/",
      element:<MainLeyaut/>,
      children:[
        {
          path:"/",
          element:<Home/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App