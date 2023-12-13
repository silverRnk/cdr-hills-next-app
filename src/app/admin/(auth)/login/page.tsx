'use client'
import React, { useEffect } from 'react'
import { useAdminContext } from '../../context'
import { redirect } from 'next/navigation';

const AdminLoginPage = () => {
    // const {isAuth, setToken} = useAdminContext();

    useEffect(() => {
        
    })

    const handleLogin = () => {
        // setToken("123456");
        // redirect("/admin/dashboard")
    }

    return (
        <div>
            <button onClick={() => handleLogin()}>Login</button>
        </div>
  )
}

export default AdminLoginPage