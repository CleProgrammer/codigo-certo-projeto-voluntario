import "../motivations/motivations.css"
import CodigoCerto from '../../../images/codigocerto.png'

function Motivations() {
    return (
        <div className="motivations-main" data-aos="flip-left" data-aos-duration="2000">
            <img src={CodigoCerto}/>
            <div className="motivations-text">
                <h1 className="motivations-title">Motivações para participar da comunidade Codigo Certo Coders</h1>
                <div className="motivations-list">
                    <div>• Enfrentar situações do mundo real me ajuda a crescer e me desenvolver como profissional.</div>
                    <div>• Trabalhar em equipe oferece novas perspectivas e troca de conhecimento.</div>
                    <div>• Envolver-se em diferentes projetos é uma ótima maneira de expandir meu conhecimento em tecnologias e boas práticas.</div>
                    <div>• Voluntariar me dá a liberdade de testar novas ferramentas e metodologias de desenvolvimento.</div>
                    <div>• Poderei ter no meu portfólio projetos reais, criados em equipe.</div>
                </div>
            </div>
        </div>
    )
}

export default Motivations