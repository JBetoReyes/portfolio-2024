import { useState, useEffect } from 'react';

export default function useTheme() {
    const [theme, setTheme] = useState(() => {
        let storedTheme;
        if (import.meta.env.SSR) {
            storedTheme = 'light';
        } else {
            storedTheme = localStorage.getItem('theme') || 'light';
        }
        return storedTheme;
    });

    useEffect(() => {
        if (theme === 'light' || theme === 'dark') {
            localStorage.setItem('theme', theme && theme !== 'null' ? theme : 'light')
        }
    }, [theme])

    return { theme, setTheme }
}