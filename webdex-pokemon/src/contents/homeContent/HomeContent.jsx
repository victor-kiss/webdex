import React from 'react'

import ContentAboutWebdex from './content/ContentAboutWebdex'
import Instructions from './content/Instructions'
import PokemonData from '../../data/PokemonData'

export default function HomeContent() {

    return (
        <div>
            <ContentAboutWebdex/>
            <Instructions/>
            <PokemonData/>
        </div>
    )
}
