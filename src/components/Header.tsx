import logo from "../../public/rocket.svg"
import style from "./Header.module.css"

export function Header() {
    return (
        <header className={style.header}>
            <img src={logo} alt="Logo To-Do List" />
            <strong>to<span>do</span></strong>
        </header>
    )
}