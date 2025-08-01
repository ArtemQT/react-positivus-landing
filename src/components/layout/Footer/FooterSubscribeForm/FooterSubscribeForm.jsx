import styles from './FooterSubscribeForm.module.scss'
import Button from "@components/ui/Button/Button.jsx";

export default function FooterSubscribeForm() {
	return (
		<div className={styles.wrapper}>
			<form className={styles.subscribeForm}>
				<label htmlFor="Email" className='visually-hidden'>Email</label>
				<input className={styles.subscribeInput}
					   type="email"
				       name="subscribe-email"
				       id="Email"
				       placeholder="Email"
				       required
				/>
				<Button type='submit' variant='accent'>
					Subscribe to news
				</Button>
			</form>
		</div>
	);
}