import styles from './ContactUsField.module.scss'

export default function ContactUsField({type, name, placeholder, label, required}) {
	return (
		<div className={styles.inputField}>
			<label htmlFor="username">{label}</label>
			<input className={styles.input}
			       type={type}
			       name={name}
			       id={name}
			       placeholder={placeholder}
			       required={required}
			/>
		</div>
	);
}