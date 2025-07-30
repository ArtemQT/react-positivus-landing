import styles from "./CaseStudiesDesktopList.module.scss";

import CaseStudyCard from "@components/sections/CaseStudiesSection/CaseStudyCard/CaseStudyCard.jsx";

export default function CaseStudiesDesktopList({caseStudiesList}) {
	return (
		<ul className={styles.studiesList}>
			{
				caseStudiesList.map((studyCase, index) =>
					<CaseStudyCard key={index} description={studyCase}/>
				)
			}
		</ul>
	);
}