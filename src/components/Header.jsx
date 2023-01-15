// import { Link } from "react-router-dom"
import Nav from "./Nav"

const Header = () => {
    return (
        <header>
            <a to='/' className='logo'>
                <h1 className='favicon'>S</h1>
                <h4>Sebastian Lorenzo</h4>
            </a>
            <Nav/>
        </header>
    )
}

export default Header
