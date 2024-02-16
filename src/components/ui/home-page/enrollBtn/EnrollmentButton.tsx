import Link from 'next/link'
import React from 'react'
import btnStyles from './enrollBtn.module.css'

export const EnrollmentButton = () => {
  return (
    <Link 
      role='button' 
      href={'/enrollment'}
      className={btnStyles.btn}>
       Enroll Now</Link>
  )
}
