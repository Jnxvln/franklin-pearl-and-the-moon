import styles from '../../styles/components/nav/Nav.module.css'
import Link from 'next/link'

const navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles['nav-list']}>
          <Link href="/">Home</Link>
          <Link href="/music">Music</Link>
          <Link href="/shows">Shows</Link>
          <Link href="/merch">Merch</Link>
          <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default navbar