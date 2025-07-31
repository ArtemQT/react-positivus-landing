import styles from './TeamCard.module.scss'

import socialIcon from '@assets/icons/linkedin.svg'

export default function TeamCard({ img, name, post, description }) {
	return (
		<li>
			<article className={styles.memberCard}>
				<header className={styles.memberHeader}>
					<img className={styles.memberImg}
						 src={img}
					     alt=""
					     width="105"
					     height="100"
					     loading='lazy'
					/>
					<div className={styles.memberDescription}>
						<h3 className={`${styles.memberTitle} h4`}>{name}</h3>
						<p className={styles.memberPost}>{post}</p>
					</div>
					<a href="" className={styles.memberLink}>
						<img src={socialIcon}
						     alt=""
						     width="35"
						     height="35"
						     loading='lazy'
						/>
					</a>
				</header>
				<p className={styles.memberSummary}>
					{description}
				</p>
			</article>
		</li>
	);
}