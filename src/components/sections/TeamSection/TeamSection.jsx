import styles from './TeamSection.module.scss'

import SectionHeader from "@components/ui/SectionHeader/SectionHeader.jsx";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle.jsx";
import SectionDescription from "@components/ui/SectionDescription/SectionDescription.jsx";
import TeamList from "@components/sections/TeamSection/TeamList/TeamList.jsx";
import Button from "@components/ui/Button/Button.jsx";

export default function TeamSection() {
	return (
		<section className='section container'>
			<SectionHeader>
				<SectionTitle>Team</SectionTitle>
				<SectionDescription>
					Meet the skilled and experienced team behind our<br/>
					successful digital marketing strategies
				</SectionDescription>
			</SectionHeader>

			<div className={styles.contentWrapper}>
				<TeamList/>
				<Button variant='dark'>See all team</Button>
			</div>
		</section>
	);
}