import styles from './CaseStudiesContent.module.scss'

import CaseStudyCard from "@components/sections/CaseStudiesSection/CaseStudyCard/CaseStudyCard.jsx";
import CaseStudiesDesktopList
	from "@components/sections/CaseStudiesSection/CaseStudiesDesktopList/CaseStudiesDesktopList.jsx";

import {useMediaQuery} from "react-responsive";
import CaseStudiesMobileList
	from "@components/sections/CaseStudiesSection/CaseStudiesMobileList/CaseStudiesMobileList.jsx";

export default function CaseStudiesContent() {

	const isLaptop = useMediaQuery({query: '(max-width: 1024px)'});

	const caseStudiesList = [
		'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
		'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
		'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.'
	];

	return (
		<>
			{
				isLaptop ?
					<CaseStudiesMobileList caseStudiesList={caseStudiesList}/>
					:
					<CaseStudiesDesktopList caseStudiesList={caseStudiesList}/>
			}
		</>
	)
}