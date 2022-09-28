import style from './HomeDragon.module.css'
import {NavLink} from "react-router-dom";

const HomeDragonOne = (props) => {
    return (
        <div className={style.content}>
            <NavLink to='/dragon_1'>
                <img src={props.data} alt=""/>
            </NavLink>
        </div>
    )
}

export default HomeDragonOne