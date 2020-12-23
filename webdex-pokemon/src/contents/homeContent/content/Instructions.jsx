import React from 'react'

import Gengar from '../../../images/gengar.webp'
import '../../Content.css'

export default function Instructions() {
    return (
        <div className="content">
                    <div className="grid-div-inverted">
                    <div className="text-area-inverted">
                        <h2>Instruções</h2>
                        <p>Para que a Webdex funcione corretamente é preciso prestar a atenção em algumas coisas, essas coisas são:</p>
                        <ul>
                            <li>Para pesquisar sobre um pokémon basta colocar seu nome ou número.</li>
                            <li>Pokémons que contém espaços no nome são pesquisados da seguinte forma: O espaço é substituido por "-", sendo assim "mr mime" vira "mr-mime".</li>

                            <li>Caso o nome digitado esteja errado ou não exista o card não irá atualizar.</li>

                            <li>Caso o número do pokémon não exista o card também não irá atualizar</li>

                        </ul>
                        <p>Aproveite a Webdex!</p>
                    </div>
                    <div className="image-area-inverted">
                        <img src={Gengar} alt="Pokémons " className="image"/>
                    </div>
            </div>
        </div>
    )
}
