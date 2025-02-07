import { useState, useEffect } from 'react';
import useTheme from '../hooks/useTheme';
export default function ToggleThemeButton() {

    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        const body = document.body;
        body.setAttribute('data-theme', theme);
    }, [theme]);

    const themeIcon = theme === 'light' ? 'moon' : 'sun';

    return (
        <div className="toggle-theme-button">
            <button className={`button theme-button theme-button__${themeIcon}`} type="button" aria-label="Toggle Theme" data-type="icon" onClick={toggleTheme}/>
        </div>
    )
}