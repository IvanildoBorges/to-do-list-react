//import style from './App.module.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'

function App() {
  const tasks: string[] = []

  return (
      <>
        <Header />
        <main>
          <NewTask tasksList={tasks} />
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