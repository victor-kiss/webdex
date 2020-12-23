import React from 'react'

import './css/PokemonCard.css'

export default function PokemonCard({pokemon}) {
    return (
        <div className="pokemon-card">
                <div className="pokemon-card-area">

                    <div className="pokemon-name-area">
                        <h4 className="pokemon-name" 
                        >{pokemon.name}
                        </h4>
                    </div>

                <div className="pokemon-image-area">

                    <div className="pokemon-image">
                       <figure>
                            <img src={pokemon.sprites.front_default} alt="imagem não encontrada"/>

                            <figcaption>Normal</figcaption>
                       </figure>
                    </div>

                    <div className="pokemon-image">
                       <figure>
                            <img src={pokemon.sprites.front_shiny} alt="imagem não encontrada"/>

                            <figcaption>Shiny</figcaption>
                       </figure>
                    </div>
                </div>
                <div className="pokemon-data">
                    <p>Número: {pokemon.id}</p>
                    <p>Altura: {pokemon.height / 10}M</p>
                    <p>Peso: {pokemon.weight / 10}kg</p>
                </div>

                <div className="pokemon-type-area">

                    <h5>Tipo</h5>
                    {
                        pokemon.types.map(type => 
                            <p key={type.type.name}> {type.type.name}
                            </p>
                        )
                        
                    }
                </div>
                 
                <div className="pokemon-abilities">
                    <h5>Habilidades</h5>
                    {
                        pokemon.abilities.map(ability =>
                             <p key={ability.ability.name}>
                             {ability.ability.name}
                             </p>
                         )
                    }
                </div>
            </div>
        </div>
    )
}

// É necessário dividir o valor da altura e do peso por 10 porque os valores retornados da api são 10 vezes maiores que os valores disponibilizados na pokédex oficial que se encontra no site do pokémon.