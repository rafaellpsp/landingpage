import logo from '../img/logo.png'
import './styles/Navbar.css'
const Navbar = () => {
    return (
        <div className="card-navbar">
            <div className="card-logo">
                <img className='logo' src={logo} alt="logo" />
            </div>
            <nav className='nav'>
                <ul className='ul-nav'>
                    <li className='li-nav'><a href='#'>Sobre</a></li>
                    <li className='li-nav'><a href='#'>Fale conosco</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;