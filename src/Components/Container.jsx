import './styles/Container.css'
import Navbar from "./Navbar";
import Footer from "./Footer";

const Container = ()=>{
    return(
        <div className='container'> 
            <Navbar/>
            <Footer/>
        </div>
    )
}

export default Container;