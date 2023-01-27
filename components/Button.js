import React from 'react'

const Button = ({ text, link }) => {
  return (
    <a href={link} className='btn'>{text}</a>
  )
}

export default Button
 