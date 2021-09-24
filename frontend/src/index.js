import './index.scss'
import pokemonLogo from './img/pokemonLogo.png'
import { FaBars } from "react-icons/fa";
import ReactDOM from 'react-dom'
import React from 'react'

import Pokemons from './components/Pokemons.jsx'

class Body extends React.Component {
    render() {
        let showMenu = false;
        return (
        <div>
            <div>
                {
                    showMenu 
                    ? <div className="menuOpen"><div className="headerTitle"><div style={{width: '15%', display: 'flex', justifyContent: 'center', cursor: 'pointer'}}><FaBars /></div><div style={{width: '85%', display: 'flex', justifyContent: 'center'}}>TIPOS</div></div></div>
                    : null
                }
                {/* <div className={{menu}}>
                   <div className="headerTitle"><div style={{width: '15%', display: 'flex', justifyContent: 'center', cursor: 'pointer'}}><FaBars /></div><div style={{width: '85%', display: 'flex', justifyContent: 'center'}}>TIPOS</div></div>
                </div> */}
                <div className="navbar">
                    <div className="menuIcon"><FaBars /></div>
                    <div className="headerMenu"><img src={pokemonLogo}  alt="Logo Pokemon"/></div>
                </div>
            </div>
            <Pokemons></Pokemons>
        </div>
        );
    }
}


ReactDOM.render(
    <Body></Body>,
    document.getElementById('root')
)