import styles from './ServicesSection.module.scss'
import SectionTitle from "@components/ui/SectionTitle/SectionTitle.jsx";
import SectionDescription from "@components/ui/SectionDescription/SectionDescription.jsx";
import SectionHeader from "@components/ui/SectionHeader/SectionHeader.jsx";
import ServiceCard from "@components/sections/ServicesSection/ServiceCard/ServiceCard.jsx";
import ServiceList from "@components/sections/ServicesSection/ServiceList/ServiceList.jsx";
import ServiceContact from "@components/sections/ServicesSection/ServiceContact/ServiceContact.jsx";

export default function ServicesSection() {
	return (
		<section className='section container'>
			<SectionHeader>
				<SectionTitle>Services</SectionTitle>
				<SectionDescription>
					At our digital marketing agency, we offer a range of services to
					help businesses grow and succeed online. These services include:
				</SectionDescription>
			</SectionHeader>

			<ServiceList />

			<ServiceContact />
		</section>
	);
}