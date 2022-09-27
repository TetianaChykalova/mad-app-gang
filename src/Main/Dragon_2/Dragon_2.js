import style from "./Dragon_2.module.css"
import DragonImage from "./Image/DragonImage";
import DragonDescription from "./Description/DragonDescription";


const DragonTwo = (props) => {

    return (
        <div className={style.body}>
            <div>
                <DragonImage img={props.data.flickr_images} />
            </div>
            <div>
                <DragonDescription data={props.data} />
            </div>
        </div>
    )
}

export default DragonTwo