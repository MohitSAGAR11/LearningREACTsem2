import React , { useState } from 'react';

function ThemeToggle() {
    const [theme , setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const style = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',

    }

    return (

        <div className={theme} stule={style}>
        <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}
export default ThemeToggle;