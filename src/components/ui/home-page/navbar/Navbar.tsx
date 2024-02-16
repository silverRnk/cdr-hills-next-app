import React from 'react'
import Navbarstyle from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

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
          <li className={Navbarstyle['login-wrapper']}>
            <Link href={'/admin'}>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar