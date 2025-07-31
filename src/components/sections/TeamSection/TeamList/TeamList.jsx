import styles from './TeamList.module.scss'

import teamImg1 from '@assets/images/Team/1.jpg';
import teamImg2 from '@assets/images/Team/2.jpg';
import teamImg3 from '@assets/images/Team/3.jpg';
import teamImg4 from '@assets/images/Team/4.jpg';
import teamImg5 from '@assets/images/Team/5.jpg';
import teamImg6 from '@assets/images/Team/6.jpg';
import TeamCard from "@components/sections/TeamSection/TeamCard/TeamCard.jsx";

export default function TeamList() {

	const teamList = [
		{
			img: teamImg1,
			name: 'John Smith',
			post: 'CEO and Founder',
			description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
		},
		{
			img: teamImg2,
			name: 'Jane Doe',
			post: 'Director of Operations',
			description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills'
		},
		{
			img: teamImg3,
			name: 'Michael Brown',
			post: 'Senior SEO Specialist',
			description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'
		},
		{
			img: teamImg4,
			name: 'Emily Johnson',
			post: 'PPC Manager',
			description: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'
		},
		{
			img: teamImg5,
			name: 'Brian Williams',
			post: 'Social Media Specialist',
			description: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'
		},
		{
			img: teamImg6,
			name: 'Sarah Kim',
			post: 'Content Creator',
			description: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries'
		},
	]
	return (
		<ul className={styles.teamList}>
			{
				teamList.map(member => (
					<TeamCard key={member.name} {...member} />
				))
			}
		</ul>
	);
}