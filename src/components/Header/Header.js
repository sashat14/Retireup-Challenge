import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ()=>{
    return(
        <div className="hdr-container">
            <h1 className="hdr">Filter S&P 500 Returns By Year</h1>
            <Link to="/graph">View Graph</Link>
        </div>
    )
}
export default Header;