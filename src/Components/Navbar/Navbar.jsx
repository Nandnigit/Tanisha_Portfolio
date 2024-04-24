
import React, { useState, useEffect, useLocation } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    const [isAffixed, setIsAffixed] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsAffixed(true);
            } else {
                setIsAffixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
       
    };

    return (
        <nav className={isAffixed ? 'nav affix' : 'nav'}>
            <div className="container">
                <div id="mainListDiv" className={`main_list ${isMenuActive ? 'show_list' : ''}`}>
                    <ul className="navlinks">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <span className="navTrigger" onClick={toggleMenu}>
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </nav>
    );
};

export default Navbar;


