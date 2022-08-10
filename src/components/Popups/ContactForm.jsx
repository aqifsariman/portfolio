import styles from './ContactForm.module.css'
import { Fragment } from 'react'

const ContactForm = () => {
    return(
        <Fragment>
            <div className={styles.header}>Get In Touch</div>
            <form className={styles.form}>
                <input placeholder='Name'/>
                <input placeholder='Email Address'/>
                <textarea placeholder='Message'/>
                <button type='submit'>Send</button>
            </form>
        </Fragment>
    )
}

export default ContactForm