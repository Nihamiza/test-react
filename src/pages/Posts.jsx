import React from 'react'
import Auditeur from "../assets/Auditeur.png";
import { useState, useEffect } from 'react';
import "../styles/Poste.css";
import Header from './Header.jsx';
import { Link } from 'react-router-dom';
function Posts() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 1000); // Rafraîchit toutes les secondes
  
      return () => clearInterval(timer); // Nettoie le timer lors du démontage du composant
    }, []);
  return (
    <div>
    <Header/>
    <div className="Links">
    <a className='link1' to={""} href=''>
    extraits
    </a>
    <Link className='link2' to={""} >
    posts
    </Link>
    </div>
      <div className="postes">
    <div className="pimg">
    <img src={Auditeur} alt="My Image" className="image" />
  </div>
    <div className="textContainer">
    <h1>sachamrts</h1>
    <p>{currentDateTime.toLocaleString()}<br></br>
    
    Le clip de Planète des songes vient de <br></br>
dépasser les dix mille vues, merci à tous <br></br>
pour la force. La suite arrive très vite, des <br></br>
feats à venir avec @amoakajack</p>
  </div>
   
    
   
    </div>
    
    
    
    </div>
  );
}

export default Posts;
