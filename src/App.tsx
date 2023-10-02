//import style from './App.module.css'
import { useState } from 'react'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'

function App() {
  const [tasks, setTasks] = useState([""])

  return (
      <>
        <Header />
        <main>
          <NewTask tasksList={tasks} setTaskList={setTasks} />
          {tasks.map((task, index) => {
            return (
              <div key={index}>
                {task}
              </div>
            )
          })}
        </main>
      </>
  )
}

export default App