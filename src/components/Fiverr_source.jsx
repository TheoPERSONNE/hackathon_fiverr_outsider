import React from 'react';
import { Link } from 'react-router-dom';
import './Fiverr_source.css';
// import Cards from './Cards';
import Logo from './logo_fiverr.png';

function Fiverr () {
    return (
        
        <div className='fiverrLinks'>
            <img className="logo" src={Logo} alt="Logo fiverr" />
            <div className="center_h2">
                <h2 className='title_freelance'>FREELANCE</h2>
                <div className="link">
                <Link className='links_create' to="/Home1">
                    <button className='create_event'>HERE CREATE YOUR EVENT</button>
                </Link>
                </div>
            </div>
            <div className ="column_events"> 
            <p>All Events By category</p>
            <p>Build Skills</p>
            <p>Diversity and inclusion</p>
            <p>Get Connected</p>
            <p>Get inspired</p>
            <p>Freelance</p>
            </div>
            {/* <Cards /> */}
        </div>
)};

export default Fiverr;