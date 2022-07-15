import React from 'react'
import Item from './Item'
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
            <Item key={idx}
              {...item}
            />
          ))
        }
      </ul>
    </aside>
  )
}
