import style from './Home.module.css'
import HomeDragonOne from "./HomeDragons/HomeDragonOne";
import HomeDragonTwo from "./HomeDragons/HomeDragonTwo";

const Home = (props) => {
    return (
        <div className={style.body}>
            <h1>Dragons</h1>
            <p>choose the dragon you want to learn more about</p>
            <HomeDragonOne/>
            <HomeDragonTwo/>
        </div>
    )
}

export default Home