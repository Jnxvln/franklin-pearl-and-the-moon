import styles from '../../styles/components/home/Intro.module.css'

import Image from 'next/image'
import More from '../ui/More'

// Avatars
import avatarDylan from '../../public/home/avatar_dylan.png'
import avatarWill from '../../public/home/avatar_will.png'
import avatarReggie from '../../public/home/avatar_reggie.png'
import avatarJustin from '../../public/home/avatar_justin.png'

import PlayButton from '../../public/home/button_play.png'

const intro = () => {
  return (
    <section className={styles['section-intro']}>
      {/* Text */}
      <article className={styles['intro-text']}>
        <p className={styles['intro-leadText']}>We&apos;re just a group of friends who love to play music. With modest Americana influence and jazzy inspirations, we&apos;re known as Franklin Pearl & The Moon</p>
        {/* <p className={styles['intro-funny']}>Who is Franklin?</p> */}
      </article>

      {/* AVATARS */}
      <div className={styles['intro-avatars']}>
        <div className={styles['avatar-container']}>
          <Image src={avatarDylan} width={75} height={75} />
        </div>
        <div className={styles['avatar-container']}>
          <Image src={avatarWill} width={75} height={75} />
        </div>
        <div className={styles['avatar-container']}>
          <Image src={avatarReggie} width={75} height={75} />
        </div>
        <div className={styles['avatar-container']}>
          <Image src={avatarJustin} width={75} height={75} />
        </div>
      </div>

      {/* TOP TWO FEATURED SONGS */}
      <div className={styles['intro-featSongs']}>
        <div className={styles['featSong']}>
          <Image className={styles['play-button']} src={PlayButton} width={50} height={50} />
          The C Song
        </div>
        <div className={styles['featSong']}>
          <Image className={styles['play-button']} src={PlayButton} width={50} height={50} />
          Rain Showers
        </div>
      </div>

      <br/>
      <br/>

      <More verb="Listen to" />
    </section>
  )
}

export default intro