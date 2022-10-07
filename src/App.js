import './App.css';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import DragonOne from "./Main/Dragon_1/Dragon_1";
import DragonTwo from "./Main/Dragon_2/Dragon_2";
import {Route, Routes, Navigate} from "react-router-dom";
import {HashRouter} from 'react-router-dom'
// import {BrowserRouter} from 'react-router-dom'
import * as axios from "axios";
import {useEffect, useState} from "react";


function App() {
    const [api, setApi] = useState('');

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v4/dragons')
            .then(response => {
                setApi(response.data)
            })
    },[])

    return (
        <HashRouter>
            <div className='container'>
                <Header />
                <div className='main'>
                    <Routes>
                        <Route path='/home' element={api !== '' && <Home props={api}/>} />
                        <Route path='/dragon_1' element={api !== '' && <DragonOne props={api[0]}/>} />
                        <Route path='/dragon_2' element={api !== '' && <DragonTwo props={api[1]}/>} />
                        <Route path="/" element={<Navigate to="/home" replace />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </HashRouter>
    );
}

export default App;

