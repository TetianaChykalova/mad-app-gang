import style from './Header.module.css';
import Nav from "./Nav/Nav";

const Header = (props) => {
    return (
        <div className={style.body}>
            <Nav/>
        </div>
    )
}

export default Header;