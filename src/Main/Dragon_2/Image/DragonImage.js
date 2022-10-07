import style from '../../DragonImage.module.css'
import {useState} from "react";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";

const DragonImage = (props) => {
    const [current, setCurrent] = useState(0)
    const length = props.img.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(props.img) || props.img.length <= 0) {
        return null;
    }


    return (
        <section className={style.body}>
            <div className={style.slider}>
                <FaArrowAltCircleLeft className={style.leftArrow} onClick={prevSlide}/>

                {props.img.map((image, index) => {
                    return (
                        <div className={index === current ? `${style.slideActive}` : `${style.slide}`}>
                            {index === current && (<img src={image} alt='dragon' className={style.image} />)}
                        </div>
                    )
                })}

                <FaArrowAltCircleRight className={style.rightArrow} onClick={nextSlide}/>

            </div>
        </section>
    )
}

export default DragonImage;