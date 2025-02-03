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
                        <p className="fs-700">
                            I'm a multidisciplinary developer specialized in 
                            <span className="fw-bold">
                             {" "} NodeJS, Angular and ReactJS.
                            </span>
                            <br/>
                            <br/>
                            Senior <span className="fw-bold">Frontend Developer</span> · {" "}
                            <span className='fw-bold'>Certified Cloud</span> Engineer · {" "}
                            <span className='fw-bold'>Javascript Expert</span> · {" "}
                            Technical <span className='fw-bold'>Book Reviewer</span>
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    )
}