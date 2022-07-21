import Button from "../Button";
import Watch from "./Watch";
import styles from './StopWatch.module.scss'

export default function StopWatch() {
	return (
		<>
			<div className={styles.stopwatch}>
				<p className={styles.title}>Escolha um card e inicie o cronômetro</p>
			</div>
			<div className={styles.watchWrapper}>
				<Watch />
			</div>
			<Button text='Começar!' />
		</>
	)
}