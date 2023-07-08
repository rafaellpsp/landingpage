import './styles/Navbar.css'
const Navbar = () => {
    return (
        <header className="header">
            <div className='card-logo'>
                <h3>WEBSITE</h3>
            </div>
            <div className="card-nav">
                <div className="card-menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contato</a></li>
                        <li><a href="#">Sobre</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Navbar;