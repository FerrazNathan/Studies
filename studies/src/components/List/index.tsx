import React from 'react'

export default function List() {

  const tasks = [
    {
      task: 'React',
      time: '02:00:00'
    },
    {
      task: 'JavaScript',
      time: '06:00:00'
    },
    {
      task: 'TypeScript',
      time: '01:30'
    }
  ]

  return (
    <aside>
      <h2>Estudos do Dia</h2>
      <ul>
        {
          tasks.map((item, idx) => (
            <li key={idx}>
              <h3>{item.task}</h3>
              <p>{item.time}</p>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}
