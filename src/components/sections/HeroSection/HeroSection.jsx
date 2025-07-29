import styles from './HeroSection.module.scss'

import HeroWidgets from "@components/sections/HeroSection/HeroWidgets/HeroWidgets.jsx";
import HeroBanner from "@components/sections/HeroSection/HeroBanner/HeroBanner.jsx";
import HeroContent from "@components/sections/HeroSection/HeroContent/HeroContent.jsx";

export default function HeroSection() {

	return (
		<section className={'container'}>
			<div className={styles.hero__wrapper}>
				<div className={styles.hero__body}>
					<HeroContent />
					<HeroBanner />
				</div>
				<HeroWidgets />
			</div>
		</section>
	);
}