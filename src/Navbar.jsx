import {Link } from 'react-router-dom';
// import { useRef } from 'react';

import {useState} from "react";

 const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                {/* <Link to="/ " className="navbar-logo">Miles-Portfolio</Link> */}
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

//     const navRef = useRef();

//     const showNavbar = ()=>{
//         navRef.current.classList.toggle("responsive_nav"); 
//     }
//     return ( 
//         <header>
//             <h1><a href="/"> Miles-Portfolio</a></h1>
//             <nav ref={navRef} >        
//             <a href="/aboutme">About </a>    
//             <a href="/skill">My-Skill </a>    
//              <a href="/contact">Contact </a>    
//             <button className='nav-btn nav-close-btn' onClick={showNavbar}>
//                  <FaTimes/>
//                 </button>
//                 </nav>
//            <button className='nav-btn' onClick={showNavbar}>
//                 <FaBars/> 
//            </button>
            
//         </header>
      
//      );