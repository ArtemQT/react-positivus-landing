import styles from './Logo.module.scss';

import logoLight from '@assets/icons/logo-light.svg'
import logoDark from '@assets/icons/logo-dark.svg'

export default function Logo({ color, ...props }) {
	return (
		<a href='#' className={styles.logo}>
			<img src={color === 'dark' ? logoDark : logoLight }
			     alt="Site logo"
			     {...props}
			/>
		</a>
	);
}