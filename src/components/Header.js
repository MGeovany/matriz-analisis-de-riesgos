/* eslint-disable react/prop-types */
import React from 'react'

export const Header = ({ title }) => {
  return (
    <div>
      <div className='header-title'>{title}</div>
      <hr style={{ border: ' 1px solid #e6e7e8' }} />
    </div>
  )
}
