import { Link } from "react-router-dom"
import Nav from "./Nav"

const Header = () => {
    return (
        <header>
            <Link to='/'>
                <img src="../../public/logo.png" alt="Logo Carlos Sebastian Lorenzo" />
                <h3>Sebastian Lorenzo</h3>
            </Link>
            <Nav/>
        </header>
    )
}

export default Header
