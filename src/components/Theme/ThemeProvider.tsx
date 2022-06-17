import { useState } from 'react';
import { ThemeContext } from './';

interface props {
	children: JSX.Element | JSX.Element[];
}

function ThemeProvider({ children }: props) {
	const [darkMode, setDarkMode] = useState(true);

	const toogleTheme = () => {
		setDarkMode(!darkMode);
	};

	return (
		<ThemeContext.Provider value={{ darkMode, toogleTheme }}>{children}</ThemeContext.Provider>
	);
}

export default ThemeProvider;
