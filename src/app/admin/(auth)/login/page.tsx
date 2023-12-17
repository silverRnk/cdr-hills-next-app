'use client'
import React, { useEffect, useState } from 'react'
import { useAdminContext } from '../../context'
import { redirect } from 'next/navigation';

const AdminLoginPage = () => {
    const [doWeGo, setDoWeGo] = useState(false)

    useEffect(() => {
        if(doWeGo){
            redirect('/admin/dashboard')
        }
    }, [doWeGo])

    const handleLogin = async () => {
       const resp = await fetch('/api/admin/login');
       console.log('status' + resp.status)
       if(resp.status == 200){
            setDoWeGo(true);
        }
    }

    return (
        <div>
            <button onClick={() => handleLogin()}>Login</button>

        </div>
  )
}

export default AdminLoginPage