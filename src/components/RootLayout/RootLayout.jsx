import React from 'react'
import Header from '../NewHeader'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
    < Header/>
    < Outlet/>
    <p>footer</p>
    </>
  )
}

export default RootLayout