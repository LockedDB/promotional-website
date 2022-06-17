import { createContext } from 'react';

export type ThemeContextProps = {
	darkMode: boolean;
	toogleTheme: () => void;
};

export default createContext<ThemeContextProps>({} as ThemeContextProps);
