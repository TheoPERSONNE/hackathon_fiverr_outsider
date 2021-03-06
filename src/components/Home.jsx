import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import img from './prese.webp';
import img1 from './hug.webp';
import Logo from './logo_fiverr.png';


function Home() {
    	    return (
                <div>
                    <img className="logo" src={Logo} alt="Logo fiverr" />
                <hr></hr>
                <div>
                <img src={img}  className="imgHome" alt="img" />
                </div>
                <h1 className="titreHome">Share your passion!</h1>
                <div className="centre">
                <ul className="ulHome">
                    <li className="liHome">Connecting freelancers</li>
                    <li className="liHome">Knowledge exchange</li>
                    <li className="liHome">Event</li>
                    <li className="liHome">Choose your city, category</li>
                    <li className="liHome">When it happen</li>
                    <li className="liHome">Well done, let's start</li>
                </ul>
                <img src={img1} className="imgHome1" alt="img" />
                </div>
                <div className="under">
                <div className="choix">
                <h3 className="choixVille">Your location</h3>
                <h3 className="choixCategorie">Your category</h3>
                </div>
            
                <div className="allSelect">
                <div className="select1">
                <select name="ville" id="ville-select">
                <option className="selectVille" value="">City</option>
                <option className="selectVille" value="paris">Paris</option>
                <option  className="selectVille" value="londre">London</option>
                <option className="selectVille" value="tokyo">Tel aviv</option>
                <option className="selectVille" value="marseille">New york</option>
                </select>
                </div>
                
            
               
                <div className="select">
                <select name="selectCategorie" id="selectCategorie">
                <option className="selectCategorie" value="">Category</option>
                <option className="selectCategorie" value="1">Graphics & design</option>
                <option className="selectCategorie" value="2">Digital Marketing</option>
                <option className="selectCategorie" value="3">Writing & translation</option>
                <option className="selectCategorie" value="4">Video & translation</option>
                <option className="selectCategorie" value="5">Music & audio</option>
                <option className="selectCategorie" value="6">Programming & tech</option>
                <option className="selectCategorie" value="7">Data</option>
                <option className="selectCategorie" value="8">Business</option>
                <option className="selectCategorie" value="9">Lifestyle</option>
                </select>
                </div>
                </div>
                </div>
    	        <div className='homeLinks'>
    	        <Link className='link1' to="/Finalize">
    	             NEXT STEP
    	        </Link>
                </div>
                </div>
    	    )
	}
	
export default Home
    
