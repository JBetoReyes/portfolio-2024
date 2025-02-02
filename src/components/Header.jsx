import Nav from './Nav';

export default function Header() {
    return (
        <header className="site-header">
            <div className="container" data-type="wide">
                <div className="site-header__inner">
                    <a href="#">
                        <img src="/Logo.svg" alt="Jose ARQ" />
                    </a>
                    <Nav />
                    <div className="site-header__theme margin-inline-start-auto">
                        <button className='button theme-button theme-button__sun' type="button" aria-label="Toggle Theme" data-type="icon"/>
                    </div>
                </div>
            </div>
        </header>
    );
}