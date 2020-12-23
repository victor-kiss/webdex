import React from 'react'
import './css/Navbar.css'
import {Link} from 'react-router-dom'
import Pikachu from '../images/icons/pikachu.svg'

export default function Navbar() {
    return (
        <div className="navbar-area fixed-top">
            <img src={Pikachu} alt="pokébola logo" className="logo logo-desktop"/>
            <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
            <img src={Pikachu} alt="pokébola logo" className="logo logo-mobile"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={iconSwitch}>
            <span className="navbar">
            <i className="fas fa-bars"></i>
            <i className="fas fa-times d-none"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/webdex-inicio">Início</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/curiosidades-sobre-pokemon">Curiosidades</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nao-clique">não clique...</Link>
              </li>
            </ul>
          </div>
      </nav>
    </div>
    )
}

function iconSwitch(){
  let hamburgerIcon = document.querySelector(".fa-bars")

  let xIcon = document.querySelector(".fa-times")

    if(xIcon === null){
      xIcon = document.querySelector(".fa-bars")
    }
    else{
      hamburgerIcon.classList.toggle("d-none")
      xIcon.classList.toggle("d-none")
    }
}
  