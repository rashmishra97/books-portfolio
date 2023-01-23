import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChain, faCloudUpload, faCoffee, faLandMineOn, faLockOpen, faMagic, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [press, setPress] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => { setClick(!click) }
    const closeMobileMenu = () => setClick(false);
    // const closeMobileMenu = () => { setPress(!press) }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => { showButton() }, []);

    window.addEventListener('resize', showButton);
    // style={{ backgroundColor: 'yellow'  fa-bars }}''=[]  style={{ backgroundColor: 'lightblue' }}
    return (
        <>
            <nav className='navbar' style={{ backgroundColor: 'pink' }}>
                <div className='navbar-container'>
                    <Link to='' className='navbar-logo' onClick={closeMobileMenu} >FLY <FontAwesomeIcon icon={faLandMineOn}></FontAwesomeIcon></Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars} style={{ backgroundColor: 'lightpink' }}></FontAwesomeIcon>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'><Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link></li>
                        <li className='nav-item'><Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link></li>
                        <li className='nav-item'><Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link></li>
                        <li className='nav-item'><Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>Sign Up</Link></li>
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>RASH</Button>} */}
                    {/* {button && <Button buttonStyle='btn--outline' />} */}
                </div>
            </nav>
        </>
    )
}























{/* <i className='fab fa-typo3'></i> */ }
// <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>{:}

// for (var i = 0; i < 3; i++) {
//     console.log("first", i)
//     // eslint-disable-next-line no-loop-func, no-unused-expressions, no-sequences
//     setTimeout(() => console.log(Math.random()), 1)
// }


export default Navbar