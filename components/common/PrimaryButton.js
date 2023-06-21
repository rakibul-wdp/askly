import React from 'react';

const PrimaryButton = ({ children }) => {
  return (
    <button className='btn btn-primary btn-wide normal-case -py-10'>{children}</button>
  )
}

export default PrimaryButton;