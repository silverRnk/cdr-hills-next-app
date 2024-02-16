import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { Metadata } from 'next'
import { Navbar } from '@/components/ui/home-page'

const meta: Metadata = {
  title: "Cedar Hills Christian Academy",
  description: "Lorem Ipsum"
}

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Navbar/>
    <main className={styles.main}>
        Hello World
      </main>
    </div>
      
    </>
  )
}
