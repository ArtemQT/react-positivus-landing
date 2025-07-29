import styles from './BurgerButton.module.scss';

export default function BurgerButton({onClick}) {
	return (
		<button className={`${styles.burgerButton} mobile-show`}
		        aria-label="Open menu"
		        onClick={onClick}
		>
		</button>
	);
}