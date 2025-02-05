import Card from './Card';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const style = {
        '--min-grid-auto-width': '450px',
        '--grid-column-gap': '5rem',
        '--grid-row-gap': 'var(--section-gap)'
    };
    return (
        <section id="projects" className="projects | margin-block-start-8 margin-md-block-start-10">
            <div className="container" data-type="wide">
                <Card headingText="Personal Projects" headingClasses="clr-primary-500" >
                    <div className='projects__list | grid-auto-fit margin-md-block-10' style={style}>
                        <ProjectCard 
                            iconName="poke-app"
                            title="Poke App" 
                            description="A personal project I built while learning React Hooks, APIs, infinite scrolling, multi-page applications, and search bar implementation." 
                            link="https://www.pokeapp.josearq.com/" 
                        />
                        <ProjectCard 
                            iconName="brand-boosters"
                            title="Brand Boosters" 
                            description="Multi page application with responsive design, that includes a pricing table, price comparison table, built with React, sass, and javascript" 
                            link="https://jbetoreyes.github.io/beyond-brand-boosters/"
                        />
                        <ProjectCard
                            iconName="barbershop"
                            title="Barbershop"
                            description="Mock barbershop website with responsive design, multi theme, form validation, built with HTML, CSS, and javascript"
                            link="https://jbetoreyes.github.io/beyond-barber/"
                        />
                        <ProjectCard
                            iconName="cheff"
                            title="Cheff"
                            description="Restaurant landing page with responsive design, built with HTML, CSS, and javascript"
                            link="https://jbetoreyes.github.io/beyond-css-cheff/"
                        />
                        <ProjectCard 
                            iconName="workit"
                            title="Workit" 
                            description="Mock startup website with responsive design, built with HTML, CSS, and javascript" 
                            link="https://jbetoreyes.github.io/beyond-workit-landing-page/"  
                        />
                    </div>
                </Card>
            </div>
        </section>
    )
}