import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0'>
        <div className='flex gap-5 font-bold text-5xl '>
            <h1 className='text-secondary S'>S</h1>
            <h1 className='text-secondary A'>A</h1>
            <h1 className='text-white C'>C</h1>
            <h1 className='text-white H'>H</h1>
            <h1 className='text-tertiary I'>I</h1>
            <h1 className='text-tertiary N'>N</h1>
        </div>
    </div>
  )
}

export default Loader