import React from 'react'

const Button = ({ text, link }) => {
  return (
    <a href={link} className='btn border-white border-[1px]'>{text}</a>
  )
}

export default Button
