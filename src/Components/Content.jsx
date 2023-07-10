import './styles/Content.css'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import img5 from '../img/img5.jpg'

const Content = () => {
    
    const desenvolvimento = (e)=>{
        e.preventDefault()
        
        alert("Acalma o coração, estamos em desenvolvimento!!")
    }

    return (
        <div className="card-content">
            <div className="banner banner-1">
                <div className="banner-img banner-img-1">
                    <img className="img" src={img1} alt="img1" />
                </div>
                <div className="banner-description">
                    <p>O melhor projeto para seu negócio.</p>
                </div>
            </div>
            <div className="banner banner-2">
                <div className="banner-description">
                    <p>Seja encontrado pelos seus clientes.</p>
                </div>
                <div className="banner-img banner-img-2">
                    <img className="img" src={img2} alt="img2" />
                </div>
            </div>
            <div className="banner banner-3">
                <div className="banner-img banner-img-3">
                    <img className="img" src={img3} alt="img3" />
                </div>
                <div className="banner-description">
                    <p>Nosso time é o seu time.</p>
                </div>
            </div>
            <div className="banner banner-4">
                <div className="banner-description">
                    <p>Comece agora.</p>
                </div>
                <div className="banner-img banner-img-4">
                    <img className="img" src={img4} alt="img4" />
                </div>
            </div>
            <div id='teste' className=" banner card-fale-conosco">
                <div className="banner-img">
                    <img className="img" src={img5} alt="img5" />
                </div>
                <div className="card-form">
                    <div className="card-text-form-fale-conosco">
                        <h2>Fale Conosco</h2>
                    </div>
                    <form className='form-fale-conosco'>
                        <input className='fc-input' type="text" placeholder='Nome' />
                        <input className='fc-input' type="email" placeholder='E-mail' />
                        <textarea className='fc-textearea' type="text" name="" id="" cols="30" rows="10"></textarea>
                        <button onClick={desenvolvimento} className='fc-btn' type='submit'>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Content;