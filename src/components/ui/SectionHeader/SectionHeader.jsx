import styles from './SectionHeader.module.scss'

export default function SectionHeader({children}) {
	return (
		<header className={styles.sectionHeader}>
			{children}
		</header>
	);
}