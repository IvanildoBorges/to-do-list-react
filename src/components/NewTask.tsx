import { PlusCircle } from "phosphor-react" 
import { PropsNewTask } from "../models/PropsNewTask"
import style from "./NewTask.module.css"
import { 
    InvalidEvent,
    ChangeEvent,
    FormEvent, 
    useState 
} from "react"

export function NewTask({ tasksList, setTaskList }: PropsNewTask) {
    const [newTask, setNewTask] = useState("");

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        if (newTask.trim()) {
            const tasks = tasksList.filter(task => task !== '');

            setTaskList(() => [...tasks, newTask])
        } else {
            alert("Digite uma tarefa por favor!")
        }
        setNewTask("")
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("")
        setNewTask(event.target.value)
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity("Por favor digite uma tarefa!")
    }

    return (
        <form 
            className={style.newTask} 
            onSubmit={handleCreateNewTask}
        >
            <input 
                type="text" 
                name="input-task" 
                id="input-task"
                placeholder="Adicione uma nova tarefa..." 
                value={newTask}
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                required
            />
            <footer>
                <button 
                    disabled={newTask.length > 0 ? false : true} 
                    type="submit"
                >
                    Criar <PlusCircle size={20} />
                </button>
            </footer>
        </form>
    )
}