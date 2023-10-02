import { PlusCircle } from "phosphor-react" 
import { PropsNewTask } from "../models/PropsNewTask"
import style from "./NewTask.module.css"

export function NewTask({ tasksList }: PropsNewTask) {
    
    return (
        <form 
            className={style.newTask} 
        >
            <input 
                type="text" 
                name="input-task" 
                id="input-task"
                placeholder="Adicione uma nova tarefa..." 
                required
            />
            <footer>
                <button 
                    disabled 
                    type="submit"
                >
                    Criar <PlusCircle size={20} />
                </button>
            </footer>
        </form>
    )
}