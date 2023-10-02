import style from './App.module.css'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header />
      <div className={style.app}>
        <strong>Hello world!</strong>
      </div>
    </>
  )
}

export default App