import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function BurgerMenu() {

    const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <div>
      <GiHamburgerMenu className="burgermenu" onClick={()=>{setBurgerMenu((prev)=>!prev)}}/>
      {burgerMenu ? <div>bbbbb</div> : <div/>}
    </div>
  );
}
