import { TaskItem } from "./components/Task"
import iconListEmpty from "./assets/Clipboard.png"
import { NewTask } from './components/NewTask'
import { Header } from './components/Header'
import { useEffect, useState } from 'react'
import style from './App.module.css'

function App() {
  const [tasks, setTasks] = useState([''])
  const [completedTasks, setCompletedTasks] = useState([0])

  function handleDeleteTask(id: number, check: boolean) {
    const list = tasks.filter( (_, index) => index !== id)
    const completed = completedTasks.filter((_, index) => index !== id)
    
    if (check) {
      
      setTasks(list)
      setCompletedTasks(completed)
    } else {
      confirm('Deseja mesmo apagar essa tarefa?') 
        ? setTasks(list) 
        : null
    }
  }

  useEffect(() => {
    setTasks([])
    setCompletedTasks([])
  }, []);

  return (
      <>
        <Header />
        <main className={style.todo}>
          <NewTask tasksList={tasks} setTaskList={setTasks} />
          <div className={style.tasksWrapper}>
            <div className={style.info}>
              <p>Tarefas criadas: <span>{tasks.length}</span></p>
              <p>Concluídas: <span>{`${completedTasks.length} de ${tasks.length}`}</span></p>
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
                        <TaskItem 
                          key={index}
                          id={index}
                          taskText={task}
                          tasksCompleted={completedTasks}
                          setCompleted={setCompletedTasks}
                          removeTask={handleDeleteTask}
                        />
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