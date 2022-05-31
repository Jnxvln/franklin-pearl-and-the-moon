import styles from '../../styles/components/nav/Nav.module.css'
import Link from 'next/link'

const navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles['nav-list']}>
        <div className={styles['nav-list-item']}>
          <Link href="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
        </div>
        <div className={styles['nav-list-item']}>Music</div>
        <div className={styles['nav-list-item']}>Shows</div>
        <div className={styles['nav-list-item']}>Merch</div>
        <div onClick={() => {
          window.scrollTo(0, document.body.scrollHeight)
        }} className={styles['nav-list-item']}>Contact</div>
      </div>
    </nav>
  )
}

export default navbar