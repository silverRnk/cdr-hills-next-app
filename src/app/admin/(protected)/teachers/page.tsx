import { redirect } from 'next/navigation'
import React from 'react'

const TeachersPage = () => {


  redirect('/admin/teachers/list');

  return (
    <div></div>
  )
}

export default TeachersPage