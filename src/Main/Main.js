import style from './Main.module.css';
import MainImages from "./Images/MainImage";
import MainDescription from "./Description/MainDescription";



const Main = (props) => {
    return (
        <div className={style.body}>
            <MainImages img={props.info.flickr_images}/>
            <MainDescription data={props}/>
        </div>
    )
}

export default Main;