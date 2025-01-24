import React from 'react'
// import './App.css'

function TasksComponent() {
  const data = [
    {
      "task": "Task 1",
      "owner": "Owner 1",
      "discussion": "Discussion 1",
      "status_date": "2025-01-24",
      "status_due": "2025-01-31",
      "%complete": 50,
      "duration": "7 days",
      "priority": "High"
    },
    {
      "task": "Task 2",
      "owner": "Owner 2",
      "discussion": "Discussion 2",
      "status_date": "2025-01-24",
      "status_due": "2025-02-01",
      "%complete": 75,
      "duration": "8 days",
      "priority": "Medium"
    },
    {
      "task": "Task 3",
      "owner": "Owner 3",
      "discussion": "Discussion 3",
      "status_date": "2025-01-24",
      "status_due": "2025-02-02",
      "%complete": 30,
      "duration": "9 days",
      "priority": "Low"
    },
    {
      "task": "Task 4",
      "owner": "Owner 4",
      "discussion": "Discussion 4",
      "status_date": "2025-01-24",
      "status_due": "2025-02-03",
      "%complete": 60,
      "duration": "10 days",
      "priority": "High"
    },
    {
      "task": "Task 5",
      "owner": "Owner 5",
      "discussion": "Discussion 5",
      "status_date": "2025-01-24",
      "status_due": "2025-02-04",
      "%complete": 90,
      "duration": "11 days",
      "priority": "Medium"
    },
    {
      "task": "Task 6",
      "owner": "Owner 6",
      "discussion": "Discussion 6",
      "status_date": "2025-01-24",
      "status_due": "2025-02-05",
      "%complete": 20,
      "duration": "12 days",
      "priority": "Low"
    },
    {
      "task": "Task 7",
      "owner": "Owner 7",
      "discussion": "Discussion 7",
      "status_date": "2025-01-24",
      "status_due": "2025-02-06",
      "%complete": 40,
      "duration": "13 days",
      "priority": "High"
    },
    {
      "task": "Task 8",
      "owner": "Owner 8",
      "discussion": "Discussion 8",
      "status_date": "2025-01-24",
      "status_due": "2025-02-07",
      "%complete": 70,
      "duration": "14 days",
      "priority": "Medium"
    },
    {
      "task": "Task 9",
      "owner": "Owner 9",
      "discussion": "Discussion 9",
      "status_date": "2025-01-24",
      "status_due": "2025-02-08",
      "%complete": 10,
      "duration": "15 days",
      "priority": "Low"
    },
    {
      "task": "Task 10",
      "owner": "Owner 10",
      "discussion": "Discussion 10",
      "status_date": "2025-01-24",
      "status_due": "2025-02-09",
      "%complete": 80,
      "duration": "16 days",
      "priority": "High"
    }
  ]
  
  return (
    <>
      <table>
        <thead>

        <tr>
          <th className='m-6'>task</th>
          <th className='m-2'>owner</th>
          <th className='m-2'>discussion</th>
          <th className='m-2'>status date</th>
          <th className='m-2'>status due</th>
          <th className='m-2'>%complete</th>
          <th className='m-2'>duration</th>
          <th className='m-2'>priority</th>
        </tr>
        </thead>
        <tbody>

          {
            data.map((data,index)=> (
              <tr key={index}>
              <td>{data.task}</td>
              <td>{data.owner}</td>
              <td>{data.discussion}</td>
              <td>{data.status_date}</td>
              <td>{data.status_due}</td>
              <td>{data['%complete']}</td>
              <td>{data.duration}</td>
              <td className='m-12'>{data.priority}</td>
        </tr>
            ))
          }
          </tbody>
      </table>
    </>
  )
}

export default TasksComponent