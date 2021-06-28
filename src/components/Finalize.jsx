import React from 'react';

import "../components/Finalize.css";

function Finalize(desc) {
  return (
    <div className="Title">
       <h1>Titre du groupe : </h1>
       <input type="text" name="choix titre" placeholder="Choix Titre..." required
       minLength="4" maxLength="60" size="20"></input>
       <h2 className="Descriptif">Descriptif de l'évènement : </h2>
       <textarea className="descriptionEvent" placeholder="Descriptif de l'évènement..." size="50"></textarea>
       <h2>Horaire :</h2>
       <label className="Date" htmlFor="Date">Date : </label>
       <input type="date" name="date" id="date" required minLength="8" maxLength="8" size="8"></input>
       <label className="Heure" htmlFor="Heure">Heure : </label>
       <input type="time" name="heure" id="heure" required minLength="8" maxLength="8" size="8"></input>
       <label className="Validation" htmlFor="Validation"></label>
       <input name="validation" type="submit" value="Valider l'évènement!"></input> 
    </div> 
  )
} 

export default Finalize;

/*<input type="textarea" name="description de l'event" placeholder="Descriptif de l'évènement..." required
       minLength="4" maxLength="200" size="200"></input>*/
