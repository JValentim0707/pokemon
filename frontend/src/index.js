import './index.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import pokemonLogo from './img/pokemonLogo.png'
import ReactDOM from 'react-dom'
import React from 'react'

import Pokemons from './components/Pokemons.jsx'

class Body extends React.Component {
    state = {
        typePokemon: 'fire'
    }
    render() {
        let showMenu = false;
        return (
        <div>
            <div className="navbar">
                <div className="headerMenu" onClick={e => console.log(showMenu)}><img src={pokemonLogo}  alt="Logo Pokemon"/></div>
            </div>
            <Pokemons type={this.state.typePokemon}></Pokemons>
        </div>
        );
    }
}


ReactDOM.render(
    <Body></Body>,
    document.getElementById('root')
)