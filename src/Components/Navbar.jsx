import { useState } from 'react'
import './styles/Navbar.css'

const Navbar = () => {

    window.addEventListener("scroll", () => {

        document.getElementById('home').className = 'header2'
        document.getElementById('content').className = 'card-content2'

        setTimeout(() => {
            document.getElementById('home').className = 'header'
            document.getElementById('content').className = 'card-content'
        }, 10000)
    })

    return (
        <header id='home' className='header'>
            <div className='card-logo'>
                <h3>WEBSITE</h3>
            </div>
            <div className="card-nav">
                <div className="card-menu">
                    <ul>
                        <li><a href='#content'>Home</a></li>
                        <li><a href='#contato'>Contato</a></li>
                        <li><a href='#sobre' >Sobre</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Navbar;