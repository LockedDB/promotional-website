import { createTheme, PaletteMode } from '@mui/material';
import React from 'react';
import designTokens from '../designTokens';

/**
 * Hook that toogles the theme everytime colorMode.toogleColorMode is called
 * @returns toogle theme function & current theme
 */
export function useGetTheme() {
	const [mode, setMode] = React.useState<PaletteMode>('dark');
	const colorMode = React.useMemo(
		() => ({
			toogleColorMode: () => {
				setMode((prevMode: PaletteMode) => (prevMode == 'light' ? 'dark' : 'light'));
			}
		}),
		[]
	);

	return {
		colorMode: colorMode,
		theme: React.useMemo(() => createTheme(designTokens(mode)), [mode])
	};
}
