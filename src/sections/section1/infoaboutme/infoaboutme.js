import '../infoaboutme/infoaboutme.css'
import MinhaFoto from '../../../images/minhafoto23.png'
import ReactIcon from '../../../images/react-icon.png'
import HtmlIcon from '../../../images/html-icon.png'
import CssIcon from '../../../images/css-icon.png'
import JavaScriptIcon from '../../../images/javascript-icon.png'
import GitIcon from '../../../images/git-icon.png'

function InfoAboutMe() {
    const c = (cl) => document.querySelector(cl)
    
    return (
        <div className='info-about-me'>
            <div className='infos'>
                <div className='info-main'>
                    <div>Olá, eu sou</div>
                    <div className='my-name'>CLEBSON BARBOSA</div>
                    <div style={{marginTop: '0.3vw'}}>desenvolvedor front-end</div>
                    <div className='icons-programming'>
                        <img src={ReactIcon}/>
                        <img src={JavaScriptIcon}/>
                        <img src={HtmlIcon}/>
                        <img src={CssIcon}/>
                        <img src={GitIcon}/>
                    </div>
                </div>
            </div>
            <div className='picture'>
                <img src={MinhaFoto}/>
            </div>
        </div>
    )
}

export default InfoAboutMe