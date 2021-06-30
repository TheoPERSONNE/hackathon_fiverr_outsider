import React, { useState } from 'react';
import "../components/Finalize.css";
import apple from './apple.webp';
import { Link } from 'react-router-dom';
import Logo from './logo_fiverr.png';

function Finalize() {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [date, setDate] = useState('');
const [heure, setHeure] = useState('');

  const event = {
    titre:{title},
    description:{description},
    date:{date},
    heure:{heure},
  };

const [tabEvent, setTabEvent] = useState([]);
console.log(tabEvent)

 const setData = (e) => {
  e.preventDefault();
  tabEvent.push(event)
  setTitle('');
  setDescription('');
  setDate('');
  setHeure('');
  };

  return (
    <div>
    <img className="logo" src={Logo} alt="Logo fiverr" />
            <hr></hr>
    <div className="allform">
    <div className="imgapple">
    <img src={apple}  className="apple" alt="img" />
    </div>
    <div className="formfinal">
    <form onSubmit={(e) => setData(e)} className="Title">
       <h1 className="titregroupe">Title </h1>
       <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="choix titre" className="choixtitre" placeholder="Choix Titre..." required ></input>
       <h2 className="titregroupe">Description of the event </h2>
       <textarea onChange={(e) => setDescription(e.target.value)} value={description} e="descriptionEvent" placeholder="Description..." required></textarea>
       <h2 className="titregroupe">Timetable </h2>
       <label className="date" htmlFor="Date">Date : </label>
       <input onChange={(e) => setDate(e.target.value)}type="date" value={date} name="date" id="date" required minLength="8" maxLength="8" size="8"></input>
       <label className="heure" htmlFor="Heure">Heure : </label>
       <input onChange={(e) => setHeure(e.target.value)} type="time" value={heure}  name="heure" id="heure" required minLength="8" maxLength="8" size="8"></input>
       <div className='homeLinks'>
    	        <Link className='link9' to="/">
    	             VALIDATION
    	        </Link>
                </div> 
    </form> 
    </div>
    </div>
    </div>
  )
} 

export default Finalize;
