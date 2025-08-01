import styles from './Testimonials.module.scss'
import SectionHeader from "@components/ui/SectionHeader/SectionHeader.jsx";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle.jsx";
import SectionDescription from "@components/ui/SectionDescription/SectionDescription.jsx";
import TestimonialsContent from "@components/sections/TestimonialsSection/TestimonialsContent/TestimonialsContent.jsx";

export default function TestimonialsSection() {
	return (
		<section className='section container'>
			<SectionHeader>
				<SectionTitle>Testimonials</SectionTitle>
				<SectionDescription>
					Hear from Our Satisfied Clients: Read Our Testimonials
					to Learn More about Our Digital Marketing Services
				</SectionDescription>
			</SectionHeader>

			<TestimonialsContent />
		</section>
	);
}