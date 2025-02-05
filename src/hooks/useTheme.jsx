import { useState, useEffect } from 'react';

export default function useTheme() {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme')
        return storedTheme || 'light'
    })

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return { theme, setTheme }
}