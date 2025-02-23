import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {

    const {phone} = useContext(AppContext);

  return (
    <div>
        <h2>Footer</h2>
        <h3>Phone: {phone}</h3>
    </div>
  )
}

export default Footer