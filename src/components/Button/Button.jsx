import styles from './Button.module.scss'

export default function Button({ children, variant, mobileHidden, className }) {

	const classNames = [
		className,
		styles.button,
		variant && styles[`button--${variant}`],
		mobileHidden && `mobile-hidden`,
	].filter(Boolean).join(' ');

	return (
		<button className={classNames}>
			{children}
		</button>
	);
}