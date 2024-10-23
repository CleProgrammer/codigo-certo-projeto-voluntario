import '../whatIlike/whatIlike.css'
import Hobbie1png from '../../../images/hobbie1.png'
import Hobbie2png from '../../../images/hobbie2.png'
import Hobbie3png from '../../../images/cb-iconhobbie.png'
import Hobbie4png from '../../../images/hobbie4.png'

function WhatIlike() {
    return (
        <div className="whatIlike-main" data-aos="flip-left" data-aos-duration="2000">
            <div className='hobbie-1'>
                <img src={Hobbie1png}/>
                <div className='hobbie-1-description'>
                    <div className='hobbie-1-description-title'>Jogar Games 🎮🎮</div>
                    <div className='hobbie-1-description-text'>Em meu tempo livre eu gosto de jogar games, principalmente jogos online como Rocket League.</div>
                </div>
            </div>
            <div className='hobbie-2'>
                <img src={Hobbie2png}/>
                <div className='hobbie-2-description'>
                    <div className='hobbie-2-description-title'>Assistir Filmes 🎬🎬</div>
                    <div className='hobbie-2-description-text'>Assistir filmes de ficção científica é outra coisa que gosto de fazer em meu tem livre.</div>
                </div>
            </div>
            <div className='hobbie-3'>
                <img src={Hobbie3png}/>
                <div className='hobbie-3-description'>
                    <div className='hobbie-3-description-title'>Aprender mais 📚📚</div>
                    <div className='hobbie-3-description-text'>Gosto de aprender novas tecnologias, indo além do front-end, como por exemplo banco de dados.</div>
                </div>
            </div>
            <div className='hobbie-4'>
                <img src={Hobbie4png}/>
                <div className='hobbie-4-description'>
                    <div className='hobbie-4-description-title'>Assistir Futebol ⚽️⚽️</div>
                    <div className='hobbie-4-description-text'>Assistindo futebol eu consigo relaxar e ao mesmo tempo passa raiva rsrs. Mas não deixo de assistir. 😄</div>
                </div>
            </div>  
        </div>
    )
}

export default WhatIlike