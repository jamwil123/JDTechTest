import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import PageSelector from "./PageSelector";

export default function BurgerMenu() {

    const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <div className="burgerMain">
      <GiHamburgerMenu className="burgermenu" onClick={()=>{setBurgerMenu((prev)=>!prev)}}/>
      {burgerMenu ? <p></p>: <p>Hello</p>}
    </div>
  );
}
