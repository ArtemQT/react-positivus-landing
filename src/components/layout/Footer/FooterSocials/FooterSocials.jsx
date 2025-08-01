import styles from './FooterSocials.module.scss'

import linkedInIcon from '@assets/icons/socials/linkedin.svg'
import facebookIcon from '@assets/icons/socials/facebook.svg'
import TwitterIcon from '@assets/icons/socials/Twitter.svg'

export default function FooterSocials() {

	const socialsList = [
		linkedInIcon,
		facebookIcon,
		TwitterIcon
	]

	return (
		<ul className={styles.socialsList}>
			{
				socialsList.map((social,index) => (
					<li key={index} className={styles.socialsItem}>
						<a href='#' className={styles.socialsLink}>
							<img src={social}
							     alt=""
							     width="30"
							     height="30"
							     loading="lazy"
							/>
						</a>
					</li>
				))
			}
		</ul>
	);
}