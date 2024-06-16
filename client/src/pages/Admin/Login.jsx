import { message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import VITE_APP_BASE_URL from '../../../urls';

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(VITE_APP_BASE_URL+'api/portfolio/admin-login', user);
      dispatch(HideLoading());
      if (response.data.success) {
        localStorage.setItem('token', JSON.stringify(response.data.token));
        // window.location.href = '/admin'
        navigate('/admin')

      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  }
  return (
    <div className='bg-primary'>
      <div className='h-screen flex justify-center items-center '>
        <form onSubmit={login} className='border-2 h-fit p-4'>
          <h1 className='m-5 text-2xl font-semibold'>Login</h1>
          <label htmlFor="username" className='mx-5'>Username</label>
          <input type="text" name="" id="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
          <br />
          <br />
          <label htmlFor="password" className='mx-5'>Password</label>
          <input type="password" name="" id="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
          <br />
          <button className='mx-5 border px-5 py-2 mt-6 hover:bg-secondary text-secondary hover:text-white'  type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login