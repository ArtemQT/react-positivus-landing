import styles from './WorkSection.module.scss'
import SectionHeader from "@components/ui/SectionHeader/SectionHeader.jsx";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle.jsx";
import SectionDescription from "@components/ui/SectionDescription/SectionDescription.jsx";
import WorkingProcess from "@components/sections/WorkSection/WorkingProcess/WorkingProcess.jsx";

export default function WorkSection() {
	return (
		<section className='section container'>
			<SectionHeader>
				<SectionTitle>Our Working Process</SectionTitle>
				<SectionDescription>
					Step-by-Step Guide to. Your <br/>
					Business Goals
				</SectionDescription>
			</SectionHeader>

			<WorkingProcess/>
		</section>
	);
}