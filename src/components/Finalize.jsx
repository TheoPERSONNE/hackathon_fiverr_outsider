import React, { useState } from 'react';
import "../components/Finalize.css";

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
    <form onSubmit={(e) => setData(e)} className="Title">
       <h1>Titre du groupe : </h1>
       <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="choix titre" placeholder="Choix Titre..." required minLength="4" maxLength="60" size="20"></input>
       <h2 className="Descriptif">Descriptif de l'évènement : </h2>
       <textarea onChange={(e) => setDescription(e.target.value)} value={description} e="descriptionEvent" placeholder="Descriptif de l'évènement..." required></textarea>
       <h2>Horaire :</h2>
       <label className="Date" htmlFor="Date">Date : </label>
       <input onChange={(e) => setDate(e.target.value)}type="date" value={date} name="date" id="date" required minLength="8" maxLength="8" size="8"></input>
       <label className="Heure" htmlFor="Heure">Heure : </label>
       <input onChange={(e) => setHeure(e.target.value)} type="time" value={heure}  name="heure" id="heure" required minLength="8" maxLength="8" size="8"></input>
       <label className="Validation" htmlFor="Validation"></label>
       <input className="validation" type="submit" value="Valider l'évènement!"></input> 
    </form> 
  )
} 

export default Finalize;
