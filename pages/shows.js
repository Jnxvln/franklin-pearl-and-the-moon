import styles from '../styles/components/shows/Shows.module.css'
import Nextup from '../components/home/nextup'
import Upcoming from '../components/shows/upcoming'

const Shows = () => {

  const data = {
    hasBkg: false,
    location: 'Arrow Bar',
    eventDate: new Date(2022, 5, 18),
    begins: '8pm',
    hasCoverCharge: true,
    coverCharge: 5,
    showMore: false,
    performers: [
      "The Devil's Doorbell",
      'Franklin Pearl & The Moon',
      'The Government Bandit',
      'Jim Reed'
    ]
  }

  return (
    <div>
      <section className={styles['shows-container']}>
        <div className={styles['shows-nextup-container']}>
          <Nextup data={data} />
        </div>
      </section>

      <section>
        <Upcoming />
      </section>
    </div>
  )
}

export default Shows