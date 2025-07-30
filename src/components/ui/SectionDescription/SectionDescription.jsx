import styles from './SectionDescription.module.scss'

export default function SectionDescription({children}) {
	return <p className={styles.sectionDescription}>{children}</p>
}