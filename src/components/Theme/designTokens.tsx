import { PaletteMode } from '@mui/material';

export default (darkMode: PaletteMode) => ({
	palette: {
		mode: darkMode,
		...(darkMode == 'dark'
			? {
					primary: {
						main: '#121B16'
					},
					secondary: {
						main: '#5EF2FF'
					},
					text: {
						primary: '#FFFFFFF'
					},
					background: {
						default: '#121b16'
					}
			  }
			: {
					primary: {
						main: '#FFFFFFF'
					},
					secondary: {
						main: '#5EF2FF'
					},
					text: {
						primary: '#121B16'
					},
					background: {
						default: '#121b16'
					}
			  })
	},
	typography: {
		fontFamily: 'Red Hat Display',
		fontSize: 16,
		h1: {
			fontSize: 70,
			fontWeight: 700
		},
		h2: {
			fontSize: 40,
			fontWeight: 700
		},
		h3: {
			fontSize: 24,
			fontWeight: 700
		},
		h4: {
			fontSize: 18,
			fontWeight: 700
		},
		button: {
			fontSize: 16,
			fontWeight: 700
		},
		body1: {
			fontSize: 16,
			lineHeight: 0.88
		}
	}
});
