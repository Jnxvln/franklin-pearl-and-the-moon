import styles from '../../styles/components/nav/Nav.module.css'

const navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles['nav-list']}>
        <div className={styles['nav-list-item']}>
          <a href="/" style={{ textDecoration: 'none', color: 'white' }}>Home</a>
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