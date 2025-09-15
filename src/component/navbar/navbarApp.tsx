"use client";
import  { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./navbarMenu";


import "../navbar/navbar.css";



export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  

  return (
    <Menu setActive={setActive}>
      <MenuItem item="Servizi" active={active} setActive={setActive}>
      <div className="servizi-link">
        <HoveredLink href="#">Sviluppo Web</HoveredLink>
        <HoveredLink href="#">SEO</HoveredLink>
        <HoveredLink href="#">Consulenza</HoveredLink>
        </div>
      </MenuItem>

      <MenuItem item="Progetti" active={active} setActive={setActive}>
  <div className="cards-container">
   <ProductItem
      title="Progetto 2"
      description="In questo progetto assagerete un pezzo del divino viaggio Di Dante Aleghieri tra gli inferi"
      href="#"
      src={""}
    />
 
    <ProductItem
      title="Progetto 2"
      description="In questo progetto assagerete un pezzo del divino viaggio Di Dante Aleghieri tra gli inferi"
      href="#"
      src={""}
    />

       <ProductItem
      title="Progetto 2"
      description="In questo progetto assagerete un pezzo del divino viaggio Di Dante Aleghieri tra gli inferi"
      href="#"
      src={""}
    />
 

    <ProductItem
      title="Progetto 2"
      description="In questo progetto assagerete un pezzo del divino viaggio Di Dante Aleghieri tra gli inferi"
      href="#"
      src={""}
    />
 
 
  </div>
</MenuItem>


      <MenuItem item="Portfolio" active={active} setActive={setActive}>
      <div className="contact-link">
        
        <HoveredLink href="#about">About</HoveredLink>
        <HoveredLink href="#project">Project</HoveredLink>
        <HoveredLink href="#contact">Contact</HoveredLink>
        </div>
      </MenuItem>
    </Menu>
  );
}
