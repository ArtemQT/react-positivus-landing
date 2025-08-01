import styles from './FooterNavBar.module.scss'

export default function FooterNavBar() {
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
		<nav className={styles.footerNav}>
			<ul className={styles.footerNavList}>
				{
					navItems.map(navItem => (
						<li key={navItem.label} className={styles.footerNavItem}>
							<a href={navItem.href} className={styles.footerNavLink}>
								{navItem.label}
							</a>
						</li>
					))
				}
			</ul>
		</nav>
	);
}