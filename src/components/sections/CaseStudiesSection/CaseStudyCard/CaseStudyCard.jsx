import styles from './CaseStudyCard.module.scss'

import linkArrow from '@assets/icons/case-studies-arrow.svg'

export default function CaseStudyCard({description}) {
	return (
		<li className={styles.card}>
			<p className={styles.cardDescription}>
				{description}
			</p>

			<a href="#" className={styles.cardLink}>
				Learn more
				<img src={linkArrow}
				     alt=""
				     width="18"
				     height="10"
				     loading='lazy'
				/>
			</a>
		</li>
	);
}