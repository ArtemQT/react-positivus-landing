import styles from './ServiceContact.module.scss'

import contactBanner from '@assets/images/contact-banner.svg'

import Button from "@components/ui/Button/Button.jsx";

export default function ServiceContact() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapper__body}>
				<h3>
					Let’s make things happen
				</h3>
				<p>
					Contact us today to learn more about how our digital
					marketing services can help your business grow and
					succeed online.
				</p>
				<Button variant='dark'>
					Get your free proposal
				</Button>
			</div>
			<img src={contactBanner}
			     alt=""
			     width="360"
			     height="395"
			     loading="lazy"
			/>

		</div>
	);
}