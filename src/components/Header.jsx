import { Link } from "react-router-dom"
import Nav from "./Nav"

const Header = () => {
    return (
        <header>
            <Link to='/' className='logo'>
                <h1 className='favicon'>S</h1>
                {/* <img src="../../public/logo.png" alt="Logo Carlos Sebastian Lorenzo" /> */}
                <h4>Sebastian Lorenzo</h4>
            </Link>
            <Nav/>
        </header>
    )
}

export default Header
