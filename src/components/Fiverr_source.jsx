import React from 'react';
import { Link } from 'react-router-dom';
import './Fiverr_source.css';
// import Cards from './Cards';
import Logo from './logo_fiverr.png';
import card1 from './Card.png';
import card2 from './Card3.png';
import card3 from './card2.png';
import card4 from './Card4.png';
import card5 from './Card5.png';
import card6 from './card2.png';

function Fiverr () {
    return (
        
        <div className='fiverrLinks'>
            <img className="logo" src={Logo} alt="Logo fiverr" />
            <hr></hr>
            <div className="center_h2">
                <h2 className='title_freelance'>FREELANCE</h2>
                <div className="link2">
                    <Link className='linkCreate' to="/Home">
                    HERE CREATE YOUR EVENT
                    </Link>
                </div>
            </div>
                <div className="allCard">
                    <div className="column_events"> 
                    <p>All Events By category</p>
                    <p>Build Skills</p>
                    <p>Diversity and inclusion</p>
                    <p>Get Connected</p>
                    <p>Get inspired</p>
                    <p>Freelance</p>
                </div>
                
                    <div className="container_card">
                        <div className="carduno">
                        <img className="card" src={card6} alt="Logo fiverr" />
                        <img className="card2" src={card2} alt="Logo fiverr" />
                        <img className="card" src={card3} alt="Logo fiverr" />
                        </div>
                        <div className="carddos">
                        <img className="card" src={card4} alt="Logo fiverr" />
                        <img className="card2" src={card5} alt="Logo fiverr" />
                        <img className="card" src={card6} alt="Logo fiverr" />
                        </div>
                        <img className="card" src={card1} alt="Logo fiverr" />
                    </div>
             </div>
            </div>
)};

export default Fiverr;