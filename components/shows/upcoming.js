import styles from '../../styles/components/shows/Shows.module.css'
import UpcomingItem from '../../components/shows/UpcomingItem'
import Image from 'next/image'

import img_Placeholder from '../../public/home/temp-upcoming.png'

const Upcoming = () => {
  return (
    <section className={styles['upcoming-container']}>
      <div className={styles['upcoming-borderTop']}></div>
      <div className={styles['upcoming-borderBottom']}></div>
      <h1 className={styles['upcoming-title']}>Upcoming Events</h1>

      <div className={styles['upcoming-list-container']}>
        <br/><br/><br/>
        {/* ITEM 1 */}
        <UpcomingItem imgSrc={img_Placeholder} location="Arrow Bar" date="Sat. June 18th, 2022" time="8PM" coverCharge={5} />
        <UpcomingItem imgSrc={img_Placeholder} location="Hopkins Icehouse" date="Fri. Jul ??th, 2022" time="9PM" coverCharge={8} />
        <UpcomingItem imgSrc={img_Placeholder} location="Zapata's" date="Sat. Sept ??th, 2022" time="8:30PM" coverCharge={0} />
        <UpcomingItem imgSrc={img_Placeholder} location="Arrow Bar" date="Sat. Oct ??th, 2022" time="9PM" coverCharge={5} />
      </div>
    </section>
  )
}

export default Upcoming