'use client'
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'
// import { useAdminContext } from './context'
// import { redirect } from 'next/navigation';

const AdminLogin = () => {
  // const {isAuth} = useAdminContext();

  useEffect(() => {
    const cookies = document.cookie
    const authToken = cookies.split(';').find(value => {
        
      return value.includes('authToken')
    })


    if(!authToken){
      redirect('/admin/login')
    }else{
      redirect('/admin/dashboard')
    }
  }, [])
  
  return (
    <div>Admin</div>
  )
}

export default AdminLogin