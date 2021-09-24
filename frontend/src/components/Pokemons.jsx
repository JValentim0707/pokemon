import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Pagination from './Pagination';
import IconFire from '../img/Fire.png'
import IconGrass from '../img/Grass.png'
import IconWater from '../img/Water.png'
import './Pokemon.scss'

// const Pokemons = () => {
//     const [pokemons, setPokemons] = useState( [] );
//     const [loading, setLoading] = useState(false);
//     const [currentPokemon, setCurrent] = useState(1);
//     const [pokemons, setPokemons] = useState(10);

//     useEffect(() => {
//         const getPokemons = async () => {
//             setLoading(true)
//             const data =
//         }
//     })
// }


class Pokemons extends React.Component {
    state = {
        pokemons: [],
        typePokemon: 'grass',
        pages: [ [] ],
        currentPage: 0
    }
    handlePagination = (page) => {
        this.setState({ currentPage: page - 1 })
    }
    componentDidMount() {
        const url = "https://pokeapi.co/api/v2/type/" + this.state.typePokemon
        axios.get(url)
        .then( res =>{
            const pokemons = res.data.pokemon
            const pages = [ [] ]
            let index = 0
            let page = 0
            pokemons.forEach((pokemon, i) => {
                pokemon.pokemon.number = pokemon.pokemon.url.split("/")[6]
                if (Number(pokemon.pokemon.number) > 898) pokemon.pokemon.urlImage = null
                else {
                    pokemon.pokemon.number = ("00" + pokemon.pokemon.number).slice(-3)
                    pokemon.pokemon.urlImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.pokemon.number}.png`
                }

                if (index <= 19) { 
                    index++
                    pages[page].push(pokemon)
                }
                else { 
                    index = 0
                    page++
                    pages.push([])
                }
            });
            this.setState({ pokemons, pages })
        })
    }
    getByType(type) {
        this.setState({ currentPage: 0 })
        const url = "https://pokeapi.co/api/v2/type/" + type
        axios.get(url)
        .then( res =>{
            const pages = [ [] ]
            let index = 0
            let page = 0
            const pokemons = res.data.pokemon
            pokemons.forEach((pokemon, i) => {
                pokemon.pokemon.number = pokemon.pokemon.url.split("/")[6]
                if (Number(pokemon.pokemon.number) > 898) pokemon.pokemon.urlImage = null
                else {
                    pokemon.pokemon.number = ("00" + pokemon.pokemon.number).slice(-3)
                    pokemon.pokemon.urlImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.pokemon.number}.png`
                }
                pokemon.urlImage = 'a'
                if (index <= 19) { 
                    index++
                    pages[page].push(pokemon)
                }
                else { 
                    index = 0
                    page++
                    pages.push([])
                }
            });
            console.log(pages)
            this.setState({ pokemons })
            this.setState({ pages })
        })
    }
    render() {
        const { pokemons } = this.state
        return (
        <div>
            <div className="button-group">
                <div className="button fire" onClick={e => this.getByType('fire')}><div style={{ with: "40px" }}><img src={IconFire}  alt="Icone de Fogo"/></div>Fire</div>
                <div className="button grass" onClick={e => this.getByType('grass')}><div style={{ with: "40px" }}><img src={IconGrass}  alt="Icone de Grama"/></div>Grass</div>
                <div className="button water" onClick={e => this.getByType('water')}><div style={{ with: "40px" }}><img src={IconWater}  alt="Icone de Agua"/></div>Water</div>
            </div>
            {console.log(this.state.pages)}
            <ol class="list-group" style={{ flexDirection: "row", flexWrap: "wrap"}}>
                { this.state.pages[this.state.currentPage].map(pokemon => (
                    <div class="card" style={{ width: "200px", height: "250px", margin: "10px 10px 10px 10px"}}>
                        <img src={pokemon.pokemon.urlImage ? pokemon.pokemon.urlImage : 'https://cdn-icons-png.flaticon.com/512/188/188918.png'} class="card-img-top" alt="Foto Pokemon"/>
                        <div class="card-body">
                            <p class="card-text">{ pokemon.pokemon.name.toUpperCase() }</p>
                        </div>
                    </div>
                // <li class="list-group-item">{pokemon.pokemon.name.toUpperCase()}</li>
                ))}
            </ol>
            <Pagination pageNumbers={this.state.pages} selectPage={this.handlePagination}></Pagination>
        </div>
        );
    }
}

export default Pokemons