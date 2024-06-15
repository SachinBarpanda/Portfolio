import { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Loader from './component/Loader'
import axios from "axios"
import Home from './pages/Home/Home'
import Admin from './pages/Admin/index'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, setPortfolioData, ShowLoading, ReloadData } from './redux/rootSlice'
import { ConfigProvider, theme } from 'antd'
import Login from './pages/Admin/Login'
import VITE_APP_BASE_URL from '../urls'

function App() {
  const { loading, portfolioData, reloadData } = useSelector((state) => state.root)
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get(VITE_APP_BASE_URL+"api/portfolio/get-portfolio-data")
      dispatch(setPortfolioData(response.data))
      dispatch(HideLoading())
      dispatch(ReloadData(false))
    }
    catch (error) {
      dispatch(HideLoading())
    }
  }



  useEffect(() => {
    if (!portfolioData)
      getPortfolioData()
  }, [portfolioData])

  useEffect(()=>{
    if(reloadData){
      getPortfolioData();
    }
  },[reloadData])

  const router = createBrowserRouter([
    {
    
      children:
      [
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: '/admin',
          element: <Admin/>
        },
        {
          path: '/admin-login',
          element: <Login />
        },
      ]
    },
  ])

  return loading ?
    <Loader />
    :
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      
      <RouterProvider router={router} />
      
    </ConfigProvider>

}

export default App
