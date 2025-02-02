import MacHeader from './MacHeader'

export default function Hero() {
    return (
        <section className="hero">
            <div className="container" data-type="wide">
                <MacHeader />
                <h1 className="heading-1 | text-center margin-block-start-8">HELLO, I'M JOSE REYES</h1>
                <div className="grid-auto-fit margin-block-start-14">
                    <div className="hero__me flex">
                        <img className='mx-auto' src="./me.svg" alt="Jose Reyes" />
                    </div>
                    <div className="card">
                        <h2 className="card__heading clr-primary-100 margin-block-start-5">
                            What do <br/> I do
                        </h2>
                        <p>
                            I'm a multidisciplinary developer <br/> specialized in 
                            <span className="fw-bold">
                             {" "} NodeJS, Angular and <br/> ReactJS
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}