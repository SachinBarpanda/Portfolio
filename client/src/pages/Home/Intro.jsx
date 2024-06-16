import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Intro() {
  const {loading, portfolioData } = useSelector((state)=>state.root)
  const {intros} = portfolioData;
  const {welcomeText, firstName , lastName, caption, description} = intros;

  return (
    <div className=' h-[90vh] flex flex-col items-start justify-evenly px-24 sm:px-6 lg:px-12 w-3/4 py-10 m-2'>

      <h1 className=' text-7xl sm:text-3xl lg:text-5xl text-secondary font-semibold'>
        <h1 className=' text-2xl text-white font-semibold'>{welcomeText || ''} </h1>
        {firstName || ''} {lastName || ''}</h1>
      <h1 className=' text-6xl sm:text-3xl lg:text-5xl text-white font-semibold'>{caption
       || ''} </h1>

      <p className='text-xl text-white text-left'>
        {description || ''}
      </p>
      <div className='flex'>

      <button className='text-xl text-tertiary border-2 border-tertiary px-4 py-2 mr-40 hover:text-white hover:bg-tertiary rounded-lg'>Get Started</button>
      <Link to='/admin' className='w-fit border-2 px-5 py-2 text-2xl text-white rounded-lg'>Admin </Link>
      </div>

    </div>
  )
}

export default Intro