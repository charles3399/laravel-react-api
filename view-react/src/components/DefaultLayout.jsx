import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
      <div>
          <p>Default</p>
          <Outlet />
      </div>
  )
}
