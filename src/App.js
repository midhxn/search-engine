import React,{useState} from 'react';
import { Footer } from './components/Footer';
import { NavBar } from './components/Navbar';
import { Routes } from './components/Routes';

const App = () => {

    const [darkTheme,setDarkTheme] = useState(false);
    return(
        <div className={darkTheme ? 'dark' : ''}>
            <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
                <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                <Routes/>
                <Footer/>
            </div>
        </div>
        );
}

export default App;


