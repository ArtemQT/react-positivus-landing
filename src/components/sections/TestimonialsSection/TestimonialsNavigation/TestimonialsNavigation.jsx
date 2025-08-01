import styles from './TestimonialsNavigation.module.scss'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import leftArrowIcon from "@assets/icons/arrow-left.svg"
import rightArrowIcon from "@assets/icons/arrow-right.svg"

export default function TestimonialsNavigation() {
	return (
		<div className={styles.swiperNavigationWrapper}>
			<button className="testimonials-swiper-button-prev">
				<img src={leftArrowIcon} alt=""/>
			</button>

			<div className='testimonials-swiper-pagination'></div>

			<button className="testimonials-swiper-button-next">
				<img src={rightArrowIcon} alt=""/>
			</button>
		</div>
	);
}