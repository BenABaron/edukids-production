import Router from "./Router"
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Router/>
    <Footer/>
    </BrowserRouter>

  );
}

export default App;
