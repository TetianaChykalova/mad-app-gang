import './App.css';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import * as axios from "axios";

let apiData = axios.get('https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f')
    .then(obj => {
        apiData = obj.data;
});

function App(props) {
  return (
    <div className='container'>
      <Header />
      <Main info={apiData}/>
      <Footer />
    </div>
  );
}

export default App;
