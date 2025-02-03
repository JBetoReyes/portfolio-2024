import Nav from './Nav';

export default function Header() {
    return (
        <header className="site-header">
            <div className="container" data-type="wide">
                <div className="site-header__inner">
                    <Nav />
                </div>
            </div>
        </header>
    );
}