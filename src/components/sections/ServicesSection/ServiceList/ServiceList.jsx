import styles from './ServiceList.module.scss'

import service1 from '@assets/images/services/1.svg';
import service2 from '@assets/images/services/2.svg';
import service3 from '@assets/images/services/3.svg';
import service4 from '@assets/images/services/4.svg';
import service5 from '@assets/images/services/5.svg';
import service6 from '@assets/images/services/6.svg';

import arrowAccentImg from '@assets/icons/arrow-accent.svg';
import arrowDefaultImg from '@assets/icons/arrow-default.svg';

import ServiceCard from "@components/sections/ServicesSection/ServiceCard/ServiceCard.jsx";

export default function ServiceList() {

	const serviceList = [
		{
			span1: 'Search engine',
			span2: 'optimization',
			titleColor: 'accent',
			linkColor: 'dark',
			img: service1,
			arrowLinkImg: arrowAccentImg,
		},
		{
			span1: 'Pay-per-click',
			span2: 'advertising',
			titleColor: 'default',
			linkColor: 'dark',
			img: service2,
			arrowLinkImg: arrowAccentImg,
		},
		{
			span1: 'Social media',
			span2: 'marketing',
			titleColor: 'default',
			linkColor: 'light',
			img: service3,
			arrowLinkImg: arrowDefaultImg,
		},
		{
			span1: 'Email',
			span2: 'Marketing',
			titleColor: 'accent',
			linkColor: 'dark',
			img: service4,
			arrowLinkImg: arrowAccentImg,
		},
		{
			span1: 'Content',
			span2: 'Creation',
			titleColor: 'default',
			linkColor: 'dark',
			img: service5,
			arrowLinkImg: arrowAccentImg,
		},
		{
			span1: 'Analytics and',
			span2: 'Tracking',
			titleColor: 'accent',
			linkColor: 'light',
			img: service6,
			arrowLinkImg: arrowDefaultImg,
		}

	]

	return (
		<ul className={styles.serviceList}>
			{
				serviceList.map((service) => (
					<li key={service.img} className={styles.serviceItem}>
						<ServiceCard {...service} />
					</li>
				))
			}
		</ul>
	);
}