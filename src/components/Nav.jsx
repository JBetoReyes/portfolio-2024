export default function Nav() {
    return (
        <nav className="margin-inline-start-13" aria-label="primary navigation">
            <ul className='nav | flex-group '>
                <li><a href="#about">About Me</a></li>
                <li><a href="#expertise">Expertise</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
            <div className="hamburger" >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    )
}