import styles from './Footer.module.scss'

import FooterNav from "@components/layout/Footer/FooterNav/FooterNav.jsx";
import FooterContactUsInfo from "@components/layout/Footer/FooterContactUsInfo/FooterContactUsInfo.jsx";
import FooterSubscribeForm from "@components/layout/Footer/FooterSubscribeForm/FooterSubscribeForm.jsx";
import FooterPolicy from "@components/layout/Footer/FooterPolicy/FooterPolicy.jsx";

export default function Footer() {
	return (
		<footer className={`${styles.footer} container`}>
			<div className={`${styles.footerInner}`}>
				<FooterNav/>

				<div className={styles.footerBody}>
					<FooterContactUsInfo/>
					<FooterSubscribeForm/>
				</div>

				<FooterPolicy/>
			</div>
		</footer>
	);
}