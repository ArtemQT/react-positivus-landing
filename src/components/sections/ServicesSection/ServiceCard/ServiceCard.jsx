import styles from './ServiceCard.module.scss'

export default function ServiceCard({span1, span2, titleColor, img, arrowLinkImg, linkColor}) {

	const spanClassname = `${titleColor === 'accent' ? 'puddleBgAccent' : 'puddleBgDefault' }`;
	return (
		<div className={styles.cardWrapper}>
			<div className={styles.cardBody}>
				<h3 className={styles.cardTitle}>
					<span className={spanClassname}>{span1}</span>
					<br/>
					<span className={spanClassname}>{span2}</span>
				</h3>
				<a className={styles.cardLink} href="#">
					<img src={arrowLinkImg}
						 alt=""
					     width='41'
					     height='41'
					     loading="lazy"
					/>
					<span className={linkColor === 'dark' ? styles.dark : styles.light }>Learn More</span>
				</a>
			</div>
			<img className={styles.cardBanner}
				 src={img}
			     alt=""
			     width="210"
			     height="190"
			     loading="lazy"
			/>
		</div>
	);
}