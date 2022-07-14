import React from 'react'
import styles from './List.module.scss'

export default function List() {

  const tasks = [
    {
      task: 'React',
      time: '02:00:00'
    },
    {
      task: 'JavaScript',
      time: '06:f00:00'
    },
    {
      task: 'TypeScript',
      time: '01:30'
    }
  ]

  return (
    <aside className={styles.listTasks}>
      <h2>Estudos do Dia</h2>
      <ul>
        {
          tasks.map((item, idx) => (
            <li key={idx} className={styles.item}>
              <h3>{item.task}</h3>
              <p>{item.time}</p>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}
