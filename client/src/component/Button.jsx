import React from 'react'

function Button({btnText}) {
  return (
    <button className='text-xl text-tertiary border-2 border-tertiary px-4 py-2 hover:text-white hover:bg-tertiary rounded-lg'>{btnText}</button>
  )
}

export default Button