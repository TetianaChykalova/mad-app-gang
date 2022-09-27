import style from './DragonImage.module.css'

const DragonImage = (props) => {

    return (

        <div className={style.body}>
            <div className={style.slider}>

                <div className={style.slides}>
                    <div id="slide1">
                        <img className={style.img} src={props.img[0]} alt=""/>
                    </div>
                    <div id="slide2">
                        <img className={style.img} src={props.img[1]} alt=""/>
                    </div>
                    <div id="slide3">
                        <img className={style.img} src={props.img[2]} alt=""/>
                    </div>
                </div>

                <a href="#slide1">1</a>
                <a href="#slide2">2</a>
                <a href="#slide3">3</a>

            </div>
        </div>
    )
}

export default DragonImage;