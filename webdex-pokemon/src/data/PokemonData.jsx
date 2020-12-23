import React,{useEffect,useState} from 'react'
import './PokemonData.css'

import WaveNegative from '../images/background/wavesNegative.svg'
import PokemonCard from '../pokemonCard/PokemonCard'



export default function PokemonDataBase() {

const [pokemons, setPokemons] = useState([])

const baseUrl = "https://pokeapi.co/api/v2/pokemon/"



async function getPokemonData(){

    let inputValue = document.querySelector(".input").value

    let pokemonData = inputValue.toLowerCase()
    // a api só aceita os textos todos em minúsculos

    if(pokemonData === ""){
        pokemonData = "bulbasaur"
    }
    let completeUrl = `${baseUrl + pokemonData}`
    try {

        const response = await fetch(completeUrl)

        const data = await response.json()
        setPokemons([data])
        

        
    } catch (error) {
        console.error(error)
        alert("Ocorreu um erro, insira um valor válido na webdex")
    }
}


async function randomPokemon(){
    let randomNumber =( Math.random() * 894).toFixed(0)

    let pokemonNumber = randomNumber.toString()

    let url = `${baseUrl + pokemonNumber}`
    
    try {
        const response = await fetch(url)

        const data = await response.json()

        setPokemons([data])
    } catch (error) {
        console.error(error)
    }

}
useEffect(()=>{
    getPokemonData()
},[])

    return(
      
        <div className="webdex">
            <div className="wave-area">
               <img src={WaveNegative} alt="wave negative" className="wave"/>
            </div>

             <div className="webdex-area">
                 <div className="title">
                     <h1>Webdex</h1>
                 </div>
                    <div className="input-area">
                    <input type="text" placeholder="Digite o nome ou número do pokemon" className="input"></input>
                    <button type="button" onClick={getPokemonData} className="button">Enviar</button>

                    <button className="random-button" type="button" onClick={randomPokemon}>Pokémon Aleatório</button>

                    </div>

                    <div className="card-pokemon">
                    
                        {
                            pokemons.map((pokemon)=>
                                <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                                )
                        }
                    </div>
                    <div>
                        <span className="span d-none">ERROR</span>
                    </div>
                </div>
            </div>
    )
}

