import './styles/Container.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Content from './Content'
const Container = () =>{
    return(
        <div className="container">
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    )
}
export default Container;