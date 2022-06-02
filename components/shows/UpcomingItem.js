import styles from '../../styles/components/shows/Shows.module.css'
import Image from 'next/image'
// import img_Placeholder from '../../public/home/temp-upcoming.png'

const UpcomingItem = ({ imgSrc, location, date, time, coverCharge }) => {
  return (
    <div className={styles['upcoming-list-item']}>
      <div className={styles['upcoming-list-image-container']}>
        <Image src={imgSrc} alt="Placeholder" width={150} height={150} layout="intrinsic" objectFit="cover" />
      </div>
      <div className={styles['upcoming-list-details-container']}>
        <div>
          <div className={styles['upcoming-detail-title']}>{location}</div>
        </div>
        <div className={styles['upcoming-detail-date']}>
          {date}
        </div>
        <div className={styles['upcoming-detail-misc']}>
          Begins @ {time}, ${coverCharge} cover
        </div>
      </div>
    </div>
  )
}

export default UpcomingItem