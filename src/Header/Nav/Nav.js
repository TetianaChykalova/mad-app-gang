import style from './Nav.module.css'
import {NavLink} from "react-router-dom";

const activeClass = (navData) => (navData.isActive ? `${style.active}` : '');

const Nav = (props) => {
    return (
        <nav className={style.nav}>
            <ul>
                <li>
                    <NavLink className={activeClass} to='/home'>Home</NavLink>
                </li>
                <li>
                    <NavLink className={activeClass} to='/dragon_1'>Dragon 1</NavLink>
                </li>
                <li>
                    <NavLink className={activeClass} to='/dragon_2'>Dragon 2</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav