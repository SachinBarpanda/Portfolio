import React, { useEffect } from 'react'
import Header from '../../component/Header'
import { Tabs, Button, ConfigProvider, Input, Space, theme } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import Experiences from './Experiences';
import { useSelector } from 'react-redux';
import AdminProjects from './AdminProjects';
import AdminBlogs from './AdminBlogs';
import AdminContact from './AdminContact';


const items = [
  {
    key: '1',
    label: 'Intro',
    children: <AdminIntro />,
  },
  {
    key: '2',
    label: 'About',
    children: <AdminAbout />,
  },
  {
    key: '3',
    label: 'Experiences',
    children: <Experiences/>,
  },
  {
    key: '4',
    label: 'Projects',
    children: <AdminProjects/>,
  },
  {
    key: '5',
    label: 'Blogs',
    children: <AdminBlogs/>,
  },
  {
    key: '6',
    label: 'Contact',
    children: <AdminContact/>,
  },
];


function index() {
  const {portfolioData} = useSelector((state)=> state.root );

  // useEffect(()=>{
  //   if(!localStorage.getItem("token")){
  //     window.location.href = "/admin-login"
  //   }
  // },[items])

  return (
    <div>
        <Header />
        <h1 className="underline text-secondary cursor-pointer text-left mx-12 text-2xl "
        onClick={()=>{
          localStorage.removeItem("token")
          window.location.href = "/admin-login"
        }}
        >Logout</h1>
{/* portfoliodata is being checked if it is completed then it is allowed to render Tabs  */}
        {portfolioData && 
          <Tabs className='p-12' items={items}  />
        }
      </div>
  )
}

export default index