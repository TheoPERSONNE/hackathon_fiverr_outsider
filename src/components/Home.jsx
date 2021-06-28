import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import img from './imgHome.webp';
import img1 from './imgHome1.webp';

function Home() {
    	    return (
                <div>
                <div>
                <img src={img}  className="imgHome" alt="img" />
                </div>
                <h1 className="titreHome">Titre principal</h1>
                <div className="centre">
                <ul className="ulHome">
                    <li className="liHome">point n1</li>
                    <li className="liHome">point n1</li>
                    <li className="liHome">point n1</li>
                    <li className="liHome">point n1</li>
                </ul>
                <img src={img1} className="imgHome1" alt="img" />
                </div>
                <div className="choix">
                <h3 className="choixVille">Choix de l'emplacement</h3>
                <h3 className="choixCategorie">Choix de la categorie</h3>
                </div>
                <div className="allSelect">
            
                <div className="select1">
                <select name="ville" id="ville-select">
                <option className="selectVille" value="">Ville</option>
                <option className="selectVille" value="paris">Paris</option>
                <option  className="selectVille" value="londre">Londre</option>
                <option className="selectVille" value="tokyo">Tokyo</option>
                <option className="selectVille" value="marseille">Marseille</option>
                </select>
                </div>
                
            
               
                <div className="select">
                <select name="selectCategorie" id="selectCategorie">
                <option className="selectCategorie" value="">Categorie</option>
                <option className="selectCategorie" value="1">Paris</option>
                <option className="selectCategorie" value="2">Londre</option>
                <option className="selectCategorie" value="3">Tokyo</option>
                <option className="selectCategorie" value="4">Marseille</option>
                <option className="selectCategorie" value="4">Marseille</option>
                <option className="selectCategorie" value="4">Marseille</option>
                <option className="selectCategorie" value="4">Marseille</option>
                <option className="selectCategorie" value="4">Marseille</option>
                <option className="selectCategorie" value="4">Marseille</option>
                <option className="selectCategorie" value="4">Marseille</option>
                <option className="selectCategorie" value="4">Marseille</option>
                </select>
                </div>
                </div>
    	        <div className='homeLinks'>
    	        <Link className='link1' to="/Finalize">
    	             Finaliti
    	        </Link>
                </div>
                </div>
    	    )
	}
	
export default Home
    
