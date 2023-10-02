import iconListEmpty from "./assets/Clipboard.png"
import { NewTask } from './components/NewTask'
import { Header } from './components/Header'
import { useState } from 'react'
import style from './App.module.css'

function App() {
  const [tasks, setTasks] = useState([''])

  return (
      <>
        <Header />
        <main className={style.todo}>
          <NewTask tasksList={tasks} setTaskList={setTasks} />
          <div className={style.tasksWrapper}>
            <div className={style.info}>
              <p>Tarefas criadas: 0</p>
              <p>Concluídas: 0</p>
              {/* <InfoTask />
              <InfoTask /> */}
            </div>
            <>
              {tasks.length === 0 || !tasks[0].trim()
                ? <div className={style.empty}>
                    <img src={iconListEmpty} alt="Icone de lista vazia" />
                    <p className={style.bold}>
                      Você ainda não tem tarefas cadastradas<br />
                      <span>Crie tarefas e organize seus itens a fazer</span>
                    </p>
                  </div>
                : <div className={style.full}>
                    {tasks.map((task, index) => {
                      return (
                        <div key={index}>
                          {task}
                        </div>
                      )
                    })}
                  </div>
              }
            </>
          </div>
        </main>
      </>
  )
}

export default App