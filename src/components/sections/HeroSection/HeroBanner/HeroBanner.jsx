import heroBannerImg from "@assets/images/hero-banner.svg";

export default function HeroBanner() {
	return (
		<img src={heroBannerImg}
		     alt="banner"
		     width="600"
		     height="515"
		/>
	);
}