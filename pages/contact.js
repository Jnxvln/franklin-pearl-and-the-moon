
import styles from '../styles/components/contact/contact.module.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';


const Contact = () => {
  return (
    <section>
      <div className={styles['contact-background']}>
        <h1 className={styles['contact-title']}>Contact Us</h1>
      </div>

      <div className={styles['contact-form-container']}>
        <p className={styles['contact-form-instructions']}>Reach out via the socials or use the form below</p>

        <div className={styles['contact-socials']}>
          <a href="https://www.facebook.com/FranklinPearlAndTheMoon" target="_blank" rel="noreferrer">
            <FaFacebook size="3em" color="#41ACA4" className={styles['social']} />
          </a>
          <FaInstagram size="3em" color="#6CA09C" />
          <FaYoutube size="3em" color="#6CA09C" />
        </div>

        <div className={styles['contact-formControls-container']}>
          <Form>
            {/* NAME */}
            <Form.Group className={styles['form-group']}>
              <Form.Label className={styles['contact-label']}>Name</Form.Label>
              <Form.Control type="text" aria-label="Name" placeholder="Enter name" />
            </Form.Group>

            {/* EMAIL */}
            <Form.Group className={styles['form-group']}>
              <Form.Label className={styles['contact-label']}>Email</Form.Label>
              <Form.Control type="email" aria-label="Email" placeholder="Enter email" />
            </Form.Group>

            {/* MESSAGE */}
            <Form.Group className={styles['form-group']}>
              <Form.Label className={styles['contact-label']}>Message</Form.Label>
              <Form.Control as="textarea" aria-label="Message" rows={5} placeholder="Enter email" />
            </Form.Group>

            <div className={styles['contact-button-container']}>
              <Button className={styles['contact-sendButton']}>Send</Button>
            </div>

          </Form>
        </div>
      </div>
    </section>
  )
}

export default Contact