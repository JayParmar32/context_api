import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router'

export default function Protectroute() {
  const [user,setUser]=useState(true)
  return (
    <>
    {user?<Outlet/>:<Navigate to="/login"/>}
    </>
  )
}
