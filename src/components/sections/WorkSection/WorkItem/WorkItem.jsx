import styles from './WorkItem.module.scss'

import {useState} from "react";

export default function WorkItem({title, description, index}) {
	const [isOpen, setIsOpen] = useState(false);

	const openItemClassname = isOpen ? ` ${styles.workItemActive}` : '';
	const onToggleOpen = () => {
		setIsOpen(!isOpen);
	}
	return (
		<li className={`${styles.workItem}${openItemClassname}`}
		    onClick={onToggleOpen}
		>
			<div className={styles.workItemWrapper}>
				<header className={styles.workItemHeader}>

					<h3 className={styles.workItemTitle}>
						<span className={styles.workItemIndex}>
						{`0${index+1}`}
						</span>
						{title}
					</h3>
					<span className={`${styles.workItemConditionSpan}${isOpen ? ` ${styles.workItemConditionSpanActive}` : ''}`}></span>
				</header>
				{
					isOpen && (
						<p className={styles.workItemDescription}>
							{description}
						</p>
					)
				}
			</div>
		</li>
	);
}