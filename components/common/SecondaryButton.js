import React from 'react'

const SecondaryButton = ({ children }) => {
  return (
    <button className='btn btn-primary btn-outline w-full normal-case -py-10'>{children}</button>
  )
}

export default SecondaryButton;