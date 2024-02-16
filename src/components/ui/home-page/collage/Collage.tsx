import React from 'react'
import styles from './collage.module.css'
import Image from 'next/image'

const Collage = () => {
  return (
    <div className={styles['shadow-container']}>
        <div  className={styles.container}>
            <div className={styles.left}>
                <Image src={'/img-1-1.png'} alt='img-1' width={'600'} height={400}/>
                <Image src={'/img-2.png'} alt='img-2' width={'600'} height={400}/>
                <Image src={'/img-3.png'} alt='img-3' width={'600'} height={400}/>
            </div>
            <div className={styles.right}>
                <p>
                “ Come to our school, where dreams take flight,
                    Join us now, and shine so bright. “
                </p>
            </div>
        </div>
    </div>
    
  )
}

export default Collage