import Card from './Card';

export default function Hero() {
    const HeadingText = <>
        What do <br/>
        I do
    </>
    return (
        <section className="hero">
            <div className="container" data-type="wide">
                <h1 className="heading-1 | text-center margin-block-start-8">HELLO, I'M JOSE REYES</h1>
                <div className="grid-auto-fit margin-block-start-14">
                    <div className="hero__me | flex">
                        <img className='mx-auto' src="./me.svg" alt="Jose Reyes" />
                    </div>
                    <Card headingText={HeadingText} headingClasses="clr-primary-100">
                        <p>
                            I'm a multidisciplinary developer <br/> specialized in 
                            <span className="fw-bold">
                             {" "} NodeJS, Angular and <br/> ReactJS
                            </span>
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    )
}