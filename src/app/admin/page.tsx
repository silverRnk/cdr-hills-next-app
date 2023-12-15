'use client'
import { Metadata } from 'next';
import React, { useEffect } from 'react'
// import { useAdminContext } from './context'
// import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Cedar Hills | Admin",
  description: "Cedar Hill Admin Page",
};

const AdminLogin = () => {
  // const {isAuth} = useAdminContext();

  // useEffect(() => {
  //   if(!isAuth){
  //     redirect('/admin/login')
  //   }else{
  //     redirect('/admin/dashboard')
  //   }
  // }, [isAuth])
  
  return (
    <div>Admin</div>
  )
}

export default AdminLogin