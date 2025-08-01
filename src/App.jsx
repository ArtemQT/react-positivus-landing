import Header from "@components/layout/Header/Header.jsx";
import Main from "@components/layout/Main/Main.jsx";
import HeroSection from "@components/sections/HeroSection/HeroSection.jsx";
import ServicesSection from "@components/sections/ServicesSection/ServicesSection.jsx";
import CaseStudiesSection from "@components/sections/CaseStudiesSection/CaseStudiesSection.jsx";
import WorkSection from "@components/sections/WorkSection/WorkSection.jsx";
import TeamSection from "@components/sections/TeamSection/TeamSection.jsx";
import TestimonialsSection from "@components/sections/TestimonialsSection/TestimonialsSection.jsx";
import ContactUsSection from "@components/sections/ContactUsSection/ContactUsSection.jsx";
import Footer from "@components/layout/Footer/Footer.jsx";

export default function App() {
	return (
		<>
			<Header/>

			<Main>
				<HeroSection/>
				<ServicesSection/>
				<CaseStudiesSection/>
				<WorkSection/>
				<TeamSection/>
				<TestimonialsSection/>
				<ContactUsSection/>
			</Main>

			<Footer/>
		</>
	)
}

