import style from './Home.module.css'
import HomeDragonOne from "./HomeDragons/HomeDragonOne";
import HomeDragonTwo from "./HomeDragons/HomeDragonTwo";

const Home = (props) => {

    return (
        <div className={style.body}>
            <h1>Dragons</h1>
            <p>choose the dragon you want to learn more about</p>
            <div className={style.content}>
                <HomeDragonOne data={props.props[0].flickr_images[0]}/>
                <HomeDragonTwo data={props.props[1].flickr_images[0]}/>
            </div>
        </div>
    )
}

export default Home