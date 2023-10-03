import { Trash } from "phosphor-react"
import style from "./Task.module.css"

export function TaskItem({ ...props }) {
    return (
        <div key={props.index} className={style.taskContainer}>
            <div className={style.checkbox}>
                <input 
                    type="checkbox" 
                    name="checkTask" 
                    id="checkTask" 
                />
            </div>
            {props.item}
            <div className={style.icon}>
                <Trash size={16} />
            </div>
        </div>
    )
}