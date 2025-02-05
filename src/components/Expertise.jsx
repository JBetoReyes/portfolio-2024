import Card from './Card';

export default function Expertise() {
    const expertise = [
        'Javasrcript',
        'Typescript',
        'React',
        'Angular',
        'Node JS',
        'Mong DB',
        'SQL',
        'HTML / CSS',
        'Docker',
        'Kubernetes',
        'VUE',
        'Java',
        'Postgres',
        'AWS Lambda',
        'Spring Boot',
        'Python',
        'Terraform',
        'ECS',
        'GHA',
        'New Relic'
    ];
    return (
        <section id="expertise" className="expertise | margin-block-start-8 margin-md-block-start-10">
            <div className="container" data-type="wide">
                <Card headingText="Top Expertise" headingClasses="clr-primary-400" >
                    <ul className="expertise__list | fs-700 margin-md-block-10 text-center">
                        {expertise.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Card>
            </div>
        </section>
    )
}