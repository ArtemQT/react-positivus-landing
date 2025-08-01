import styles from './ContactUsContent.module.scss'

import Button from "@components/ui/Button/Button.jsx";
import ContactUsRequestType from "@components/sections/ContactUsSection/contactUsRequestType/contactUsRequestType.jsx";
import ContactUsField from "@components/sections/ContactUsSection/ContactUsField/ContactUsField.jsx";

import illustration from "@assets/images/contact-us-Illustration.svg"

export default function ContactUsContent() {
	return (
		<div className={styles.wrapper}>
			<form action="" className={styles.contactUsForm}>

				<div className={styles.contactUsFormBody}>

					<ContactUsRequestType/>

					<ContactUsField name='username'
					                type='text'
					                placeholder='Name'
					                label='Name'
					/>

					<ContactUsField name='useremail'
					                type='email'
					                placeholder='Email'
					                label='Email*'
					                required
					/>

					<div className={styles.contactUsFormTextAreaWrapper}>
						<label htmlFor="usermessage">Message*</label>
						<textarea className={styles.contactUsFormMessage}
						          name="usermessage"
						          id="usermessage"
						          placeholder='Message'
						          required
						>
					</textarea>
					</div>
				</div>

				<Button variant='dark' type='submit' >
					Send Message
				</Button>
			</form>

		</div>
	);
}