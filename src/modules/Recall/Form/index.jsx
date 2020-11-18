import React from 'react';
import styles from '../styles.scss';

export default (props) => {
	const { age, onChange, inputEl } = props

	return (
		<form>
			<input
				id="username"
				required
				type="text"
				placeholder="enter username"
				onChange={onChange}
				value={age}
				ref={inputEl}
			/>
			<br/>
			<div className={styles.crop}>
					<img src="http://localhost:3001/src/public/1.jpg" />
			</div>
			<div className={styles.crop}>
					<img src="http://localhost:3001/src/public/2.jpg" />
			</div>
			<input type='submit'/>
		</form>
	)
}