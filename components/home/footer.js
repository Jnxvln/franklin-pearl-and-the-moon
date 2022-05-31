import styles from '../../styles/components/home/Footer.module.css'
import {BiArrowToTop} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['top-container']}>
        <a href="#" className={styles['footer-top']}><BiArrowToTop/></a>
      </div>
      <div className={styles['footer-legal']}>
        <a href="/terms-of-use">Terms of Use</a> | <a href="/privacy-policy">Privacy Policy</a>
      </div>
      <div className={styles['footer-copyright']}>
        &copy; Copyright 2022 Franklin Pearl & The Moon | All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer