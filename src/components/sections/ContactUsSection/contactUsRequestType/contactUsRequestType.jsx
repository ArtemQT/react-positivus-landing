import styles from './contactUsRequestType.module.scss'
import {useState} from "react";

export default function ContactUsRequestType() {
	const [checkedValue, setCheckedValue] = useState('Say Hi');

	const onChangeCheckedValue = (event) => {
		setCheckedValue(event.target.value);
	}

	return (
		<fieldset className={styles.requestTypeWrapper}>
			<legend className='visually-hidden'>Request Type</legend>

			<label className={styles.radioBoxLabel}>
				<input className={`${styles.radioBox} visually-hidden`}
				       type="radio"
				       name="request-type"
				       value="Say Hi"
				       onChange={onChangeCheckedValue}
				       checked={checkedValue === 'Say Hi'}
				/>
				<span className={styles.radioBoxCustom}></span>
				<span>Say Hi</span>
			</label>

			<label className={styles.radioBoxLabel}>
				<input className={`${styles.radioBox} visually-hidden`}
				       type="radio"
				       name="request-type"
				       value="Get a Quote"
				       onChange={onChangeCheckedValue}
				       checked={checkedValue === 'Get a Quote'}
				/>
				<span className={styles.radioBoxCustom}></span>
				<span>Get a Quote</span>
			</label>
		</fieldset>
	);
}