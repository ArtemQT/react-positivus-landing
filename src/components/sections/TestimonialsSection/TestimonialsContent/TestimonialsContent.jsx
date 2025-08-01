import styles from './TestimonialsContent.module.scss'


import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";

import TestimonialCard from "@components/sections/TestimonialsSection/TestimonialCard/TestimonialCard.jsx";
import TestimonialsNavigation
	from "@components/sections/TestimonialsSection/TestimonialsNavigation/TestimonialsNavigation.jsx";

import paginationBulletIcon from "@assets/icons/pagination-star-bullet.svg"

export default function TestimonialsContent() {

	const testimonialsList = [
		{
			author: 'John Smith',
			post: 'Marketing Director at XYZ Corp',
			testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
		},
		{
			author: 'Jane Doe',
			post: 'Marketing Director at XYZ Corp',
			testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
		},
		{
			author: 'Michael Brown',
			post: 'Marketing Director at XYZ Corp',
			testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
		},
		{
			author: 'Emily Johnson',
			post: 'Marketing Director at XYZ Corp',
			testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
		},
		{
			author: 'Brian Williams',
			post: 'Marketing Director at XYZ Corp',
			testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."'
		},
	]

	const swiperProps = {
		modules: [Navigation, Pagination, Autoplay],

		navigation: {
			prevEl: '.testimonials-swiper-button-prev',
			nextEl: '.testimonials-swiper-button-next'
		},

		pagination: {
			el: `.testimonials-swiper-pagination`,
			clickable: true,
			renderBullet: (index, className) => (
				`<span class="${className} testimonials-swiper-pagination-bullet">
        <img src=${paginationBulletIcon} alt="">
      </span>`
			)
		},

		spaceBetween: 50,
		centeredSlides: true,
		slidesPerView: 'auto',

		breakpoints: {
			0: {

				spaceBetween: 20,
			},
			1024: {
				spaceBetween: 50,
			}
		}
	}


	return (
		<div className={styles.testimonialsWrapper}>
			<Swiper {...swiperProps} style={{ margin: 0 }}>
				{
					testimonialsList.map((testimonial, index) => (
						<SwiperSlide key={index} className={`${styles.swiperCustomSlide} swiper-slide`}>
							<TestimonialCard {...testimonial} />
						</SwiperSlide>
					))
				}
			</Swiper>

			<TestimonialsNavigation/>
		</div>

	);
}