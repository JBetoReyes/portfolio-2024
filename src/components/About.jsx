import Card from './Card';

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container" data-type="wide">
                <div className="grid-auto-fit margin-block-start-10">
                    <Card headingText="More about me" headingClasses="clr-primary-200">
                        <p>
                            Results-driven Senior Software Engineer with <span className="fw-bold">8+ years of expertise</span>{" "} 
                            in full-stack development, specializing in <span className="fw-bold">JavaScript ecosystems</span> {" "} and {" "} 
                            <span className="fw-bold">cloud architecture</span>. <span className="fw-bold">Led 3 engineering multicultural teams</span>, 
                            driving successful delivery of enterprise-scale applications serving <span className="fw-bold">millions of users</span>.
                            <br/>
                            <br/>
                            When I'm not in the office working remotely I can be found eating tacos, dancing salsa, reading sci-fi, playing video games, 
                            learning new skills, and occasionally, writing about some of that here.
                        </p>
                    </Card>
                    <Card headingText="Find me on" headingClasses="clr-primary-300">
                        <ul className="about__contact-info | margin-block-start-8">
                            <li className="about__email | flex-group">
                                <span className="icon-mail" />
                                <p>
                                    <a href="mailto:Josereyes55@hotmail.com" className="clr-primary-300">Josereyes55@hotmail.com</a>
                                </p>
                            </li>
                            <li className="about__linkedin | flex-group">
                                <span className="icon-linkedin" />
                                <p><a href="https://www.linkedin.com/in/josealbertoquevedo/" className="clr-primary-300">/in/josealbertoquevedo/</a></p>
                            </li>
                            <li className="about__github | flex-group">
                                <span className="icon-github" />
                                <p><a href="https://github.com/JBetoReyes" className="clr-primary-300">github.com/JBetoReyes/</a></p>
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
        </section>
    )
}