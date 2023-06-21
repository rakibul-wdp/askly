import React from 'react';

const PrimaryButton = ({ children }) => {
  return (
    <button className='btn btn-primary w-[12rem] sm:w-[14rem] lg:btn-wide normal-case -py-10'>{children}</button>
  )
}

export default PrimaryButton;