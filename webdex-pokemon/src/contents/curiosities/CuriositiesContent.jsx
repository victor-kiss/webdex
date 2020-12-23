import React from 'react'
import '../Content.css'

import Pikachu from '../../images/curiosity/pikachu.webp'
import EsbocoRhydon from '../../images/curiosity/games-esbocos-originais-rhydon.webp'
import Ginasio from '../../images/curiosity/ginasioRedEBlue.webp'
import Magicarp from '../../images/curiosity/magicarp.webp'
import Nidorino from '../../images/curiosity/nidorino.webp'
import Wailord from '../../images/curiosity/wailord.webp'
import Koffing from '../../images/curiosity/koffing.webp'
import Rotom from '../../images/curiosity/rotom.webp'

import JPokemon from '../../images/curiosity/jpokemon.webp'

import EspadaJustica from '../../images/curiosity/espada-da-justica.webp'

import Cosmoem from '../../images/curiosity/cosmoem.webp'

export default function Curiosity() {
    return (
        <div className="content-section">
            <section>
                <h2>10 fatos sobre Pokémon que você provavelmente não tinha a menor ideia</h2>

               
                    <figure>
                       <img src={Pikachu} alt="pikachu" className="image-content"/>
                    </figure>
               
                <p>Embora a franquia já tenha mais de 20 anos nas costas, o apelo de Pokémon é eterno. Visto, por exemplo, com o recorde no número de vendas dos jogos Pokémon Sun & Pokémon Moon, além dos milhões de usuários de Pokémon GO pelo mundo afora.</p>

                <p>Em duas décadas de história, Pokémon nos levou a mundos exuberantes e nos apresentou a mais 800 criaturas mágicas. Mas o quanto os seus jogadores mais assíduos conhecem sobre os jogos?</p>

                <h2>1. O primeiro Pokémon desenhado</h2>
                <figure>
                    <img src={EsbocoRhydon} alt="Esboços originais do Rhydon" className="image-content"/>
                    <figcaption className="image-caption">
                        Esboços originais do Rhydon    
                    </figcaption>
                </figure>
                
                <p>Ele pode até estar em 112º lugar na sua Pokédex, mas de acordo com Ken Sugimori - o desenhista por trás dos primeiros 251 Pokémon -, Rhydon foi o primeiro deles a ser criado. Este é também o motivo pelo qual a imagem de Rhydon foi tão divulgada nos primeiros jogos da franquia. Numa mesma entrevista, Sugimori também menciona Lapras e Clefairy como alguns dos primeiros a serem desenhados ao lado de Rhydon.</p>

                <h2>2. Pescando nos ginásios em Pokémon Red & Blue</h2>

                <figure>
                    <img src={Ginasio} alt="Será que o Mew estaria numa dessas estátuas?" className="image-content"/>

                    <figcaption className="image-caption">
                      Será que o Mew estaria numa dessas estátuas?
                    </figcaption>
                </figure>

                <p>De volta aos jogos originais Pokémon Red & Blue, era possível pescar um Pokémon dentro das centenas de estátuas de Rhydon que adornavam os ginásios Pokémon. Utilizando uma Old Rod sobre uma estátua Rhydon, você conseguia encontrar uma Magikarp. Também era possível pescar um Goldeen e um Poliwag no ginásio da cidade de Cerulian, uma vez que havia um espaço d'água lá dentro. Não é que você conseguia caçar um Pokémon superraro lá dentro, mas a diversão se concentrava basicamente na esquisitice da pescaria em estátua.</p>

                <h2>3. "Splash" não tem nada a ver com água</h2>

                    <figure>
                        <img src={Magicarp} alt="Eles estão saltando, não espirrrando água" className="image-content"/>
                        <figcaption className="image-caption">
                            Eles estão saltando, não espirrrando água
                        </figcaption>
                    </figure>
                <p>Embora "Splash" sugira uma associação com água, o golpe em japonês significa tanto "espirrar água" quanto "pular", mais especificamente o segundo. Isto explica o porquê deste golpe poder ser ensinado a outros Pokémon que não sejam do tipo água, como o Spoink e o Hoppip. Isto também explica o porquê do "Splash" ser invalidado quando o golpe "Gravity", do tipo psíquico, é acionado.</p>

                <h2>4. O Nidorino do Professor Carvalho grita como uma Nidorina</h2>
                <figure>
                    <img src={Nidorino} alt="Você vai ter que ouvir para acreditar" className="image-content"/>
                    <figcaption className="image-caption">
                    Você vai ter que ouvir para acreditar
                    </figcaption>
                </figure>
                <p>Como um dos primeiros Pokémon que você irá ver no jogo, ninguém vai te culpar caso não tenha notado, mas o Nidorino do Professor Carvalho grita como uma Nidorina na abertura original do Pokémon Red & Blue.</p>

                <h2>5. Wailord é mais "leve" do que parece</h2>

                <figure>
                    <img src={Wailord} alt="Ele é mais leve do parece" className="image-content"/>
                    <figcaption className="image-caption">
                      Ele é mais leve do parece
                    </figcaption>
                </figure>

                <p>Apesar de ser um dos maiores Pokémon existentes, com 14,5 metros de comprimento, Wailord é tão leve para o seu tamanho que poderia até flutuar no ar por conta de sua baixa densidade. Wailord pesa "apenas" 398 quilos, o que o coloca num IMC (Índice de Massa Corporal) de 1.9. Para efeito de comparação, o IMC considerado "normal" nos seres humanos é entre 20 e 24.</p>

                <h2>6. Nomes originais dos Pokémon</h2>
                
                <figure>
                    <img src={Koffing} alt="Weezing representava o ar poluído de Los Angeles" className="image-content"/>
                    <figcaption className="image-caption">
                    Weezing representava o ar poluído de Los AngelesWeezing representava o ar poluído de Los Angeles
                    </figcaption>
                </figure>

                <p>Na versão beta de Pokémon Red & Blue, alguns Pokémon possuíam nomes diferentes dos que têm hoje. Por exemplo, Koffing e Weezing eram chamados de Ny e La, representando, respectivamente, o ar poluído das cidades de Nova York e Los Angeles. Já Kabuto e Kabutops eram chamados de Att e Lantis, uma referência à cidade perdida de Atlantis. Jigglypuff e Wigglytuff possuíam nomes adoráveis: Pudding e Custard - ou Pudim e Quindim, em português. Ah, e Gyarados tinha um nome muito mais legal: Skullkraken, ou, "quebra-ossos" em português.
                </p>

                <h2>7. Os designs diferentes de Rotom</h2>

                    <figure>
                        <img src={Rotom} alt="Dá para notar que eles foram feitos por desenhistas diferentes?
                        " className="image-content"/>

                        <figcaption className="image-caption">
                            Dá para notar que eles foram feitos por desenhistas diferentes?
                        </figcaption>
                    </figure>

                    <p>A forma original de Rotom foi desenhada originalmente pelo primeiro designer Pokémon, Ken Sugimori, e parece ter sido baseado no Pulseman - um jogo de ação desenvolvido pela Game Freak, rodado para o Mega Drive da Sega em 1994 -, jogo este dirigido e feito com seu colega Pokémon, o criador da série, Satoshi Tajiri. Já, as outras formas de Rotom foram desenhadas pelos seguintes designers:</p>

                    <ul>
                        <li>Heat Rotom foi criado por Lee HyunJung, que também desenhou o Tepig e suas evoluções.</li>

                        <li>Wash Rotom foi criado por Hiroki Fuchino, que fez praticamente todas as ilustrações dos trading cards Pokémon.</li>

                        <li>Frost Rotom foi criado por Hironobu Yoshida, que contribui com o design da franquia desde o Pokémon Yellow, também responsável pelas formas de Wobbuffet, Celebi e Deoxys.</li>

                        <li>Fan Rotom foi criado por Motofumi Fujiwara, designer gráfico de quase todos os jogos Pokémon e ilustrador de vários trading cards Pokémon.</li>

                        <li>Mow Rotom foi criado por Yusuke Ohmura, que ajudou Ken Sugimori no design de Xerneas e Yveltal, além de assumir o trabalho de Sugimori como designer Pokémon para os jogos Pokémon Sun & Moon</li>
                    </ul>

                    <h2>8. James Turner foi o primeiro ocidental a criar um Pokémon</h2>

                        <figure>
                        <img src={JPokemon} alt="Guzzlord talvez seja o Pokémon mais sinistro de todos" className="image-content"/>
                            <figcaption className="image-caption">
                                Guzzlord talvez seja o Pokémon mais sinistro de todos
                            </figcaption>
                        </figure>


                    <p>O designer gráfico britânico James Turner, que trabalha para a Game Freak, tornou-se o primeiro ocidental a criar um Pokémon em 2010. Ele criou sete Pokémon para os jogos Pokémon Black & White, dois para o Pokémon X & Y e mais outros dois para os jogos Pokémon Sun & Moon. Além da adorável linha evolutiva de Vanillite, suas criações tendem a ser um pouco mais sinistras, como a Vullaby, o Trevenant, o Buzzwole e o Guzzlord.</p>

                    <h2>9. A Espada da Justiça foi baseada nos Três Mosqueteiros</h2>

                    <figure>
                        <img src={EspadaJustica} alt="É possível igualar um time de Pokémon com os Três Mosqueteiros?" className="image-content"/>
                        <figcaption className="image-caption">
                           É possível igualar um time de Pokémon com os Três Mosqueteiros?
                        </figcaption>
                    </figure>

                    <p>Cobalion, Terrakion, Virizion, e Keldeo representam o coletivo de Pokémon lendários conhecidos como "A Espada da Justiça". O grupo foi baseado no romance francês "Os Três Mosqueteiros" de Alexandre Dumas.</p>

                    <p>Cobalion é uma analogia para Athos, o mais velho e líder 'de fato' do grupo. Terrakion corresponde a Porthos - o mais forte, mais pesado e maior membro do quarteto. Virizion é comparável ao Aramis - o mais feminino, vaidoso e romântico do grupo. E finalmente Keldeo, que representa D'Artagnan - o mais jovem e último personagem a se unir aos heróis.</p>

                    <h2>10. Cosmoem é REALMENTE DENSO</h2>

                    <figure>
                        <img src={Cosmoem} alt="Seria impossível carregar Cosmoem" className="image-content"/>
                        <figcaption className="image-caption">
                           Seria impossível carregar Cosmoem
                        </figcaption>
                    </figure>
                    <p>De acordo com a Pokédex, Cosmoem possui apenas 0,1 metro de altura, mas pesa incríveis 999,9 quilos! Assim, Cosmoem está junto com Joltik, Fabebe, Cutiefly e Comfey no grupo dos menores Pokémon, mas também ao lado de Celesteela como um dos mais pesados do bando. O motivo pelo qual Cosmoem é tão pesado mesmo sendo tão pequeno é por causa de sua formação protoestelar. Uma protoestrela é uma estrela-bebê que possui uma massa inacreditável, comprimida num espaço minúsculo. A gente só se pergunta como é que a Lillie conseguia carregá-lo em sua bolsa...</p>


                    <a href="https://www.redbull.com/br-pt/10-fatos-sobre-pokemon-que-voce-provavelmente-nao-tinha-a-menor-ideia"  target="_blank" rel="noreferrer" className="article-link">Fonte</a>
            </section>
        </div>
    )
}
