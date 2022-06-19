import { PaletteMode } from '@mui/material';
import { createContext } from 'react';

export type ThemeContextProps = {
	mode: PaletteMode;
	toogleColorMode: () => void;
};

/* Provides children with context to know the current theme and a function to toogle it */
export default createContext<ThemeContextProps>({} as ThemeContextProps);
