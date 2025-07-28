import styles from './MobileMenu.module.scss'

import HeaderNavigation from "@components/HeaderNavigation/HeaderNavigation.jsx";

export default function MobileMenu({onClose}) {
	return (
		<div className={styles.mobileMenu}>
			<button type='button' onClick={onClose}></button>
			<HeaderNavigation isModalMenu={true} />
		</div>
	);
}