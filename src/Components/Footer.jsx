import './styles/Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="box-footer box-1">
                <div className="card-text card-text-address">
                    <h3>Endereço</h3>
                </div>
                <div className="card-content-footer card-content-footer-address">
                    <p><strong>Endereço:</strong>Avenida Felipe Carrillo Puerto</p>
                    <p><strong>Nº:</strong>350</p>
                    <p><strong>Bairro:</strong>Jardim Iae</p>
                    <p><strong>Cidade:</strong>São Paulo</p>
                    <p><strong>UF:</strong>SP</p>
                </div>
            </div>
            <div className="box-footer box-2">
                <div className="card-text card-text-contact">
                    <h3>Contatos</h3>
                </div>
                <div className="card-content-footer card-content-footer-contact">
                    <p><strong>Tel:</strong>(11)2222-2222</p>
                    <p><strong>Tel:</strong>(11)995967-3218</p>
                    <p><strong>E-mail:</strong>rafaellpsp@outlook.com</p>
                </div>
            </div>
            <div className="box-footer box-3">
                <div className="card-text card-text-midias">
                    <h3>Mídias</h3>
                </div>
                <div className="card-content-footer card-content-footer-midias">
                    <p><strong>Instagram:</strong>@rafaellpsp</p>
                    <p><strong>Facebook:</strong>@Rafaellopes</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;