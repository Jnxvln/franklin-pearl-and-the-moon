import Image from 'next/image'
import NavBar from '../components/nav/navbar'
import Intro from '../components/home/intro'
import NextUp from '../components/home/nextup'
import Merch from '../components/home/merch'
import ContactUs from '../components/home/contact'
import logoImage from '../public/home/fpatm_header_logo.png'
import styles from '../styles/Home.module.css'

export default function Home() {
  const data = {
    hasBkg: true,
    location: 'Arrow Bar',
    eventDate: new Date(2022, 5, 18),
    begins: '8pm',
    hasCoverCharge: true,
    // coverCharge: '5',
    performers: [
      "Devil's Doorbell",
      "Franklin Pearl & The Moon",
      "The Government Bandit",
      "Jim Reed"
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
      <Intro />
      <NextUp data={data} />
      <Merch />
      <ContactUs />
    </div>
  )
}
