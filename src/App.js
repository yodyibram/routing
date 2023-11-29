import './App.css';
import React from 'react';
import {Link, Outlet} from 'react-router-dom'

// import Navbar from './components/Navbar';
// import News from './page/News';

function App() {
  return (
            <div className='App'>

                <nav>
                    <Link to="/News" className="mr">News
                    </Link>
                    <Link to="/Login" className="mr">Login
                    </Link>
                    <Link to="/Register" className="mr">Sign Up
                    </Link>
                </nav>
                <Outlet/>
            </div>
        )
}

export default App;
