import styles from './ContactUsSection.module.scss'

import SectionHeader from "@components/ui/SectionHeader/SectionHeader.jsx";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle.jsx";
import SectionDescription from "@components/ui/SectionDescription/SectionDescription.jsx";
import ContactUsContent from "@components/sections/ContactUsSection/ContactUsContent/ContactUsContent.jsx";

export default function ContactUsSection() {
	return (
		<section className='section container'>
			<SectionHeader>
				<SectionTitle>Contact Us</SectionTitle>
				<SectionDescription>
					Connect with Us: Let's Discuss Your<br/>
					Digital Marketing Needs
				</SectionDescription>
			</SectionHeader>

			<ContactUsContent/>
		</section>
	);
}