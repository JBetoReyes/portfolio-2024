import Card from './Card';

export default function Expertise() {
    const expertise = [
        'Javasrcript',
        'Typescript',
        'Mong DB',
        'SQL',
        'HTML / CSS',
        'Node JS',
        'Docker',
        'VUE',
        'Java',
        'Postgres',
        'AWS Lambda',
        'Spring Boot',
        'React',
        'Python',
        'Angular',
        'EC2',
        'Terraform',
        'ECS',
        'GHA',
        'New Relic'
    ];
    return (
        <section className="expertise | margin-block-start-10">
            <div className="container" data-type="wide">
                <Card headingText="Top Expertise" headingClasses="clr-primary-400" >
                    <ul className="expertise__list | fs-700 margin-block-start-10 margin-inline-11">
                        {expertise.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Card>
            </div>
        </section>
    )
}