import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import Link from 'next/link'
import styles from '../../styles/components/home/ContactUs.module.css'

const ContactUs = () => {

  return (
    <section className={styles['section-contact']}>
      <div className={styles['contact-title-container']}>
        <div className={styles['contact-socials']}>
          <a href="https://www.facebook.com/FranklinPearlAndTheMoon" target="_blank" rel="noreferrer">
            <FaFacebook size="3em" color="#41ACA4" className={styles['social']} />
          </a>
          <FaInstagram size="3em" color="#2E525F" />
          <FaYoutube size="3em" color="#2E525F" />
        </div>
        <h3 className={styles['contact-title']}>
          <Link href="/contact">Contact Us</Link>
        </h3>
      </div>
    </section>
  )
}

export default ContactUs