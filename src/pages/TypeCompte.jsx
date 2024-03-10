import React from 'react'
import { MenuList } from "../typesc/MenuList";
import MenuItem from "../components/MenuItem";
import Evenement from "../assets/Evenement.png";

import Auditeur from "../assets/Auditeur.png";
import Artiste from "../assets/Artiste.png";

import Producteur from "../assets/Producteur.png";
import Label from "../assets/Label.png";
import "../styles/TypeCompte.css";
function Menu() {
  return ( 
    /* 
    <div className="menu">
    
      <h1 className="menuTitle"> Selectionner type de compte</h1>
      <img src={image1} />

 <div className="menuList">
   {
    MenuList.map((menuItem,key)=>{

      return( <MenuItem 
      key={key}
       image={menuItem.image} 
       name={menuItem.name} />);
    })}
    
    </div>
    Musicien
  </div>

*/
<div>
<h1 className="menuTitle"> SÉLECTIONNEZ UN <br/>
TYPE DE COMPTE </h1>

<div className="menu1">
<div className="flex"> 
  <img src={Auditeur} /><p className='type-compte' >Auditeur</p>
  </div>
  <div className='flex'> 
  <img src={Artiste} /><p className='type-compte'>Artiste</p>
  </div>
  <div className='flex'> 
  <img src={Producteur} /><p className='type-compte'>Producteur</p>
  </div>
  <div className='flex'> 
  <img src={Evenement} /><p className='type-compte'>Evenement</p> 
  </div>
  </div>



</div>

  );
}

export default Menu;
