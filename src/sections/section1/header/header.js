import '../header/header.css'
import Logo from '../../../images/cb-icon.png'


function Header() {
    return (
        <header>
            <div className='logo-header'>
                <img src={Logo}/>
            </div>
            <nav className='options-header'>
                <ul>
                    <li><a href='#section1'>home</a></li>
                    <li><a href='#section2'>sobre mim</a></li>
                    <li><a href='#section3'>hobbies</a></li>
                    <li><a href='#section4'>motivações</a></li>
                    <li><a href='#section5'>contatos</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header