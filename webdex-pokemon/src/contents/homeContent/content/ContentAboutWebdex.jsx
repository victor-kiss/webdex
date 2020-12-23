import React from 'react'
import Pokedex from '../../../images/Pokedex.webp'
import '../../Content.css'
import Wave from '../../../images/background/waves.svg'
export default function ContentAboutWebdex() {
    return (
        <div className="content">
            <div className="grid grid-div">
                <div className="text-area">
                    <h2>Sobre a Webdex</h2>
                    <p>Olá treinador(a), bem vindo! A Webdex é um projeto feito por um grande fã de Pokémon, aqui você encontra uma versão web da tão conhecida pokédex, conteúdo relacionado a pokémon dentre outras coisas.</p>

                    <p>A Webdex conta com alguns dados do pokémon como: sua versão shiny(brilhante), número na pokédex oficial do jogo, tipo e outros dados.</p>
                </div>
                <div className="image-area">
                    <img src={Pokedex} alt="Pokedex gen 1" className="image"/>
                </div>
            </div>
            <div className="wave-area">
                 <img src={Wave} alt="wave" className="wave"/>
            </div>
        </div>
    )
}
