import React from 'react'

function Header() {
  return (
    <div className=' bg-primary flex justify-between'>
        <h1 className=' text-secondary text-4xl font-semibold'><i class="ri-stack-overflow-fill"></i></h1>
        <h1 className=' text-white text-4xl font-semibold'><i class="ri-linkedin-box-fill"></i></h1>
        <h1 className=' text-tertiary text-4xl font-semibold'><i class="ri-github-fill"></i></h1>        
    </div>
  )
}

export default Header