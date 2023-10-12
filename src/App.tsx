import { Trash, WhatsappLogo } from 'phosphor-react'
import { useEffect, useState } from 'react'
import style from './App.module.css'
import iconListEmpty from "./assets/Clipboard.png"
import { Header } from './components/Header'
import { ModalWhatsapp } from './components/ModalWhatsapp'
import { NewTask } from './components/NewTask'
import { TaskItem } from "./components/Task"

function App() {
  const [tasks, setTasks] = useState([''])
  const [completedTasks, setCompletedTasks] = useState([0])
  const [activeModal, setActiveModal] = useState(false)

  function handleDeleteAllTasks() {
    confirm('Deseja apagar todas as tarefas?')
      ? setTasks(() => {
        localStorage.removeItem('tarefas')
        return []})
      : null
  }

  function handleDeleteTask(id: number, value: string, check: boolean) {
    const list = tasks.filter( (element) => element !== value)
    const completed = completedTasks.filter((element) => element !== id)
    
    if (check) {
      setTasks(() => {
        localStorage.removeItem('tarefas')
        localStorage.setItem('tarefas', JSON.stringify(list))
        const tarefas = localStorage.getItem('tarefas')

        if (tarefas) {
          return JSON.parse(tarefas)
        } else {
          return list
        }
      }) 
      setCompletedTasks(completed)
    } else {
      confirm('Deseja mesmo apagar essa tarefa?') 
        ? setTasks(() => {
          localStorage.removeItem('tarefas')
          localStorage.setItem('tarefas', JSON.stringify(list))
          const tarefas = localStorage.getItem('tarefas')

          if (tarefas) {
            return JSON.parse(tarefas)
          } else {
            return list
          }
        }) 
        : null
    }
  }

  function handleSendTasksWhatsApp() {
    if (activeModal) {
      setActiveModal(false)
    } else {
      setActiveModal(true)
    }
  }

  useEffect(() => {
    const items = localStorage.getItem('tarefas')
    
    if (items) {
      const tarefas = JSON.parse(items);

      setTasks(tarefas)
    } else {
      setTasks([])
    }

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
              {tasks.length === 0
                ? <div className={style.empty}>
                    <img src={iconListEmpty} alt="Icone de lista vazia" />
                    <p className={style.bold}>
                      Você ainda não tem tarefas cadastradas<br />
                      <span>Crie tarefas e organize seus itens a fazer</span>
                    </p>
                  </div>
                : <div className={style.full}>
                    <div className={style.buttons}>
                      <button 
                        className={style.whatsapp} 
                        onClick={handleSendTasksWhatsApp}
                      >
                        Enviar para o WhatsApp
                        <WhatsappLogo size={20} />
                      </button>
                      <button onClick={handleDeleteAllTasks}>
                        Apagar tudo
                        <Trash size={20} />
                      </button>
                    </div>
                    {tasks.map((task, index) => {
                      return (
                        <TaskItem 
                          key={index}
                          id={index}
                          value={task}
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
          {activeModal 
            ? <ModalWhatsapp 
                lista={tasks} 
                isActived={activeModal} 
                setActived={setActiveModal} 
              /> 
            : <></>
          }
        </main>
      </>
  )
}

export default App