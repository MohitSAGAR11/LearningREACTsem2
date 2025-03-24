import React , {useState} from 'react';

function ThemeToggle() {
    const [theme , setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className={theme}>
            <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</h1>
            <button onClick={toggleTheme}>Toggle Button</button>
        </div>
    )
}

export default ThemeToggle;