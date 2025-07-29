import styles from './Header.module.scss';

import Logo from "@components/layout/Header/Logo/Logo.jsx";
import HeaderNavigation from "@components/layout/Header/HeaderNavigation/HeaderNavigation.jsx";
import Button from "@components/ui/Button/Button.jsx";
import BurgerButton from "@components/layout/Header/BurgerButton/BurgerButton.jsx";
import MobileMenu from "@components/layout/Header/MobileMenu/MobileMenu.jsx";

import {createPortal} from "react-dom";
import {useState} from "react";

export default function Header() {

	const [ isOpenModal, setIsOpenModal ] = useState(false);

	return (
		<header className={`${styles.header} container`}>
			<Logo width="220" height="36" />
			<HeaderNavigation isModalMenu={false} />
			<Button mobileHidden={true} className={styles.headerButton}>Request a quote</Button>

			<BurgerButton onClick={ () => setIsOpenModal(true) } />
			{ isOpenModal &&
				createPortal(<MobileMenu onClose={ () => setIsOpenModal(false) }/>, document.body)
			}
		</header>
	);
}