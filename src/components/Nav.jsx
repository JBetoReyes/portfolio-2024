export default function Nav() {
    return (
        <nav className="margin-inline-start-13" aria-label="primary navigation">
            <ul className='nav | flex-group '>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Expertise</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
            <div className="hamburger" >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    )
}