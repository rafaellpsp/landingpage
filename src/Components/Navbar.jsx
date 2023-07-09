import './styles/Navbar.css'
const Navbar = () => {

    const home = ()=>{
        let obj =document.getElementById("home").scrollIntoView();
    }

    const sobre = ()=>{
        let obj =document.getElementById("sobre").scrollIntoView();
    }

    const contato = ()=>{
        let obj =document.getElementById("teste").scrollIntoView();
    }

    return (
        <header id='home' className="header">
            <div className='card-logo'>
                <h3>WEBSITE</h3>
            </div>
            <div className="card-nav">
                <div className="card-menu">
                    <ul>
                        <li><a onClick={home}>Home</a></li>
                        <li><a onClick={contato}>Contato</a></li>
                        <li><a onClick={sobre}>Sobre</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Navbar;