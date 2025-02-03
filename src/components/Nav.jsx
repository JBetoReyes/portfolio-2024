import { useState } from 'react';
import ToggleThemeButton from './ToggleThemeButton';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(isOpen => !isOpen);
    };
    return (
        <nav aria-label="primary navigation">
            <a href="#">
                <img src="./Logo.svg" alt="Jose ARQ" />
            </a>
            <ul className={`nav | ${isOpen ? 'active' : ''}`}>
                <li onClick={toggleMenu}><a href="#about">About Me</a></li>
                <li onClick={toggleMenu}><a href="#expertise">Expertise</a></li>
                <li onClick={toggleMenu}><a href="#projects">Projects</a></li>
                <li onClick={toggleMenu}><ToggleThemeButton /></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    )
}