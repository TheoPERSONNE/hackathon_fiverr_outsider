import React from 'react';
import { Link } from 'react-router-dom';
import './Fiverr_source.css';
import Logo from './logoFiverr.png';

function Fiverr () {
    return (
        
        <div className='fiverrLinks'>
            <img className="logo" src={Logo} alt="Logo fiverr" />
            <h2 className='title_freelance'>FREELANCE</h2>
            <Link className='links create' to="/Home1">
                <button className='create event'>HERE CREATE YOUR EVENT</button>
            </Link>
            <div className ="column_events"> 
            <p>All Events By category</p>
            <p>Build Skills</p>
            <p>Diversity and inclusion</p>
            <p>Get Connected</p>
            <p>Get inspired</p>
            <p>Freelance</p>
            </div>
        </div>
)};

export default Fiverr;