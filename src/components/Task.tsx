import { Trash } from "phosphor-react"
import style from "./Task.module.css"
import { PropsTaskComponent } from "../models/PropsTaskComponent"
import { ChangeEvent, useState } from "react"

export function TaskItem({ 
    id,
    taskText,
    tasksCompleted,
    setCompleted,
    removeTask
}: PropsTaskComponent) {
    const [isChecked, setIsChecked] = useState(false);

    function handleCheckCompletedTask(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.checked) {
            setIsChecked(true)
            setCompleted([...tasksCompleted, id])
        } else {
            const removeCompleted = tasksCompleted.filter(value => value !== id)
            setIsChecked(false)
            setCompleted(removeCompleted)
        }
    }
    
    return (
        <div className={style.taskContainer}>
            <div className={style.checkbox}>
                <input 
                    type="checkbox" 
                    name="checkTask" 
                    id="checkTask" 
                    checked={isChecked}
                    onChange={handleCheckCompletedTask}
                />
            </div>
            <div className={style.boxParagraph}>
                <p className={isChecked ? style.lineThrought : style.paragraph}>
                    {taskText}
                </p>
            </div>
            <div className={style.icon}>
                <Trash 
                    size={16} 
                    onClick={() => removeTask(id, isChecked)} 
                />
            </div>
        </div>
    )
}