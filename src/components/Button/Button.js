import React from 'react'
import "./Button.css"

export default function Button({value, type, handleClick}) {

    

  return (
    <button type={type} onClick={handleClick} className='button'>{value}</button>
  )
}
