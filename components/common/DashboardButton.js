import React from 'react'

const DashboardButton = ({ Children }) => {
  return (
    <button className='btn btn-primary btn-outline normal-case'>{Children}</button>
  )
}

export default DashboardButton;