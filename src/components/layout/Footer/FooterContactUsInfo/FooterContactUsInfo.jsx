import styles from './FooterContactUsInfo.module.scss'

export default function FooterContactUsInfo() {
	return (
		<div className={styles.contactUsWrapper}>
			<h2 className={`${styles.contactUsTitle} h4 puddleBgAccent`}>
				Contact us:
			</h2>
			<address className={styles.contactUsAddress}>
				<p>Email: <a href="mailto: info@positivus.com">info@positivus.com</a></p>
				<p>Phone: <a href="tel:555-567-8901">555-567-8901</a></p>
				<p>
					Address: 1234 Main St <br/>
					Moonstone City, Stardust State 12345
				</p>
			</address>
		</div>
	);
}