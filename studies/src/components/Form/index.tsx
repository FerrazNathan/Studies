import React from 'react'
import Button from '../Button'
import styles from './Form.module.scss'

export default function Form() {
	return (
		<form className={styles.newTask}>
			<div className={styles.inputContainer}>
				<label htmlFor='task'>Adicione um novo Estudo</label>
				<input
					type='text'
					name='task'
					id='task'
					placeholder='O que você quer estudar?'
					required
				/>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='time'>Tempo</label>
				<input
					type='time'
					step='1'
					name='time'
					id='time'
					min='00:00:00'
					max='01:30:00'
					required
				/>
			</div>
			<Button />
		</form>
	)
}
