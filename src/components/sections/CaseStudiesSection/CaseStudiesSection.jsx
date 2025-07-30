import styles from './CaseStudiesSection.module.scss'

import SectionHeader from "@components/ui/SectionHeader/SectionHeader.jsx";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle.jsx";
import SectionDescription from "@components/ui/SectionDescription/SectionDescription.jsx";
import CaseStudiesContent from "@components/sections/CaseStudiesSection/CaseStudiesContent/CaseStudiesContent.jsx";

export default function CaseStudiesSection() {
	return (
		<section className='section container'>
			<SectionHeader>
				<SectionTitle>Case Studies</SectionTitle>
				<SectionDescription>
					Explore Real-Life Examples of Our Proven Digital Marketing
					Success through Our Case Studies
				</SectionDescription>
			</SectionHeader>

			<CaseStudiesContent/>
		</section>
	);
}