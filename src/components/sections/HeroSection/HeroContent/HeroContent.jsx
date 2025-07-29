import styles from "./HeroContenty.module.scss";

import Button from "@components/ui/Button/Button.jsx";

export default function HeroContent() {
	return (
		<div className={styles.content}>
			<h1 className={styles.content__title}>
				Navigating the digital landscape for success
			</h1>
			<p className={styles.content__description}>
				Our digital marketing agency helps businesses
				grow and succeed online through a range of
				services including SEO, PPC, social media marketing,
				and content creation.
			</p>
			<Button variant='dark' className={styles.content__button}>
				Book a consultation
			</Button>
		</div>
	);
}