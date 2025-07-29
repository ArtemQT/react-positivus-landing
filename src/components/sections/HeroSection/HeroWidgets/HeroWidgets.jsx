import styles from './HeroWidgets.module.scss';

import widget1 from '@assets/images/hero-widgets/1.svg';
import widget2 from '@assets/images/hero-widgets/2.svg';
import widget3 from '@assets/images/hero-widgets/3.svg';
import widget4 from '@assets/images/hero-widgets/4.svg';
import widget5 from '@assets/images/hero-widgets/5.svg';
import widget6 from '@assets/images/hero-widgets/6.svg';

export default function HeroWidgets() {

	const widgetsList = [widget1, widget2, widget3, widget4, widget5, widget6];

	return (
		<ul className={styles.widgets__list}>
			{
				widgetsList.map((src) => (
					<li key={src} className={styles.widgets__item}>
						<img src={src}
						     alt=""
						     width="124"
						     height="48"
						/>
					</li>
				))
			}
		</ul>
	);
}