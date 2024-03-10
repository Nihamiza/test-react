import React, {useState} from "react";
import { Link } from 'react-router-dom';
 import kor from "../assets/kor.png";
import '../styles/Home.css';
// import BannerImage from "../assets/Artiste.png";
function Home() {
  const [action] = useState("Créer un compte");
  return (
    <div className="home" >
      <div className="headerContainer">
      <div> <img src={kor} alt=""/></div>
      <div className="text">Bienvenue sur KORE</div>
 
      </div>
      <div className="submit-container">
      <Link to="/connexion/">
      <div className={action==="Connectez-vous !"?"submit black":"submit"} > Connectez-vous !</div> 
      </Link>
      <Link to="/menu/">
      <br></br> <div className={action==="Créer un compte<"?"submit black":"submit"} > Créer un compte</div>
      </Link>
       </div>
    </div>
  );
}

export default Home;
