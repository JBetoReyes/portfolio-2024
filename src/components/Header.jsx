import Nav from './Nav';
import ToggleThemeButton from './ToggleThemeButton';
export default function Header() {
    return (
        <header className="site-header">
            <div className="container" data-type="wide">
                <div className="site-header__inner">
                    <a href="#">
                        <img src="./Logo.svg" alt="Jose ARQ" />
                    </a>
                    <Nav />
                    <ToggleThemeButton />
                </div>
            </div>
        </header>
    );
}