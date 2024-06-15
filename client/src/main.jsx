import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Admin from './pages/Admin/'
import Login from './pages/Admin/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:
      [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/admin',
          element: <Admin />
        },
        {
          path: '/admin-login',
          element: <Login />
        },
      ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>

    <RouterProvider router={router} />

  </Provider>,
  </React.StrictMode>
)
