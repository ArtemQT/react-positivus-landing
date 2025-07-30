import styles from './CaseStudiesMobileList.module.scss'
import 'swiper/css';

import {Swiper, SwiperSlide} from "swiper/react";

import CaseStudyCard from "@components/sections/CaseStudiesSection/CaseStudyCard/CaseStudyCard.jsx";
import CaseStudyCardMobile from "@components/sections/CaseStudiesSection/CaseStudyCardMobile/CaseStudyCardMobile.jsx";

export default function CaseStudiesMobileList({caseStudiesList}) {
	return (
		<Swiper className={styles.swiper}>
			{
				caseStudiesList.map((studyCase, index) => (
					<SwiperSlide key={index}>
						<CaseStudyCardMobile description={studyCase} />
					</SwiperSlide>
				))
			}
		</Swiper>
	);
}