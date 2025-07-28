import styles from './HeaderNavigation.module.scss'

export default function HeaderNavigation({isModalMenu}) {

	const navItems = [
		{
			href: '#',
			label: "About us",
		},
		{
			href: '#',
			label: "Services",
		},
		{
			href: '#',
			label: "Use Cases",
		},
		{
			href: '#',
			label: "Pricing",
		},
		{
			href: '#',
			label: "Blog",
		}
	]

	return (
		<nav className={`${ isModalMenu ? styles.header__navModal : `${styles.header__nav} mobile-hidden`}`}>
			<ul className={`${ isModalMenu ? styles.header__navModalList : styles.header__navList}`}>
				{
					navItems.map((navItem, index) =>
						<li key={index} className={styles.header__navItem}>
							<a href={navItem.href}
							   className={styles.header__navLink}
							>
								{navItem.label}
							</a>
						</li>
					)
				}
			</ul>
		</nav>
	);
}