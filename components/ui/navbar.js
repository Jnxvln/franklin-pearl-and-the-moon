import React from 'react';
import styles from '../../styles/components/nav/Nav.module.css'
import Link from 'next/link'

const navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles['nav-list']}>
          <Link href="/">Home</Link>
          <Link href="/music">Music</Link>
          <Link href="/shows">Shows</Link>
          <a href="https://www.redbubble.com/people/franklinpearl/shop" target="_blank" rel="noreferrer">Merch</a>
          <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default navbar