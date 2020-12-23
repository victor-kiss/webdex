import React from 'react'
import '../Content.css'
import Mimikyu from '../../images/mimikyu.webp'

export default function dClick() {
    return (
        <div className="d-click bg-black">
           <h2>Você foi desafiado pelo mimikyu, boa sorte...</h2>

            <div className="gif-area">
                <img src={Mimikyu} alt="mimikyu gif" className="image-content"/>
            </div>
           </div>
    )
}
