import {Link } from 'react-router-dom';
import {useState} from "react";

 const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo"> Miles-Portfolio</a>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ?'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                       <Link to='/' className='nav-links'
                       onClick={closeMobileMenu}>Home</Link> 
                    </li>
                    <li className="nav-item">
                       <Link to='/aboutme' className='nav-links'
                       onClick={closeMobileMenu}>About</Link> 
                    </li>
                    <li className="nav-item">
                       <Link to='/skill' className='nav-links'
                       onClick={closeMobileMenu}>My-Skill</Link> 
                    </li>
                    <li className="nav-item">
                       <Link to='/contact' className='nav-links'
                       onClick={closeMobileMenu}>Contact</Link> 
                    </li>  
                </ul>
            </div>
        </nav>  
        </>
    )
 }
export default Navbar;
