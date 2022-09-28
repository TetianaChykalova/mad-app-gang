import style from './HomeDragon.module.css'
import {NavLink} from "react-router-dom";

const HomeDragonTwo = (props) => {
    return (
        <div className={style.content}>
            <NavLink to='/dragon_2'>
                <img src={props.data} alt=""/>
            </NavLink>
        </div>
    )
}

export default HomeDragonTwo