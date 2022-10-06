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

let apiData = axios.get('https://api.spacexdata.com/v4/dragons')
    .then(data => {
        apiData = data;
    });

function App(props) {

  return (
      <HashRouter>
        <div className='container'>
          <Header />
            <div className='main'>
                <Routes>
                    <Route path='/home' element={<Home data={apiData}/>} />
                    <Route path='/dragon_1' element={<DragonOne data={apiData.data[0]}/>} />
                    <Route path='/dragon_2' element={<DragonTwo data={apiData.data[1]}/>} />
                    <Route path="/*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
          <Footer />
        </div>
      </HashRouter>
  );
}

export default App;
