import style from './MainDescription.module.css';

const MainDescription = (props) => {

    return (
        <div className={style.wrapper}>
            <div>
                <h1 className={style.name}>{props.data.name}</h1>
            </div>
            <div>
                <p className={style.description}>
                    {props.data.description}
                </p>
            </div>
            <div className={style.link}>
                <a target='_blank' rel="noreferrer" href={props.data.wikipedia}>link to more information</a>
            </div>
            <div className={style.additional}>
                <p className={style.description}>
                    Additional parameters:
                </p>
                <ul className={style.list}>
                    <li className={style.item}>height : {props.data.height_w_trunk.meters}meters</li>
                    <li className={style.item}>weight : {props.data.launch_payload_mass.kg}kg</li>
                    <li className={style.item}>the first flight : {props.data.first_flight}</li>
                </ul>
            </div>
        </div>
    )
}

export default MainDescription;