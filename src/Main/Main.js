import style from './Main.module.css';
import Dragon_1 from "./Dragon_1/Dragon_1";
import Dragon_2 from "./Dragon_2/Dragon_2";
import {Route, Routes, BrowserRouter} from "react-router-dom";

const Main = (props) => {
    return (
        <BrowserRouter>
            <div className={style.body}>
                {/*<MainImages img={props.info.flickr_images}/>*/}
                {/*<MainDescription data={props}/>*/}

                <Routes>
                    <Route path='dragon_1' element={<Dragon_1 />}/>
                    <Route path='dragon_2' element={<Dragon_2/>}/>
                </Routes>
            </div>
        </BrowserRouter>

    )
}

export default Main;