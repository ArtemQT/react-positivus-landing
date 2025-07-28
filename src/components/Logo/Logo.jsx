import styles from './Logo.module.scss';

import logo from '@assets/images/logo.svg'

export default function Logo(props) {
	return (
		<a href='#' className={styles.logo}>
			<img src={logo}
			     alt="Site logo"
			     {...props}
			/>
		</a>
	);
}