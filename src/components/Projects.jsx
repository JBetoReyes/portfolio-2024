import Card from './Card';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const style = {
        '--min-grid-auto-width': '350px',
        '--grid-column-gap': '5rem',
    };
    return (
        <section id="projects" className="projects | margin-block-start-10">
            <div className="container" data-type="wide">
                <Card headingText="Personal Projects" headingClasses="clr-primary-500" >
                    <div className='projects__list | grid-auto-fit margin-block-start-10' style={style}>
                        <ProjectCard 
                            iconName="poke-app"
                            title="Poke App" 
                            description="Small pet project that I created while I was learning React Hooks, API, Request Infinity scroll, multipage aplication, search bars" 
                            link="https://www.pokeapp.josearq.com/" 
                        />
                        <ProjectCard 
                            iconName="brand-boosters"
                            title="Brand Boosters" 
                            description="Small pet project that I created while I was learning React Hooks, API, Request Infinity scroll, multipage aplication, search bars" 
                            link="https://jbetoreyes.github.io/beyond-brand-boosters/"
                        />
                        <ProjectCard
                            iconName="barbershop"
                            title="Barbershop"
                            description="Small pet project that I created while I was learning React Hooks, API, Request Infinity scroll, multipage aplication, search bars"
                            link="https://jbetoreyes.github.io/beyond-barber/"
                        />
                        <ProjectCard
                            iconName="cheff"
                            title="Cheff"
                            description="Small pet project that I created while I was learning React Hooks, API, Request Infinity scroll, multipage aplication, search bars"
                            link="https://jbetoreyes.github.io/beyond-css-cheff/"
                        />
                        <ProjectCard 
                            iconName="workit"
                            title="Workit" 
                            description="Small pet project that I created while I was learning React Hooks, API, Request Infinity scroll, multipage aplication, search bars" 
                            link="https://jbetoreyes.github.io/beyond-workit-landing-page/"  
                        />
                    </div>
                </Card>
            </div>
        </section>
    )
}