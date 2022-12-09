import React from 'react'
import { Outlet } from 'react-router-dom'

export default function GuestLayout() {
  return (
      <div>
          <div>
              <p>For guest users only</p>
            <Outlet />
          </div>
      </div>
  )
}
