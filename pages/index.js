import Image from 'next/image'
import NavBar from '../components/nav/navbar'
import Intro from '../components/home/intro'
import NextUp from '../components/home/nextup'
import logoImage from '../public/home/fpatm_header_logo.png'
import styles from '../styles/Home.module.css'

export default function Home() {
  const data = {
    location: 'Arrow Bar',
    eventDate: new Date(2022, 10, 5),
    begins: '9pm',
    hasCoverCharge: true,
    coverCharge: '5',
    performers: [
      'Cough Cool',
      'Franklin Pearl & The Moon',
      'Jim Reed'
    ]
  }
  return (
    <div>
      <header className={styles.header}>
        <div className={styles['header-logo-container']}>
          <Image 
            className={styles['header-logo']} 
            src={logoImage}
            alt="Band logo"
          />
        </div>
      </header>
      <NavBar />
      <Intro />
      <NextUp data={data} />
    </div>
  )
}
