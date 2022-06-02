import styles from '../../styles/components/ui/More.module.css'
// import Image from 'next/image'
// import MoreUnderline from '../../public/ui/more_underline.svg';

const More = ({ verb, color, href }) => {
  return (
    <div>
      <a href={href} className={styles['more-linkContainer']}>
        <div className={styles['more-container']} style={{ fontWeight: 'bold' }}>
          { 
            color && color.length > 0 ? 
            <span className={styles.more} style={{ color }}>{verb} More</span> : 
            <span className={styles.more} >{verb} More</span>
          }
          
          <span className={styles.underline} style={{ color }}>.....</span>
        </div>
      </a>
    </div>
  )
}

export default More