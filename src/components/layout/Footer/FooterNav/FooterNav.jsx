import styles from './FooterNav.module.scss'
import Logo from "@components/ui/Logo/Logo.jsx";
import FooterNavBar from "@components/layout/Footer/FooterNavBar/FooterNavBar.jsx";
import FooterSocials from "@components/layout/Footer/FooterSocials/FooterSocials.jsx";

export default function FooterNav() {
	return (
		<header className={styles.footerHeader}>
			<Logo width="180" height="29" color='light'/>
			<FooterNavBar/>
			<FooterSocials/>
		</header>
	);
}