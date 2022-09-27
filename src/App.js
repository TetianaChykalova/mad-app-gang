import './App.css';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import DragonOne from "./Main/Dragon_1/Dragon_1";
import DragonTwo from "./Main/Dragon_2/Dragon_2";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import * as axios from "axios";

let apiData = axios.get('https://api.spacexdata.com/v4/dragons')
    .then(data => {
        apiData = data;
    });

function App(props) {
  return (
      <BrowserRouter>
        <div className='container'>
          <Header />
            <div className='main'>
                <Routes>
                    <Route path='/dragon_1' element={<DragonOne data={apiData.data[0]}/>}/>
                    <Route path='/dragon_2' element={<DragonTwo data={apiData.data[1]}/>}/>
                </Routes>
            </div>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
