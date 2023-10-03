import { Trash } from "phosphor-react"
import style from "./Task.module.css"
import { PropsTaskComponent } from "../models/PropsTaskComponent"

export function TaskItem({ taskText }: PropsTaskComponent) {
    return (
        <div className={style.taskContainer}>
            <div className={style.checkbox}>
                <input 
                    type="checkbox" 
                    name="checkTask" 
                    id="checkTask" 
                />
            </div>
            <div className={style.boxParagraph}>
                <p className={style.paragraph}>{taskText}</p>
            </div>
            <div className={style.icon}>
                <Trash size={16} />
            </div>
        </div>
    )
}