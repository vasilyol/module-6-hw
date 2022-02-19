import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import './App.css';

function App() {
    return (<Router>
        <nav>
            <img src="images/logo.png" className="category-btn" alt="logo"/>
            <Link to="/" className="link category-btn">Main</Link>
            <Link to="/about" className="link category-btn">About</Link>
            <Link to="/contact" className="link category-btn">Contact</Link>
        </nav>

        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </Router>);
}

export default App;
