import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import Header from './components/header/Header';
import Routes from './config/Routes';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';


function App() {
    return (
        <BrowserRouter>
            <Route render={props => (
                <>
                    <Header {...props}/>
                    <Routes/>
                    <Footer/>
                </>
            )}/>
        </BrowserRouter>
    );
}

export default App;
