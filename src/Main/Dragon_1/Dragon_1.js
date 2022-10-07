import style from "./Dragon_1.module.css"
import MainDescription from "./Description/MainDescription";
import MainImage from "./Images/MainImage";

const DragonOne = (props) => {

    return (
        <div className={style.body}>
            <MainImage img={props.props.flickr_images} />
            <MainDescription data={props.props} />
        </div>
    )
}

export default DragonOne