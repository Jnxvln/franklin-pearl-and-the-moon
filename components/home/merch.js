import styles from '../../styles/components/home/Merch.module.css'
import Image from 'next/image'
import More from '../../components/ui/More'
import MerchItem from '../../components/home/merchItem'

// MerchItem images 
import img_MerchShirt from '../../public/home/temp-tshirt1.jpg'
import img_MerchPhone from '../../public/home/temp-phonecase1.jpg'
import img_MerchMagnet from '../../public/home/temp-magnet1.jpg'

const img_Moon = require('../../public/home/moon.png')

const Merch = () => {
  return (
    <section className={styles['merch-container']}>
      <div className={styles['moon-container']}>
        <Image className={styles['image-moon']} src={img_Moon} alt="" />
      </div>
      <header>
        <h1 className={styles['merch-title']}>Latest <em className={styles['merch-title-em']}>Merch</em></h1>
      </header>

      <p className={styles['merch-slogan']}>We like to make cool stuff for you, check out our latest ideas</p>
      
      <div className={styles['merch-items-container']}>
        <MerchItem name="T-Shirts" price={22} imgSrc={img_MerchShirt} />
        <MerchItem name="Phone Cases" price={30} imgSrc={img_MerchPhone} />
        <MerchItem name="Magnets" price={6} imgSrc={img_MerchMagnet} />
      </div>

      <div>
        <More verb="View" color="white" />
      </div>

      <div className={styles['merch-borderBottom-thick']}></div>
      <div className={styles['merch-borderBottom-thin']}></div>
    </section>
  )
}

export default Merch