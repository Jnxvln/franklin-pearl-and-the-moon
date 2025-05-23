import styles from '../../styles/components/home/Nextup.module.css'
import Image from 'next/image'
import More from '../../components/ui/More'
import NextupSrc from '../../public/home/eventpic_june18-2022-arrow.jpg'
import QRCode from '../../public/home/event-qrcode-arrowbar.png'

import React from 'react';
import dayjs from 'dayjs';

const NextUp = ({ data }) => {

  function formatDate (date) {
    return dayjs(date).format('dddd, MMM D, YYYY')
  }

  return (
    <div className={`${data.hasBkg ? styles['nextup-wrapper'] : styles['nextup-wrapper-noBkg']}`}>
      <section className={styles['nextup-container']}>

        {/* COLUMN - DETAILS */}
        <div className={styles['nextup-details-container']}>

          {/* HEADER */}
          <header className={styles['nextup-header']}>
            <h2 className={styles['header-title']}>NEXT UP</h2>
          </header>

          {/* EVENT DETAILS CONTAINER */}
          <div className={styles['event-root']}>
            <div className={styles['event-container']}>
              <div className={styles['event-location']}>{data.location}</div>
              <div className={styles['event-date']}>{ formatDate(data.eventDate) }</div>
              <div className={styles['event-extra']}>              
                <div className={styles['event-begins']}>Begins @ {data.begins}</div>

                { data.coverCharge > 0 && (
                  <div className={styles['event-cover']}>${data.coverCharge} cover</div>
                )}
              </div>
            </div>
            
            {/* QR CODE */}
            <div className={styles['qrcode-container']}>
              <Image src={QRCode} width={70} height={70} layout="responsive"/>
            </div>
          </div>
        </div>

        {/* COLUMN - IMAGE CONTAINER */}
        <div className={styles['nextup-image-container']}>
          <div className={styles['event-image-wrapper']}>
            <Image className={styles['event-image']} src={NextupSrc} width={150} height={150} layout="responsive" />
          </div>
          <div>
            <h4 className={styles.whosplaying}>WHO'S PLAYING?</h4>
            <ul className={styles['band-list']}>
              { data.performers && data.performers.map((p, index) => <li key={index}>{p}</li>) }
            </ul>
          </div>
        </div>
      </section>
      
      {/* MORE EVENTS */}
      { data.showMore ? (<div>
        <More verb="View" color="white" href="/shows" />
      </div>) : null }

      <br/>
      
    </div>
  )
}

export default NextUp