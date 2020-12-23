import React from 'react'
import './css/Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="flex-div">
                <div className="flex-item">
                   <div className="flex-item-content">
                        <h2>Criador</h2>

                        <p>Criado por Victor Kiss, estudante de Desenvolvimento Web, 16 anos de idade, apaixonado por computação e um grande fã de pókemon =)</p>
                   </div>
                </div>

                <div className="flex-item">
                    <div className="flex-item-content">
                        <h2>Sobre</h2>

                        <p>A Webdex foi criada para abordar um pouco do mundo Pokémon que é um anime e série de jogos que eu gosto muito, além de melhorar meus conhecimentos em consumo de API usando React JS.</p>
                     </div>
                </div>

                <div className="flex-item">
                    <div className="flex-item-content">
                        <h2>Rede Social</h2>

                        <p>Acompanhe meu github para ficar por dentro de outros projetos.</p>
                        
                        
                        <a href="https://github.com/victor-kiss"  rel="noreferrer" target="_blank"  className="link">
                        <i className="fab fa-github"></i>
                            
                            victor-kiss</a>
                    </div>
                </div>
            </div>
            <div className="text-dev">
                <span>
                    Desenvolvido com  <i className="fas fa-heart"></i> por Victor Kiss
                </span>
            </div>
        </footer>
    )
}
