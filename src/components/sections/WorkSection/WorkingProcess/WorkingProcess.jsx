import styles from './WorkingProcess.module.scss'
import WorkItem from "@components/sections/WorkSection/WorkItem/WorkItem.jsx";

export default function WorkingProcess() {

	const accordionList = [
		{
			title: 'Consultation',
			description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
		},
		{
			title: 'Research and Strategy Development',
			description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
		},
		{
			title: 'Implementation',
			description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
		},
		{
			title: 'Monitoring and Optimization',
			description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
		},
		{
			title: 'Reporting and Communication',
			description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
		},
		{
			title: 'Continual Improvement',
			description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
		},
	]

	return (
		<ul className={styles.accordionList}>
			{
				accordionList.map((item, index) => (
					<WorkItem key={item.title}
					          title={item.title}
					          description={item.description}
					          index={index}
					/>
				))
			}
		</ul>
	);
}