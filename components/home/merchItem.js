
import styles from '../../styles/components/home/MerchItem.module.css'
import Image from 'next/image'


const MerchItem = ({ name, price, imgSrc }) => {
  return (
    <article className={styles['merch-item-container']}>
      <Image className={styles['merch-item-image']} src={imgSrc} layout="responsive" objectFit="cover" alt="" />
      <div className={styles['merch-details-container']}>
        <div className={styles['merch-detail']}>{name}</div>
        <div className={styles['merch-detail', 'merch-price']}>${price}</div>
      </div>
    </article>
  )
}

export default MerchItem