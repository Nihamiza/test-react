import React from 'react'
import { MenuList } from "../typesc/MenuList";
import MenuItem from "../components/MenuItem";
import Evenement from "../assets/Evenement.png";
import "../styles/Menu.css";
import Auditeur from "../assets/Auditeur.png";
import Artiste from "../assets/Artiste.png";
import Musicien from "../assets/Musicien.png";
import Beatmaker from "../assets/Beatmaker.png";

import Dj from "../assets/Dj.png";
import Producteur from "../assets/Producteur.png";
import Clippeur from "../assets/Clippeur.png";
import Label from "../assets/Label.png";
import { SportsMartialArts } from '@mui/icons-material';

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
<h1 className="menuTitle">  
TYPES DE COMPTES </h1>
<div className="menu">


<div className="menu1">
<img src={Evenement} />  <br/>
<img src={Auditeur} /><br/>
<img src={Artiste} /><br/>
<img src={Musicien} /><br/>
<img src={Beatmaker} /><br/>
<img src={Dj} />
</div>

<div className="menu2">
<img src={Producteur} />    <br/>
<img src={Producteur} /><br/>
<img src={Producteur} /><br/>
<img src={Producteur} /><br/>
<img src={Clippeur} /><br/>
<img src={Label} /><br/>
</div>
</div>
</div>

  );
}

export default Menu;
