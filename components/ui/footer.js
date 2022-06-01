// import styles from '../../styles/components/home/Footer.module.css'
import {BiArrowToTop} from 'react-icons/bi'
import Link from 'next/link'
import styles from '../../styles/components/ui/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['top-container']}>
        <Link href="#">
          <BiArrowToTop className={styles['to-top']}/>
        </Link>
      </div>
      <div className={styles['footer-legal']}>
        <Link href="/terms-of-use">Terms of Use</Link> | <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
      <div className={styles['footer-copyright']}>
        &copy; Copyright 2022 Franklin Pearl & The Moon | All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer