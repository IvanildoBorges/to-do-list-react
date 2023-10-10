export interface PropsTaskComponent {
    id: number
    value: string
    taskText: string
    tasksCompleted: number[]
    setCompleted: React.Dispatch<React.SetStateAction<number[]>>
    removeTask: (id: number, value: string, check: boolean) => void
}