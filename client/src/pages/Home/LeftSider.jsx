import React from 'react'

function LeftSider() {
  return (
    <div className='flex flex-col  fixed bottom-10 p-6 sm:py-6 sm:flex-row sm:justify-center sm:relative'>
      <i class="py-2 sm:px-3  text-gray-600 hover:text-white ri-facebook-box-fill"></i>
      <i class="py-2 sm:px-3  text-gray-600 hover:text-white ri-linkedin-box-fill"></i>
      <i class="py-2 sm:px-3  text-gray-600 hover:text-white ri-instagram-line"></i>
      <i class="py-2 sm:px-3  text-gray-600 hover:text-white ri-github-fill"></i>
      <i class="py-2 sm:px-3  text-gray-600 hover:text-white ri-mail-open-fill"></i>
      <div className='py-2 mx-1.5 w-[1px] h-28 bg-gray-700 sm:hidden'></div>
    </div>
  )
}

export default LeftSider