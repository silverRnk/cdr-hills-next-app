import React from 'react'
import Navbarstyle from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { EnrollmentButton } from '../enrollBtn/EnrollmentButton'

const Navbar = () => {
  return (
    <header className={Navbarstyle['header']}>
      <nav className={Navbarstyle['nav-bar']}>
        <div>
          <Image src={'/cedarhills.png'} alt='cedar-hills-logo' height={75} width={75} style={{marginRight: "70px"}}/>
        </div>

        <ul>
          <li><Link href={'/'}>Home</Link></li>
          <li>Admission</li>
          <li>About Us</li>
        </ul>
        <div className={Navbarstyle.right}>
          <EnrollmentButton/>
          <Link href={'/admin'} className={Navbarstyle['login-link']}>Login</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar