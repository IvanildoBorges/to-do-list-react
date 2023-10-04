export interface PropsTaskComponent {
    id: number
    taskText: string
    tasksCompleted: number[]
    setCompleted: React.Dispatch<React.SetStateAction<number[]>>
    removeTask: (id: number, check: boolean) => void
}